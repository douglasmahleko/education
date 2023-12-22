import './price.css'
import {PriceData} from './priceData'

function PriceCard(){
    return(
        <div>
            <section className="price padding">
                <div className="container grid">
                    {
                        PriceData.map((val) => (
                            <div className="items shadow">
                                <h4> {val.name} </h4>
                                <h1>
                                    <span>$</span>
                                    {val.price}
                                </h1>
                                <p>{val.desc}</p>
                                <button className="outline-btn">GET STARTED</button>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}export default PriceCard 