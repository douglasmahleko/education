import { Link } from "react-router-dom"
import Head from "./heading/head"
import  "./heading/header.css"
import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa";
function Header(){
    
    return(
        <div>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className="flexSB">
                        <li><Link to="/"> Home</Link></li>
                        <li><Link to="/courses"> Courses</Link></li>
                        <li><Link to="/about"> About</Link></li>
                        <li><Link to="/team"> Team</Link></li>
                        <li><Link to="/pricing"> Pricing</Link></li>
                        <li><Link to="/journal"> Journal</Link></li>
                        <li><Link to="/contact"> Contact</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">
                            GET CERTIFICATE
                        </div>
                    </div>

                </nav>
            </header>
        </div>
    )
}export default Header
