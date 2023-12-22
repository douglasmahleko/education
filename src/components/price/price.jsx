import Back from '../common/back/back'
import Faq from './faq'
import './price.css'
import PriceCard from './priceCard'

function Price(){
    return(
        <div>
            <Back title="Choose The Right Plan" />
            <PriceCard />
            <Faq />
        </div>
    )
}export default Price 