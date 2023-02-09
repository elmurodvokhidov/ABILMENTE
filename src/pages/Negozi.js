import { HeaderCard } from "../layouts/Layouts";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export function Negozi() {
    return (
        <>
            <div className="negozi">

                {/* SECTION 1 */}
                <HeaderCard title={"Negozi"} about={"Scopri tutti i negozi dei Mondi di Abilmente"} />

                {/* SECTION 2 */}
                <div className="negoziSection2">
                    <div className="hs1_top scc_top">
                        <h1>Trova i negozi vicino a te</h1>
                    </div>

                    <div className="nS2_bottom">
                        <div className="nS2b_header">
                            <div className="searchSCH">
                                <input type="text" name="#" id="searchSCH" placeholder="Inserisci una città, un indirizzo, un CAP" />
                                <label htmlFor="searchSCH"><span><BsSearch /></span></label>
                            </div>
                        </div>

                        <div className="nS2b_footer">
                            <div className="nS2bf_wrapper">

                                <div className="locatedIconParentOne">

                                    {/* 11111111111111111111111111111 */}
                                    <div className="locationIcon lI1">
                                        <img src="./img/Pin-negozio.png" alt="Pin-negozio.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2222222222222222222222222222 */}
                                    <div className="locationIcon lI2">
                                        <img src="./img/Pin-negozio-premium.png" alt="Pin-negozio-premium.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 333333333333333333333333333333 */}
                                    <div className="locationIcon lI3">
                                        <img src="./img/Pin-negozio.png" alt="Pin-negozio.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="locatedIconParentTwo sameHover">

                                    {/* 444444444444444444444444444444 */}
                                    <div className="locationIcon">
                                        <img src="./img/Pin-negozio-premium.png" alt="Pin-negozio.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 5555555555555555555555555555 */}
                                    <div className="locationIcon lI5">
                                        <img src="./img/Pin-negozio.png" alt="Pin-negozio-premium.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 666666666666666666666666666 */}
                                    <div className="locationIcon lI6">
                                        <img src="./img/Pin-negozio-premium.png" alt="Pin-negozio-premium.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="locatedIconParentThree sameHover">

                                    {/* 777777777777777777777777777 */}
                                    <div className="locationIcon lI7">
                                        <img src="./img/Pin-negozio.png" alt="Pin-negozio.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 8888888888888888888888888888 */}
                                    <div className="locationIcon lI8">
                                        <img src="./img/Pin-negozio.png" alt="Pin-negozio.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 9999999999999999999999999999 */}
                                    <div className="locationIcon lI9">
                                        <img src="./img/Pin-negozio.png" alt="Pin-negozio.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 1010101010101010101010101010 */}
                                    <div className="locationIcon lI10">
                                        <img src="./img/Pin-negozio.png" alt="Pin-negozio.png" />
                                        <div className="lIH">
                                            <div className="lIH_top">
                                                <h4>Cucito & Filato</h4>
                                            </div>

                                            <div className="lIH_bottom">
                                                <h3>Nome del negozio</h3>
                                                <p>Viale Ceccarini 18 - 47838 Riccione, Rimini (IT) Tel: 054 13094</p>
                                                <span>sitoweb.com</span>
                                            </div>

                                            <div className="lIH_footer">
                                                <button className="hs1b_btn">Indicazioni</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nS2_footer">
                        <div className="hs1_top scc_top">
                            <h1>Aree</h1>
                            <p>Scopri tutti i negozi</p>
                        </div>

                        <div className="nS2f_bottom">

                            {/* CArd 1111111111111111111111111 */}
                            <div className="nS2fb_card">
                                <div className="nS2fbc_top">
                                    <h4>Nome del negozio</h4>
                                    <p>Breve descrizione dello shop: lorem ipsum...</p>
                                    <span><NavLink to="/">sitoweb.com</NavLink></span>
                                </div>

                                <div className="nS2fbc_bottom">
                                    <p><NavLink to="/">Cucito & Filato, Decorazioni</NavLink></p>
                                </div>
                            </div>

                            {/* CArd 2222222222222222222222222 */}
                            <div className="nS2fb_card">
                                <div className="nS2fbc_top">
                                    <h4>Nome del negozio</h4>
                                    <p>Breve descrizione dello shop: lorem ipsum...</p>
                                    <span><NavLink to="/">sitoweb.com</NavLink></span>
                                </div>

                                <div className="nS2fbc_bottom">
                                    <p><NavLink to="/">Cucito & Filato, Decorazioni</NavLink></p>
                                </div>
                            </div>

                            {/* CArd 3333333333333333333333333 */}
                            <div className="nS2fb_card">
                                <div className="nS2fbc_top">
                                    <h4>Nome del negozio</h4>
                                    <p>Breve descrizione dello shop: lorem ipsum...</p>
                                    <span><NavLink to="/">sitoweb.com</NavLink></span>
                                </div>

                                <div className="nS2fbc_bottom">
                                    <p><NavLink to="/">Cucito & Filato, Decorazioni</NavLink></p>
                                </div>
                            </div>

                            {/* CArd 44444444444444444444444444 */}
                            <div className="nS2fb_card">
                                <div className="nS2fbc_top">
                                    <h4>Nome del negozio</h4>
                                    <p>Breve descrizione dello shop: lorem ipsum...</p>
                                    <span><NavLink to="/">sitoweb.com</NavLink></span>
                                </div>

                                <div className="nS2fbc_bottom">
                                    <p><NavLink to="/">Cucito & Filato, Decorazioni</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div className="negoziSection3">
                    <div className="nS3_content">
                        <div className="nS3c_left">
                            <h1>Inserisci il tuo negozio online nella piattaforma!</h1>
                            <h3>Novità di fiera in anteprima, creative da seguire.</h3>
                        </div>
                        <div className="nS3c_right">
                            <button className="hs1b_btn">Compila il form</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}