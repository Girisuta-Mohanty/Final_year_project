import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
// import "./FileList.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Base from "./Base";
import axios from "axios";
import UploadFile from "./Upload";
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
   
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    const [filterText, setFilterText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
      //name
    const [filterText1, setFilterTexts] = useState('');
    const [filteredData1, setFilteredDataa] = useState([]);
    //skill
    const [filterText2, setFilterTextss] = useState('');
    const [filteredData2, setFilteredDataaa] = useState([]);
    const file = [
        { name: "Folder1", type: "folder", date: "10/01/2023" },
        { name: "File1.docx", type: "docx", size: "1.2 MB", date: "02/22/2023" },
        { name: "File2.pdf", type: "pdf", size: "0.5 MB", date: "02/20/2023" },
        { name: "File3.png", type: "png", size: "0.1 MB", date: "02/18/2023" },
        { name: "Folder2", type: "folder", date: "02/10/2023" }];



        const handleFilterSubmit = (event) => {
            event.preventDefault();
            console.log(filterText);
            const filter=file.filter((row)=>{
              return row.collegeId==filterText;
            })
            console.log(filter);
             setFilteredData(filter);
             if(filter.length==0){
              alert('No student exists');
             }
             console.log(filteredData.length);
            
          };
          const handleFilterSubmit2 = (event) => {
            event.preventDefault();
            console.log(filterText1);
            // const myarr=filterText1.split(" ");
            // let word=myarr[0];
            // let word1=myarr[myarr.length-1];
            const filter=file.filter((row)=>{
              const myarr=row.name.split(".");
             // console.log(myarr);
              return row.name.toLowerCase()==filterText1 || (row.name==filterText1)||(row.name.toUpperCase()==filterText1)||
              (myarr[0].toLowerCase()==filterText1.toLowerCase())||(myarr[myarr.length-1].toUpperCase()==filterText1.toUpperCase())
              ;
            })
            console.log(filter);
             setFilteredDataa(filter);
             if(filter.length==0){
              alert('Not available')
             }
             console.log(filteredData1.length);
            
          };
          const handleFilterSubmit3 = (event) => {
            event.preventDefault();
            console.log(filterText2);
            const filter=file.filter((row)=>{
              const myarr=row.skill.split(" ");
              console.log(myarr);
              return row.skill.toLowerCase()==filterText2 || (row.skill==filterText2)||(row.skill.toUpperCase()==filterText2)
              ||(myarr[0].toLowerCase()==filterText2.toLowerCase())||(myarr[myarr.length-1].toUpperCase()==filterText2.toUpperCase());
            })
            console.log(filter);
             setFilteredDataaa(filter);
             if(filter.length==0){
              alert('Not available')
             }
             console.log(filteredData2.length);
            
          };
          const handleFilterReset = () => {
            setFilterText('');
            setFilteredData([]);
      
            setFilterTexts('');
            setFilteredDataa([]);
      
            setFilterTextss('');
            setFilteredDataaa([]);
          };  
          const openFile = (url) => {
            window.open(url, "_blank");
          };

  return (
    <Base>
    
    <div style={{width:"100vw"}}>
       <UploadFile xState2={{x,setX}} />
    {/* <div >
   
    <input type="text" placeholder='Notes' className="centered-placeholder" value={filterText}
          onChange={(e) => setFilterText(e.target.value)}/>
      <button type="submit" style={{ marginRight: "200px"}}className="signin1" onClick={handleFilterSubmit}>Search </button>
     
      <input type="text" placeholder='Question Paper' className="centered-placeholder" value={filterText1}onChange={(e) => setFilterTexts(e.target.value)}/>
      <button type="submit" style={{ marginRight: "200px" }} className="signin1" onClick={handleFilterSubmit2} >Search</button>
     
      <input type="text" placeholder='Assignments' className="centered-placeholder" value={filterText2} onChange={(e) => setFilterTextss(e.target.value)} />
      <button type="submit" className="signin1" style={{ marginRight: "50px" }} onClick={handleFilterSubmit3}>Search</button>
      
      <button type="button" onClick={handleFilterReset} className="signin2">
          Reset
        </button>
    </div> */}
      
    <div className="file-list-container">
        {
               
      (data.map((file, index) => (
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
      )))
              }
    </div>
    </div>
    </Base>
    
  );
}
export default Files