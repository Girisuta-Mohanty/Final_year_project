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
// import { Button, ButtonGroup } from '@chakra-ui/react'
const Alumii = () => {
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState(null);
  // const [cv, setCv] = useState(null);
  // const [files,setFiles]=useState([]);
   const [email, setEmail] = useState('');
  const handleSubmit =async (event) => {
    // event.preventDefault();
    // console.log({ name, batch, profession, image, cv, email });
    // Here you can send the form data to your backend or do something else with it
    event.preventDefault();
    const myForm = event.target;
  const formData = new FormData(myForm);
  formData.append('batch', batch);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('profession', profession);
  formData.append('avatar', image);
  // formData.append('cv',cv);
   for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  const config = {
    method:"POST",
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    }
  }
   try {
    const response = await axios.post("http://localhost:3001/alumni/createAlumni",formData,
     {
      headers: {
        'Content-Type': 'multipart/form-data',
        // Accept: 'application/json',
    },
    body: response.json.Stringify(formData),
     } );
  } catch (error) {
    console.error(error);
  }
  };
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }
  const [data,setData]=useState([]);
  // const [batchs,setBatchs]=useState(null);
  // const [names,setNames]=useState(null);
  // const [professions,setProfessions]=useState(null);
  // const [images,setImages]=useState([]);
  useEffect(()=>{
    fetchData();
  }, [])
  const [imageData, setImageData] = useState(null);

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
  return (
    <Base>
    <ButtonGroup size='sm' isAttached variant='outline'>
  <Button colorScheme='pink' variant='solid' size='lg' style={{}} >Add an Alumni</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} onClick={toggleForm} size='lg'/>
</ButtonGroup>
     {/* <button onClick={toggleForm}>+ Add an Alumni</button> */}
     {showForm &&(<form onSubmit={handleSubmit} className='form-container'>
     <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
<FormControl>
  <FormLabel>Name</FormLabel>
  <Input type='text' value={name} onChange={(event) => setName(event.target.value)} />
</FormControl>
<FormControl>
  <FormLabel>Batch(start-end)</FormLabel>
  <Input type='text' value={batch} onChange={(event) => setBatch(event.target.value)}  />
</FormControl>
<FormControl>
  <FormLabel>Profession</FormLabel>
  <Input type='text' value={profession} onChange={(event) => setProfession(event.target.value)}/>
</FormControl>
<FormControl>
  <FormLabel>Image
      </FormLabel>
      <Input type="file" id="image" onChange={(event) => setImage(event.target.files[0])} />
</FormControl>
<Button
            mt={4}
            colorScheme='teal'
            // isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
      {/* <button type="submit" className='form-button '>Submit</button> */}
    </form>)}
   
    <div>
       <section className='main-card--cointainer' >
      {
        data.map((curElem)=>{
            const {batch,name,email,profession,image}=curElem;
            
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
            {/* {imageData && ( */}
        {/* <img src={`data:image/png;base64,${image}`} alt="Profile Image" /> */}
        {imageData && <img src={imageData} alt="Image" />}
      {/* )} */}
            {/* <img src={`data:image/jpeg;base64,${image}`} className='card-media'/> */}
            <div className="file-size">{imageData}</div>
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
