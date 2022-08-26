import React from "react";
import data from '../final.json'
import { useNavigate } from "react-router-dom";

export default function Dashboard(){

    const navigate = useNavigate();
    // console.log(data.Avengers);
    let r = data.Avengers;
    let entries = ()=>{
       return( r.map((entry)=>{
            console.log(entry[0])
            
            return(
                <div className="dash-data-container">
                 <h1>Avengers</h1>
                 <div className="dash-data">
                     {/* <div className="dash-data-entry">{entry[1].slice(8,index)}</div> */}
                     <div className="dash-data-entry"><a href={entry[1]}>{entry[1]}</a></div>
                     <div className="dash-data-entry flag">{entry[0]}</div>
                 </div>
             </div>
            )
        }))
        
    }
    function run(){
        
    }
    return(
        <div className="dashboard">
            <h1 className="dash-ac">Account</h1>
            <div className="dash-username">
                <h1>Admin</h1>
            </div>
            <div className="dash-upload">
                <h1>Upload more files</h1>
                <button onClick= {()=>navigate('/upload')} className="dash-upload-btn">Upload</button>
                <button onClick= {run} className="dash-upload-btn">Run System</button>
            </div>
            {entries()}
        </div>
    )
}