import React,{useState} from "react";
import uploadImg from '../assets/upload-img.png'
import { useNavigate } from "react-router-dom";

export default function Upload(){
    let navigate = useNavigate();
    const [uploadData, setUploadData] = useState({MName:"",type:"", language:"",duration:"",distributors:"", region:"",uniqueId:""});
    const [file, setFile] = useState(null);
    function handleClick(){
        setFile(file);
    }
    function handleChange(e){
        setUploadData((prevData)=>({...prevData, [e.target.name]: e.target.value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        
        console.log(uploadData);
    }
    return(
        <div className="upload-page">
            <div className="upload-file column">
                <h1>Upload Files</h1>
                <div className="file-uploader">
                    <img className='upload-img' src={uploadImg} alt="cloud illustration" />
                    <button  className="upload-btn">Browse</button>
                    <input name="file" className="input-upload" type='file' />
                </div>
            </div>
            <div className="upload-details column">
                <h1>Content</h1>
                <div className="upload-form">
                    <div className="span-col">
        <label className="upload-label" htmlFor="MName">Movie Name</label>
        
        <input type="text" id="MName" value={uploadData.MName} onChange={handleChange} name="MName" className="upload-box widen" />
        </div>
        <div >
        <label className="upload-label" htmlFor="type">Type</label>
        <select id="type" className="upload-box " name="type" value={uploadData.type} onChange={handleChange}>
                <option value="video">Videos</option>
                <option value="audio">Audios</option>
                <option value="image">Images</option>
            </select>
            </div>
        <div>
        <label className="upload-label"  htmlFor="language">Languages</label>
        <input type="text" id="language" value={uploadData.language} onChange={handleChange} name="language" className="upload-box" />
        </div>
        <div>
        <label className="upload-label" htmlFor="duration">Duration</label>
        <input type="text" id="duration" value={uploadData.duration} onChange={handleChange} name="duration" className="upload-box" />
        </div>
        <div>
        <label className="upload-label" htmlFor="distributors">Distributors</label>
        <input type="text" id="distributors" value={uploadData.distributors} onChange={handleChange} name="distributors" className="upload-box" />
        </div>
        <div>
        <label className="upload-label" htmlFor="region">Region of Release</label>
        <input type="text" id="region" value={uploadData.region} onChange={handleChange} name="region" className="upload-box" />
        </div>
        <div>
        <label className="upload-label" htmlFor="uniqueId">Unique ID</label>
        <input type="text" id="uniqueId" value={uploadData.uniqueId} onChange={handleChange} name="uniqueId" className="upload-box" />
        </div>
        
                </div>
                    <button onClick={()=> navigate('/dashboard')} onSubmit={handleSubmit} className="uploadPage-btn">Upload</button>
            </div>
        </div>
    )
}