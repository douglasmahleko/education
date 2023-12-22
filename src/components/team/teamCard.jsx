import { TeamData } from "./teamData"
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci"
import './team.css'
function TeamCard(){
    return (
        <div>
            <section className="team padding">
                <div className="container grid">
                    {
                    TeamData.map((val) => (
                        <div className="items shadow">
                            <div className="img">
                                {/* <img src={require()} alt="" /> */}
                                {val.cover}
                                <div className="overlay">
                                    <i className="ico"> <CiFacebook size={35} /> </i>
                                    <i className="ico"> <CiInstagram size={35} /> </i>
                                    <i className="ico"> <CiTwitter size={35} /> </i>
                                    <i className="ico"> <CiYoutube size={35} /> </i>
                                </div>
                            </div>
                            <div className="details">
                                <h2> {val.name} </h2>
                                <p> {val.work} </p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
        </div>
    )
}
export default TeamCard