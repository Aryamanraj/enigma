import React from 'react'
import SvgGrid from './svgGrid'
import Nav from './Nav.js'
import SvgSphere from './svgSphere'
import SvgStar from './svgStar'
import SvgTriangle from './SvgTriangle'
import SvgSlingy from './svgSlingy'
import Footer from './Footer'
import { useNavigate} from 'react-router-dom'

export default function HomePage(){
    let navigate = useNavigate();
    return (
        <section className="Home">
            <div className='home-div'>
        <SvgGrid />
        <SvgStar />
        <SvgTriangle />
        <SvgSlingy />
        <SvgSphere />
        <Nav />
        <div className='home-txt'>
                <h1>The easiest way to store data on the decentralised web.</h1>
                <p>Store your data using our simple API. It’s fast, open, and it’s free.</p>
            <button onClick={()=> (navigate("/login"))} className='demo-btn'><span>START STORING</span></button>
        </div>    
        </div>
        <Footer />
        </section>
    )
} 