import React from "react";
import Footer from "./Footer";
import topCube from '../assets/top-cube.png'
import bottomCube from '../assets/bottom-cube.png'
import Aryaman from '../assets/aryaman.jpeg'
import Anmol from '../assets/Anmol.jpeg'
import Astitwa from '../assets/astitwa.jpeg'
import Ishika from '../assets/ishika.jpeg'
import Sarthak from '../assets/sarthak.jpeg'
import Ashwinee from '../assets/ashwinee.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Team(){
    return(
        <div className="about-container">
            <img src={topCube} className='topCube' alt='cube object' />
            <h1>T<span className="lightAboutTxt">eam</span></h1>
            <div className="team-grid">
                <div>
                <img className="team-img" src={Aryaman} alt="aryaman" />
                <h1 className="team-name">Aryaman Raj</h1>
                </div>
                <div>
                <img className="team-img" src={Anmol} alt="Anmol Bansal" />
                <h1 className="team-name">Anmol Bansal</h1>
                </div>
                <div>
                <img className="team-img" src={Ashwinee} alt="ashwinee" />
                <h1 className="team-name">Ashwinee Kumar<br />Samdarshi</h1>
                </div>
                <div>
                <img className="team-img" src={Ishika} alt="ishika" />
                <h1 className="team-name">Ishita Srivastava</h1>
                </div>
                <div>
                <img className="team-img" src={Astitwa} alt="astitwa" />
                <h1 className="team-name">Astitwa Dwivedi</h1>
                </div>
                <div>
                <img className="team-img" src={Sarthak} alt="sarthak" />
                <h1 className="team-name">Sarthak Saxena</h1>
                </div>
            </div>
<img src={bottomCube} className='bottomCube' alt='bottom cube' />
                <Footer />
        </div>    
)
}