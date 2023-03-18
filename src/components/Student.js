import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Base from './Base';
import { Table, Button, Modal } from 'react-bootstrap';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const Student = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/user/alluser'); // replace with your API endpoint
      setData(response.data);
      setData1(data);
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  };
  //id
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  //name
  const [filterText1, setFilterTexts] = useState('');
  const [filteredData1, setFilteredData1] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  //   const [d, setD] = useState({
  //     classId:'',
  //     name: '',
  //   email: '',
  //   skill:[],
  //   projects: [],
  //   experience: [],
  // role:0});

  const [showModal, setShowModal] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skill, setSkill] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [collgeId, setCollegid] = useState('');
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const handleClick = async (email1) => {
    console.log(`http://localhost:3001/user/${email1}`);
    const response = await axios.get(`http://localhost:3001/user/${email1}`);
    // setDs(response.data);
    console.log(response.data);
    const { collegId, name, email, skill, projects, experience } = response.data;
    setCollegid(collegId);
    setName(name);
    setEmail(email);
    setSkill(skill);
    setProjects(projects);
    setExperience(experience);
    const response1 = await axios.get(`http://localhost:3001/user/${email}/projects`);
    setData2(response1.data);
    console.log("projects--" + data2);
    const response2 = await axios.get(`http://localhost:3001/user/${email}/experience`);
    setData3(response2.data);
    console.log("projects----" + data3);

    //  console.log(classId)
    //  setD({classId,name,email,skill,projects,experience});
    //   console.log('hellooooo'+d.name);

    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };
  //const jsonData = JSON.stringify(data);

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    console.log(filterText);
    const filter = data.filter((row) => {
      return row.collegeId == filterText;
    })
    console.log(filter);
    setFilteredData(filter);
    //  console.log("Hello"+filteredData[0].skill);
    if (filter.length == 0) {
      alert('No student exists');
    }
    console.log(`ssdbkjbcdsb ${filteredData}`);
    //  data=data1;

  };
  const handleFilterSubmit2 = (event) => {
    event.preventDefault();
    console.log(filterText1);

    const filter = data.filter((row) => {
      const myarr = row.name.split(" ");

      return row.name.toLowerCase() === filterText1 || (row.name == filterText1) || (row.name.toUpperCase() == filterText1) ||
        (myarr[0].toLowerCase() == filterText1.toLowerCase()) || (myarr[myarr.length - 1].toUpperCase() == filterText1.toUpperCase())
        ;
    })
    console.log(filter);
    setFilteredData1(filter);
    if (filter.length == 0) {
      alert('Not available')
    }
    console.log(`ssdbkjbcdsb ${filteredData1.length}`);

    data = data1;


  };
  // const handleFilterSubmit3 = (event) => {
  //   event.preventDefault();
  //   console.log(filterText2);
  //   const filter=data.filter((row)=>{
  //     const myarr=row.skill.split(",");
  //     console.log(myarr);


  //     return row.skill.toLowerCase()==filterText2 || (row.skill==filterText2)||(row.skill.toUpperCase()==filterText2)
  //     ||(myarr[0].toLowerCase()==filterText2.toLowerCase())||(myarr[myarr.length-1].toUpperCase()==filterText2.toUpperCase());
  //   })
  //   console.log(filter);
  //    setFilteredData2(filter);
  //    if(filter.length==0){
  //     alert('Not available')
  //    }
  //    console.log(`ssdbkjbcdsb ${filteredData2.length}`);



  // };
  const handleFilterReset = () => {
    setFilterText('');
    setFilteredData([]);

    setFilterTexts('');
    setFilteredData1([]);

    // setFilterTextss('');
    // setFilteredData2([]);
  };
  return (

    <Base>
      <div>
        <input type="text" placeholder='Search By Id' className="centered-placeholder" value={filterText}
          onChange={(e) => setFilterText(e.target.value)} />
        <button type="submit" style={{ marginRight: "200px" }} className="signin1" onClick={handleFilterSubmit}>Search </button>

        <input type="text" placeholder='Search By Name' className="centered-placeholder" value={filterText1} onChange={(e) => setFilterTexts(e.target.value)} />
        <button type="submit" style={{ marginRight: "200px" }} className="signin1" onClick={handleFilterSubmit2} >Search</button>

        {/* <input type="text" placeholder='Search By Skill' className="centered-placeholder" value={filterText2} onChange={(e) => setFilterTextss(e.target.value)} />
      <button type="submit" className="signin1" style={{ marginRight: "50px" }} onClick={handleFilterSubmit3}>Search</button>
       */}

      </div>
      <div> <button type="button" onClick={handleFilterReset} className="signin2">
        Reset
      </button></div>

      <div style={{ width: "100%" }}>
        <table class="table" style={{ width: "100%", border: "solid black 1px" }}>
          <thead>
            <tr style={{ backgroundColor: "rgb(132, 8, 25)", color: 'white' }}>
              <th className="centered-text">ID</th>
              <th className="centered-text">Name</th>
              {/* <th className="centered-text">Skill</th> */}
            </tr>
          </thead>
          <tbody>

            {
              filteredData.length > 0 ? filteredData.map((row) => (
                <tr key={row._id} onClick={() => handleClick(row.email)}>
                  <td>{row.collegeId}</td>
                  <td>{row.name}</td>
                  {/* <td>{row.email}</td> */}
                  {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}

                </tr>
              )) : (filteredData1.length > 0 ? filteredData1.map((row) => (
                <tr key={row._id} onClick={() => handleClick(row.email)}>
                  <td>{row.collegeId}</td>
                  <td>{row.name}</td>
                  {/* <td>{ds.data.email}</td> */}
                  {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}

                </tr>
              )) : "")
            }
          </tbody>
        </table>
      </div>
      {showDetails && (
        <div className="modal-overlay">
          <div className='modal-container'>
            <span className="modal-close" onClick={handleClose}>
              &times;
            </span>
            <div className='modal-title'>
              Student Details
            </div>
            <div className="resume">

              <h1 className="name" style={{ textAlign: "center" }}>{name}</h1>
              <p className="email" style={{ textAlign: "center" }}>{email}</p>
              <h2 className='section-title'>Skill</h2>
              <div>
              <ol>
                {skill.map((project,index) => (
                  <li key={index} style={{listStyle:"decimal",fontSize:"1.5rem",margin:"20px"}}>
                    <div className="project" key={index}>
                      <h1>{project}</h1>
                    
                    </div>
                  </li>

                ))}
                  </ol>
              </div>
              
              <h2 className="section-title">Projects</h2>
              
              <ol>
                {data2.map((project,index) => (
                  <li key={index} style={{listStyle:"decimal",fontSize:"1.5rem",margin:"20px"}}>
                    <div className="project" key={project.name}>
                      <h1 className="project-title">{project.name}</h1>
                      <p className="project-description">{project.description}</p>
                    
                    </div>
                  </li>

                ))}
                  </ol>

              {/* </ol> */}


              <h2 className="section-title">Experience</h2>
              <ol>
              {data3.map((exp,index) => (
                <li key={index} style={{listStyle:"decimal",fontSize:"1.5rem",margin:"20px"}}>
                <div className="experience" key={exp.name}>
                  <h3 className="experience-company">{exp.name}</h3>
                  <h1 className="experience-description">{exp.description}</h1>
                  <p className="experience-role">Role: {exp.role}</p>
                </div>
                </li>
              ))}
              </ol>
              
            </div>
          </div>


        </div>
      )}
    </Base>

  )
}

export default Student