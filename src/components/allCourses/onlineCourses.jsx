import Title from "../common/title/title"
import { Online } from "./online"
import './course.css'
function OnlineCourses(){
    return(
        <div>
            <section className="online">
                <div className="container">
                    <Title subtitle="COURSES" title="Browse Our Online Courses" />
                    <div className="content grid3">
                        {
                            Online.map((val) => (
                                <div className="box">
                                    <div className="img">
                                        <i>{val.cover}</i>
                                        {/* <img src="" alt="" className="show" /> */}
                                    </div>
                                    <h1> {val.courseName} </h1>
                                    <span> {val.course} </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default OnlineCourses