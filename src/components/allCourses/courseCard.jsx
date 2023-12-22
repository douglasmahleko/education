import { FaRegStar } from "react-icons/fa";
import { CourseData } from "./courseData";
import { IoLogoReact } from "react-icons/io5";
import './course.css'
function CourseCard(){
    return (
        <div>
            <section className="courseCard">
                <div className="container grid2">
                {
                    CourseData.map((val) => (
                        <div className="items">
                            <div className="content flex">
                                <div className="left">
                                    <div className="img">
                                        {val.cover}
                                    </div>
                                </div>
                                <div className="text">
                                    <h1>{val.courseName}</h1>
                                    <div className="rate">
                                        <i><FaRegStar /></i>
                                        <i> <FaRegStar /></i>
                                        <i> <FaRegStar /></i>
                                        <i> <FaRegStar /></i>
                                        <i> <FaRegStar /></i>
                                        <label htmlFor=""> (5.0) </label>
                                    </div>
                                    <div className="details">
                                        {
                                            val.courseTeacher.map((dat) => (
                                                <div>
                                                    <div className="box">
                                                        <div className="dimg">
                                                            <i>{dat.dcover}</i>
                                                        </div>
                                                        <div className="para">
                                                            <h4> {dat.name} </h4>
                                                        </div>
                                                        <span> {dat.totalTime} </span>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="price">
                                <h3>
                                    {val.priceAll} / {val.pricePer}
                                </h3>
                            </div>
                            <button className="outline-btn">ENROLL NOW!</button>
                        </div>
                    ))
                }
                </div>
            </section>
        </div>
    )
}export default CourseCard