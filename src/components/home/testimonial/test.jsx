import Title from "../../common/title/title"
import { FaQuoteLeft } from "react-icons/fa6";
import {TestimonalData} from './testimonalData'
import './testimonal.css'

function Test(){
    return(
        <div>
            <section className="padding testimonial">
                <div className="container">
                    <Title subtitle="testimonal" title="our successfull students" />
                    <div className="grid2 content">
                        {
                            TestimonalData.map((val) => (
                                <div className="items shadows">
                                    <div className="box flex">
                                        <div className="img">
                                            <image>{val.cover}</image>
                                            <i><FaQuoteLeft size={25}/></i>
                                        </div>
                                        <div className="name">
                                            <h2> {val.name} </h2>
                                            <span> {val.post} </span>
                                        </div>
                                    </div>
                                    <p> {val.desc} </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Test