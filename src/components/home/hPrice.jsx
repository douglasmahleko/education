import Title from "../common/title/title"
import PriceCard from "../price/priceCard"

function HPrice(){
    return(
        <div>
            <section className="hprice padding">
                <Title subtitle="our pricing" title="pricing and packages" />
                <div className="price container grid">
                    <PriceCard />
                </div>
            </section>
        </div>
    )
}
export default HPrice