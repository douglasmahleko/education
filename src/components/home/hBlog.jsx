import './../blog/blog.css'
import { BlogData } from "../blog/blogData"
import Title from "../common/title/title"
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaCommentDots } from "react-icons/fa";

function HBlog(){
    return(
        <div>
            <section className="blog">
                <div className="container">
                    <Title subtitle="our blog" title="recent from blog" />
                    <div className="grid2">
                    {
                            BlogData.slice(0,3).map((vale) => (
                                <div className="items shadow">
                                    <div className="img">
                                        <image>{vale.cover}</image>

                                    </div>
                                    <div className="text">
                                        <div className="admin flexSB">
                                            <span>
                                                <FaUser size={35}/>
                                                <label htmlFor=""> {vale.type} </label>
                                            </span>
                                            <span>
                                                <SlCalender size={35}/>
                                                <label htmlFor=""> {vale.date} </label>
                                            </span>
                                            <span>
                                                <FaCommentDots size={35}/>
                                                <label htmlFor=""> {vale.com} </label>
                                            </span>
                                        </div>
                                        <h1> {vale.title} </h1>
                                        <h3> {vale.desc} </h3>
                                    </div>
                                </div>
                                
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HBlog