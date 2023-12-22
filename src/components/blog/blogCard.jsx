import './blog.css'
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaCommentDots } from "react-icons/fa";
import { BlogData } from './blogData';
function BlogCard(){
    return(
        <div>
            <section className="blog padding">
                <section className="container grid2">
                    {
                        BlogData.map((vale) => (
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
                </section>
            </section>
        </div>
    )
}export default BlogCard