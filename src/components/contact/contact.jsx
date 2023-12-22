import Back from "../common/back/back";
import './contact.css'

function Contact(){
    return(
        <div>
            <Back title="Contact Us" />
            <section className="contact padding">
                <div className="container shadow flexSB">
                    <div className="left row">

                    </div>
                    <div className="right row">
                        <h1>Contac Us</h1>
                        <p>In the last 5 years, the demand for ZW Inc.’s</p>
                        <div className="items grid2">
                            <div className="box">
                                <h4>ADDRESS: </h4>
                                <p>16464 Glen Norah Harare Zimbabwe</p>
                            </div>
                            <div className="box">
                                <h4>EMAIL: </h4>
                                <p>infor@gmail.com</p>
                            </div>
                            <div className="box">
                                <h4>PHONE: </h4>
                                <p>+12 345 6789</p>
                            </div>
                        </div>
                        <form action="">
                            <div className="flexSB">
                                <input type="name" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <input type="email" placeholder="Subject" />
                            <textarea name="" id="" cols="30" rows="10"> Create a message here</textarea>
                            <button className="primary-btn">SEND MESSAGE</button>
                        </form>
                        <h3>Follow Us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact