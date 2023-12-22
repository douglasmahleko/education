import {AWrapperData} from './awrapperdata'

function AWrapper(){
    return(
        <div>
            <section className="awrapper">
                <div className="container grid">
                    {
                        AWrapperData.map((val) => (
                            <div className="box flex">
                                <div className="img">
                                    <i>{val.cover}</i>
                                </div>
                                <div className="text">
                                    <h1> {val.data} </h1>
                                    <h1> {val.title} </h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}
export default AWrapper