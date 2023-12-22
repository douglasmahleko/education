import { useState } from "react"
import Title from "../common/title/title"
import { FaqData } from "./faqData"
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
function Faq(){
    const [click,  setClick] =useState(false)
    const toggle = (index) => {
        if (click === index){
            return setClick(null)
        }
        setClick(index)
    }
    return(
        <div>
            <Title subtitle="faqs" title="Frequently asked questions" />
            <section className="faq">
                <div className="container">
                    {
                        FaqData.map((val, index) => (
                            <div className="box">
                                <button className="accordion" onClick={() => toggle(index)} key={index}>
                                    <h2> {val.title} </h2>
                                    <span> {click===index ? <FaChevronDown size={25}/> : <FaChevronRight size={25}/>} </span>
                                </button>
                                {click ===index ? (
                                    <div className="text">
                                    <p> {val.desc} </p>
                                </div>
                                ) : (
                                    null
                                )}
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}export default Faq