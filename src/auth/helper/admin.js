import axios from "axios";



export const createAlumni= async (formData) => {
    console.log(`LINE NUMBER 4`);
    return axios.post(`http://localhost:3001/alumni/createAlumni`,formData, {
    
      headers: {
        'Content-Type': 'multipart/form-data',
         Accept: 'application/json',
    },
    
  }).then((response) => console.log('alumni added success'))
  .catch((err) => console.log(err))
}

export const Imghelper = (alumni) => {
    const imageUrl = alumni
      ? `http://localhost:3001/alumni/image/${alumni._id}`
      : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
    return imageUrl;
  };
