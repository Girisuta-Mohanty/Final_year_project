import React, {useEffect, useState} from 'react';
import ClassroomBox from './ClassroomBox';
import Base from './Base';
import axios from 'axios';

const Resources = () => {

    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/classroom/classrooms'); // replace with your API endpoint
            setData(response.data);
            setData1(data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Base>
            <div style={{width:"90vw" }}>
                <h1 style={{fontSize:"2rem" ,fontWeight:'400',marginTop:'80px',marginRight:"10px"}}>SUBJECTS</h1>
                <div className='classroom_container'>    {
                    data.map((item) => <ClassroomBox title={
                            item.name
                        }
                        description="Learn about numbers, equations, and more!"
                        image="https://picsum.photos/id/237/200/300"
                        id={
                            item._id
                        }/>)
                } </div>
            </div>
        </Base>

    );
};

export default Resources;
