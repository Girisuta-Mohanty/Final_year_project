import axios from 'axios';
import React,{useState} from 'react'
import {Alumni} from './AlumniApi';
import Base from './Base';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,Button
} from '@chakra-ui/react'
const Alumii = () => {
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState(null);
  const [cv, setCv] = useState(null);
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
  formData.append('image', image);
  formData.append('cv',cv);
  // console.log(image);
  // const user={
  //   cv:formData.get("image"),
  //   image:formData.get("cv")
  // };
  // setFiles([...files, user]);
  // setFiles([...files,image,cv]);
  // setFiles([...files,cv]);
  // console.log(files);
  // files.forEach(file=>(formData.append("files",file)));
  // formData.append('files', [image,cv]);
  // formData.append('files', cv);
 
  // console.log(formData.get("name"));
  // console.log(formData.get("batch"));
  // console.log(formData.get("profession"));
  // console.log(formData.get("files"));
  // console.log(formData.get("cv"));
  //  console.log(formData.get("email"));
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
    const response = await fetch("http://localhost:3001/alumni/createAlumni",formData,
     {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
     } );
  //{
  //      method: "POST",
  //     // headers: {
  //     //         'Content-Type': 'multipart/form-data',
  //     //         Accept: 'application/json',
  //     //     },
  //     // body: formData,
  //     method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json'
  // },
  // body: JSON.stringify(Object.fromEntries(formData)),
    // }
    const data = await response.json();
   console.log(data);
  } catch (error) {
    console.error(error);
  }
// try {
//   const response = await fetch("http://localhost:3001/alumni/createAlumni", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Accept: 'application/json',
//   },
//     body: formData,
//   });
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }
  };
  return (
    <Base>
     <form onSubmit={handleSubmit} className='form-container'>
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
<FormControl>
  <FormLabel>CV
      </FormLabel>
      <Input type="file" id="cv" onChange={(event) => setCv(event.target.files[0])} />
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
    </form>
    <div>
       <section className='main-card--cointainer' >
      {
        Alumni.map((curElem)=>{
            const {id,name,image,profession}=curElem;
            return (
                <>
                <div className='card-container' key={id}>
            <div className='card' style={{height:"90%"}}>
            <div className='card-body'>
                <span className='card-Number card-circle subtle'>{id}</span>
                
                <h2 className='card-title'>{name}</h2>
                <span className='card-description subtle'>
               {profession}
                </span>
            </div>
            <img src={image} alt="image" className='card-media'/>
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
