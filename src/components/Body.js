
import banner from '../images/banneriost.jpg';
import banner2 from "../images/cryptonews.png"
import "../css/body.css"
import NumberFormat from "react-number-format";

import curr from "../currency.json"
const Body = (props) => {


    const render = () => {
        if (props.response) {
            return (

                props.response.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <th scope="row">{index+1}</th>
                            <td><span><img src={item.image} alt={item.id} width="25vw" style={{ marginRight: "2vw" }}></img></span>{item.name}</td>
                            <td>{item.symbol}</td>
                            <td>{curr.results[props.index].symbol} {item.current_price}</td>
                            <td className={item.price_change_percentage_1h_in_currency < 0 ? "text-danger" : "text-info"}>{Math.round(item.price_change_percentage_1h_in_currency * 100) / 100}%</td>
                            <td className={item.price_change_percentage_24h_in_currency < 0 ? "text-danger" : "text-info"}>{Math.round(item.price_change_percentage_24h_in_currency * 100) / 100}%</td>
                            <td className={item.price_change_percentage_7d_in_currency < 0 ? "text-danger" : "text-info"}>{Math.round(item.price_change_percentage_7d_in_currency * 100) / 100}%</td>

                            <td>{curr.results[props.index].symbol} <NumberFormat
                                value={item.total_volume}
                                displayType={"text"}
                                thousandSeparator={true}
                            />
                            </td>
                            <td>{curr.results[props.index].symbol} <NumberFormat
                                value={item.market_cap}
                                displayType={"text"}
                                thousandSeparator={true}
                            /></td>
                        </tr>

                    )
                })
            );
        }
        else {
            return(<div className='spinner'><div className="loader"></div></div>)
        }

    }

    return (
        <div className="container-fluid cont-sm " style={{ marginTop: "1vw" }}>
            <div className="row">
                <div className='col-lg-12'>
                    {/* <h1 className='heading-main'>Top Memes Tokens by Market Capitalization</h1>
                    <div className='heading-small'>
                        This page lists the top meme coins and tokens.
                        These projects are listed by market capitalization with the largest first and then descending in order.
                    </div> */}

                </div>

                <div className="banner mt-5"><img src={banner} alt="banner" width="98%"></img></div>
            </div>


            <div id="data" class="table-responsive py-5  " style={{ marginTop: "4vw", justifyContent: "center" }}>
                <table class="table table-bordered table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Coin</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Price</th>
                            <th scope="col">1h</th>
                            <th scope="col">24h</th>
                            <th scope="col">7d</th>
                            <th scope="col">Total Volume</th>
                            <th scope="col">MKT cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {render()}


                    </tbody>
                </table>
            </div>

            <div className="banner mt-1"><img src={banner2} alt="banner2" width="99%"></img></div>




        </div>
    );
}

export default Body;