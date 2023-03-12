import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {isAuthenticated} from '../auth/helper';

import {useParams} from 'react-router-dom';
import Base from './Base';
import { Select } from '@chakra-ui/react';

function UploadFile(props) {
    const {id} = useParams();
     const {x,setX}=props.xState2;
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('purpose', selectedFileType)
        try {
            await axios.post(`http://localhost:3001/classroom/${
                user.name
            }/${id}/files`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            // Do something after successful upload, e.g., display a success message
        } catch (error) {
            console.error(error);
            // Handle the error
        }
        setX(!x)
    };

    
 

    const {user, token} = isAuthenticated()
    const [file, setFile] = useState(null);

    const navigate = useNavigate()

    const [selectedFileType, setSelectedFileType] = useState('Notes');
    const handleFileTypeChange = (event) => {
        setSelectedFileType(event.target.value);
    };


    const handleFileChange = (event) => {
        setFile(event.target.files[0]);

    };


  
    return (
       
            <div  className='upload_form' >
                <form onSubmit={handleSubmit}>
                  <div className='uploaditem'> <input type="file"
                        onChange={handleFileChange}/></div> 
                <div className='uploaditem'>  <Select value={selectedFileType}
                        onChange={handleFileTypeChange}>
                        <option value="notes">Notes</option>
                        <option value="qa">Question Paper</option>
                        <option value="assignment">assignment</option>
                    </Select></div>  
                    <button className='uploabutton' type="submit">Upload</button>
                   
                </form>
            </div>
     

    );

}


export default UploadFile;
