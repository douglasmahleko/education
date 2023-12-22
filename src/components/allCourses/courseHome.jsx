import Back from "../common/back/back"
import CourseCard from "./courseCard"
import OnlineCourses from "./onlineCourses"

function CourseHome(){
    return (
        <div>
            <Back title="Explore Course" />
            <CourseCard />
            <OnlineCourses />
        </div>
    )
}export default CourseHome