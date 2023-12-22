import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci"
function Head(){
    return(
        <div>
            <section className="head">
                <div className="container flexSB">
                    <div className="logo">
                        <h1>ACADEMIA</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>

                    </div>
                    <div className="social">
                            <i className="ico"> <CiFacebook size={35} /> </i>
                            <i className="ico"> <CiInstagram size={35} /> </i>
                            <i className="ico"> <CiTwitter size={35} /> </i>
                            <i className="ico"> <CiYoutube size={35} /> </i>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Head
