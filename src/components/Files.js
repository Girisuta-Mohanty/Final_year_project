import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
// import "./FileList.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Base from "./Base";
import axios from "axios";
import UploadFile from "./Upload";
import { Select } from '@chakra-ui/react';
import { isAuthenticated } from "../auth/helper";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Files() {
    //id
    const { id } = useParams();
    const [data, setData] = useState([]);

    const [fileUrl, setFileUrl] = useState(null);
    const [x,setX]=useState(false);
    

    const handleDownload = async (filename) => {
      
      try {
        const response = await axios.get(`http://localhost:3001/classroom/${id}/files/${filename}`, { responseType: 'blob' });
        const file = new Blob([response.data], { type: response.headers['content-type'] });
        const fileUrl = URL.createObjectURL(file);
        setFileUrl(fileUrl);
        // console.log("abdfhksdkfdjlfhisdghki")
        openFile(fileUrl)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        fetchData();
      }, [x])
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/classroom/${id}/files`); // replace with your API endpoint
          setData(response.data);
   
          // console.log(dat);
        } catch (error) {
          console.log(error);
        }
      };
    //skill
    const [filterText2, setFilterTextss] = useState('');
    const [filteredData2, setFilteredDataaa] = useState([]);
          const handleFilterSubmit3 = (event) => {
            event.preventDefault();
            console.log(selectedValue+'------');
            const filter=data.filter((row)=>{
              // const myarr=row.skill.split(" ");
               console.log(data);
              return row.purpose==selectedValue;
            })
            console.log(filter);
             setFilteredDataaa(filter);
             if(filter.length==0){
              alert('Not available')
             }
             console.log('Hello'+ filteredData2);
            
          };
          const handleFilterReset = () => {
            setFilterTextss('');
            setFilteredDataaa([]);
          };  
          const openFile = (url) => {
            window.open(url, "_blank");
          };
          const [selectedValue, setSelectedValue] = useState('');

          const handleDropdownChange = (event) => {
            setSelectedValue(event.target.value);
          }

  return (
    <Base>
    
    <div style={{width:"100vw"}}>
       {isAuthenticated() && <UploadFile xState2={{x,setX}} /> }
    {/* <div >
   
    <input type="text" placeholder='Notes' className="centered-placeholder" value={filterText}
          onChange={(e) => setFilterText(e.target.value)}/>
      <button type="submit" style={{ marginRight: "200px"}}className="signin1" onClick={handleFilterSubmit}>Search </button>
     
      <input type="text" placeholder='Question Paper' className="centered-placeholder" value={filterText1}onChange={(e) => setFilterTexts(e.target.value)}/>
      <button type="submit" style={{ marginRight: "200px" }} className="signin1" onClick={handleFilterSubmit2} >Search</button>
     
      
    </div> */}
      <div>
        <label>Search</label>
      </div>
      <Select id="dropdown" style={{width:"500px"}} onChange={handleDropdownChange} value={selectedValue}>
                        <option value="notes">Notes</option>
                        <option value="qa">Question Paper</option>
                        <option value="assignment">assignment</option>
        </Select>
      <button type="submit" className="signin1" style={{ marginRight: "30px" }} onClick={handleFilterSubmit3}>Search</button>
      
      <button type="button" onClick={handleFilterReset} className="signin1">
          Reset
        </button>
      
    <div className="file-list-container">
        {
          filteredData2.length>0?
          filteredData2.map((file, index) => (
            <div className="file-item" onClick={() =>handleDownload(file.name)} key={index}>
              <div className="file-icon">{file.type == "folder" ? <i className="fas fa-folder"></i> :<i class="fa-solid fa-file-pdf" style={{color:"red"}}></i>}</div>
              <div className="file-details">
                <div className="file-name" >{file.name}</div>
                <div className="file-info">
                  {file.type !== "folder" && (
                    <React.Fragment>
                      <div className="file-size">{file.size}</div>
                      <div className="file-size">{file.uploadedBy}</div>
    
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          )):
          data.map((file, index) => (
            <div className="file-item" onClick={() =>handleDownload(file.name)} key={index}>
              <div className="file-icon">{file.type === "folder" ? <i className="fas fa-folder"></i> :<i class="fa-solid fa-file-pdf" style={{color:"red"}}></i>}</div>
              <div className="file-details">
                <div className="file-name" >{file.name}</div>
                <div className="file-info">
                  {file.type !== "folder" && (
                    <React.Fragment>
                      <div className="file-size">{file.size}</div>
                      <div className="file-size">{file.uploadedBy}</div>
    
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          ))


    
              }
    </div>
    </div>
    </Base>
    
  );
}
export default Files