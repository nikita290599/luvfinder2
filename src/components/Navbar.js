import currency from "../currency.json"
import Timer from "./Timer"
import "../css/Navbar.css"


const Navbar = (props) => {
    function displayCurrencies() {
        return currency.results.map((item, index) => {
            return (

                <div key={index} className="dropdown-item" onClick={() => { props.setCurrency(item.abbr); props.setIndex(index) }} >{item.abbr}</div>

            )
        })
    }

    return (
       
        <nav id="navTop" className="container-fluid row mt-4">
            <div className="col-lg-6 col-md-6 col-xs-12 br">
                <div className='w-50 brand-nav brand' style={{ paddingLeft: "1vw" }}>LUVFINDER</div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
                <ul className=" navbar-nav d-flex align-items-center justify-content-end flex-row n" >

                    <div className="dropdown ">
                        <button className="btn btn-light dropdown-toggle btn-coin" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {currency.results[props.index].abbr}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {displayCurrencies()}
                        </div>


                    </div>

                        <li className="nav-item mr-0 " >

                            <a className='btn  tw' href="https://twitter.com/LuvInuCoin">CONNECT <i class="fab fa-telegram-plane" ></i></a>
                        </li>
                        <li className="nav-item mr-4 ">
                            <Timer />
                        </li>
               

                </ul>
            </div>
        </nav>

    );
}

export default Navbar;