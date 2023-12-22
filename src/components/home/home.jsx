import AboutCard from "../about/aboutCard"
import HAbout from "./hAbout"
import HBlog from "./hBlog"
import HPrice from "./hPrice"
import Hero from "./hero/hero"
import "./hero/hero.css"
import Test from "./testimonial/test"
function Home(){
    return(
        <div>
            <Hero />
            <AboutCard />
            <HAbout />
            <Test />
            <HBlog />
            <HPrice />
        </div>
    )

}
export default Home