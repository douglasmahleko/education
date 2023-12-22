import { FaLongArrowAltRight } from "react-icons/fa";
import Title from "../../common/title/title";

function Hero(){
    return(
        <div>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Title subtitle="WELCOME TO ACADEMIA" title="Best Online Education" />
                        <p>
                        In the last 5 years, the demand for ZW Inc.’s technology has been on a steady decline. 
                        The revenue has been declining steadily declining, number of hardware devices rented and bought 
                        has been on a decline and software developed has declined. The competition has increased with 
                        emergence of Flintstones technology, who also provide barcode and QR code technology. A quarter 
                        of their regular clients have left us for Flintstones technologies. ZW Inc. has also failed to 
                        secure investors through financial markets, to fund their growth strategies. 
                        </p>
                        <div className="button">
                            <button className="primary-btn">
                                GET STARTED NOW <i className="arr"> <FaLongArrowAltRight /></i>
                            </button>
                            <button className="primary-btn">
                                VIEW COURSE <i className="arr"> <FaLongArrowAltRight /></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin">

            </div>
        </div>
    )

}
export default Hero