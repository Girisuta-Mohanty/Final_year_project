import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Alumni} from './AlumniApi';
import Base from './Base';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,Button,ButtonGroup,IconButton
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { createAlumni, Imghelper } from '../auth/helper/admin';
// import { Button, ButtonGroup } from '@chakra-ui/react'
const Alumii = () => {
  
  const [values, setvalues] = useState({
    name: '',
    batch: '',
    email: '',   
    formData: '',
    profession:''
  });
  const {
    name,
    email,
    batch,
    formData,
    profession,
   
  } = values;
  const [file,setFile]=useState(null)

//   const preload = () => {
   
//     setvalues({ ...values, formData: new FormData() });

// };
useEffect(() => {
fetchData();
}, []);

const fetchData=
    async() => {
      try {
        const response = await axios.get('http://localhost:3001/alumni/alumnis'); // replace with your API endpoint
        setData(response.data);
        console.log(response.data);
  
      } catch (error) {
        console.log(error);
      }
  }



  const handleSubmit =async (event) => {
    event.preventDefault();
    //refresing the errors
    // setvalues({ ...values });
    const formData= new FormData()
    formData.append("file", file); 
    formData.append("name", name);
    formData.append("email", email);
    formData.append("batch", batch);
    formData.append("profession", name);
   
        
    
    console.log('FORM DATA: ', formData.get("email"));
    console.log('FORM DATA: ', formData.get("batch"));
    console.log('FORM DATA: ', formData.get("profession"));
    console.log('FORM DATA: ', formData);
    console.log('FORM DATA: ', formData.get("name"));

    try {
      await axios.post(`http://localhost:3001/alumni/createAlumni/${email}`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
              Accept: 'application/json',
           
          }
      });
      // Do something after successful upload, e.g., display a success message
  } catch (error) {
      console.error(error);
      // Handle the error
  }
  setvalues({
    ...values,
    name: '',
    batch: '',
    email: '',
  
    profession:'' 
    
  });
};
    
  const [showForm, setShowForm] = useState(false);
  const [fileUrl, setFileUrl] = useState("");


  const toggleForm = () => {
    setShowForm(!showForm);
  }
  const [data,setData]=useState([]);
  // const [batchs,setBatchs]=useState(null);
  // const [names,setNames]=useState(null);
  // const [professions,setProfessions]=useState(null);
  // const [images,setImages]=useState([]);
 
 




  

  
  const handleChange = (name) => (event) => {
   

    const value = event.target.value;
    
    
    //based on whatever the name is the values are given
    setvalues({ ...values, [name]: value });
  };
  const handleChange1 =  (event) => {
   

    setFile(event.target.files[0]);
  };
 

  return (
    <Base>
    <ButtonGroup size='sm' isAttached variant='outline'>
  <Button colorScheme='pink' variant='solid' size='lg'onClick={toggleForm} style={{ marginTop:"80px",marginRight:"10px"}} >Add an Alumni</Button>
  {/* <IconButton aria-label='Add to friends' icon={<AddIcon />} onClick={toggleForm} size='lg' style={{ marginTop:"80px"}}/> */}
</ButtonGroup>
     {/* <button onClick={toggleForm}>+ Add an Alumni</button> */}
     {
     showForm &&(  
      (<form onSubmit={handleSubmit} className='form-container'>
      <FormControl>
   <FormLabel>Email address</FormLabel>
   <Input type='email' value={email} onChange={handleChange('email')} />
   <FormHelperText>We'll never share your email.</FormHelperText>
 </FormControl>
 <FormControl>
   <FormLabel>Name</FormLabel>
   <Input type='text' value={name} onChange={handleChange('name')} />
 </FormControl>
 <FormControl>
   <FormLabel>Batch(start-end)</FormLabel>
   <Input type='text' value={batch}  onChange={handleChange('batch')} />
 </FormControl>
 <FormControl>
   <FormLabel>Profession</FormLabel>
   <Input type='text' value={profession}  onChange={handleChange('profession')} />
 </FormControl>
 <FormControl>
   {/* <FormLabel>Image
       </FormLabel> */}
       <input type="file"
                        onChange={handleChange1}/>
 </FormControl>
 <Button mt={4}
             colorScheme='teal'
             onClick={handleSubmit}
             type='submit'
           >
             Submit
           </Button>
     
     </form>)
    
    )}
   
    <div>
       <section className='main-card--cointainer' >
      {
        data.map((curElem)=>{
            const {batch,name,email,profession,image}=curElem;
            const imageUrl = Imghelper(curElem);
          
            return (
                <>
                <div className='card-container' key={email}>
            <div className='card' style={{height:"90%"}}>
            <div className='card-body'>
                {/* <span className='card-Number card-circle subtle'>{id}</span> */}
             
                <h2 className='card-title'>{name}</h2>
                <h2 className='card-title'>{email}</h2>
                <h2 className='card-title'>{batch}</h2>
                <span className='card-description subtle'>
               {profession}
                </span>
            </div>          
        { <img src={imageUrl} alt="Image" />}
        </div>
      </div>
                </>
            );
        })
      }
      </section>
      
    </div>
    </Base>
    
  )
}

export default Alumii
