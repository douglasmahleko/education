import { HomeAbout } from "./homeAbout"
import Title from "../common/title/title"
import AWrapper from "./aWrapper"
 import './about.css'

function AboutCard(){
    return(
        <div>
            <section className="aboutHome">
                <div className="container flexSB">
                    <div className="left row">
                        {/* <img src={require("./about.webp")} alt="" /> */}
                        <div className="img" />
                    </div>
                    <div className="right row">
                        <Title subtitle="LEARN ANYTHING" title="Benefits of Online Learning Expertise" />
                        <div className="items"> {HomeAbout.map((val) => (
                            <div className="item flexSB">
                                <div className="img">
                                    {val.cover}
                                </div>
                                <div className="text">
                                    <h2> {val.title} </h2>
                                    <h1> {val.desc} </h1>
                                </div>
                            </div>
                        ))} </div>
                    </div>
                </div>
            </section>
            <AWrapper />
        </div>
    )
}
export default AboutCard