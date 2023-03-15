import React from 'react'
import { useState,useEffect } from 'react';
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
    //skill
    const [filterText2, setFilterTextss] = useState('');
    const [filteredData2, setFilteredData2] = useState([]);
    // const [showAlert, setShowAlert] = useState(false);
    // const [alertData, setAlertData] = useState({});

    // const handleRowClick = (rowData) => {
    //   setShowAlert(true);
    //   setAlertData(rowData);
    // };
    const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };
    //const jsonData = JSON.stringify(data);

    const handleFilterSubmit = (event) => {
      event.preventDefault();
      console.log(filterText);
      const filter=data.filter((row)=>{
        return row.collegeId==filterText;
      })
      console.log(filter);
       setFilteredData(filter);
      //  console.log("Hello"+filteredData[0].skill);
       if(filter.length==0){
        alert('No student exists');
       }
       console.log(`ssdbkjbcdsb ${filteredData}`);
      //  data=data1;
      
    };
    const handleFilterSubmit2 = (event) => {
      event.preventDefault();
      console.log(filterText1);
      
      const filter=data.filter((row)=>{
        const myarr=row.name.split(" ");
    
        return row.name.toLowerCase()===filterText1 || (row.name==filterText1)||(row.name.toUpperCase()==filterText1)||
        (myarr[0].toLowerCase()==filterText1.toLowerCase())||(myarr[myarr.length-1].toUpperCase()==filterText1.toUpperCase())
        ;
      })
      console.log(filter);
       setFilteredData1(filter);
       if(filter.length==0){
        alert('Not available')
       }
       console.log(`ssdbkjbcdsb ${filteredData1.length}`);
      
       data=data1;

      
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
          onChange={(e) => setFilterText(e.target.value)}/>
      <button type="submit" style={{ marginRight: "200px"}}className="signin1" onClick={handleFilterSubmit}>Search </button>
     
      <input type="text" placeholder='Search By Name' className="centered-placeholder" value={filterText1} onChange={(e) => setFilterTexts(e.target.value)}/>
      <button type="submit" style={{ marginRight: "200px" }} className="signin1" onClick={handleFilterSubmit2} >Search</button>
     
      {/* <input type="text" placeholder='Search By Skill' className="centered-placeholder" value={filterText2} onChange={(e) => setFilterTextss(e.target.value)} />
      <button type="submit" className="signin1" style={{ marginRight: "50px" }} onClick={handleFilterSubmit3}>Search</button>
       */}
     
    </div>
    <div> <button type="button" onClick={handleFilterReset} className="signin2">
          Reset
        </button></div>
      
           <div style={{width:"100%"}}>
             <table class="table" style={{width:"100%",border:"solid black 1px"}}>
              <thead>
                <tr style={{backgroundColor:"rgb(132, 8, 25)",color:'white'}}>
                  <th className="centered-text">ID</th>
                  <th className="centered-text">Name</th>
                  {/* <th className="centered-text">Skill</th> */}
                </tr>
              </thead>
               <tbody>
          
               {
               filteredData.length>0? filteredData.map((row) => (
                <tr key={row._id}  onClick={() =>handleClick()}>
                  <td>{row.collegeId}</td>
                  <td>{row.name}</td>
                  {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}

                </tr>
              )):filteredData1.length>0?filteredData1.map((row)=>(
                <tr key={row._id}>
                  <td>{row.collegeId}</td>
                  <td>{row.name}</td>
                  {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}

                </tr>
              )):
                filteredData2.length>0?filteredData2.map((row)=>(
                   <tr key={row._id}>
                  <td>{row.collegeId}</td>
                  <td>{row.name}</td>
                 
                  {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}
                </tr> 
                ))
              :""
            }
               </tbody>
             </table>
            
             {showDetails && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span className="modal-close" onClick={handleClose}>
              &times;
            </span>
            <div className='modal-title'>
            Student Details
              </div>
              <div className='modal-content'>
              <p>Name:  {filteredData[0].name}</p>
           <p>Email:  {filteredData[0].email}</p>
            <p>College ID: {filteredData[0].collegeId}</p>
            <p>Skill: {filteredData[0].skill}</p>
            <p>projects: {filteredData[0].projects}</p>
                </div>
          
          </div>
        </div>
      )} 
           </div>
          
    </Base>
    
  )
}

export default Student