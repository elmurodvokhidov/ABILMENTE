import { NavLink } from "react-router-dom";
import { AutoPlay, HomeHeaderCard, HomeSection5, Hs1bContent, Hs2mwb, Hs3mb } from "../layouts/Layouts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    return (
        <>
            <div className="home">
                <div className="homeHeader">
                    <div className="bgMode"></div>
                    <div className="hh_content">
                        <div className="hh_left">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod </p>
                        </div>
                        <div className="hh_right"><HomeHeaderCard /></div>
                    </div>
                </div>

                {/* SECTION 1 */}
                <div className="homeSection1">
                    <div className="hs1_content">
                        <div className="hs1_top">
                            <h1>News</h1>
                            <p><NavLink to="/news">Vedi tutte</NavLink></p>
                        </div>
                        <div className="hs1_bottom"><Hs1bContent /></div>
                    </div>
                </div>

                {/* SECTION 2 */}
                <div className="homeSection2">
                    <div className="hs2_main">
                        <div className="hs2m_wrapper">
                            <div className="hs2mw_top">
                                <h1>Mondi</h1>
                            </div>
                            <div className="hs2mw_bottom"><Hs2mwb /></div>
                        </div>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div className="homeSection3">
                    <div className="hs3_main">
                        <div className="hs1_top hs3m_top">
                            <h1>Tutorial</h1>
                            <p><NavLink to="/tutorial">Vedi tutte</NavLink></p>
                        </div>
                        <div className="hs3m_bottom"><Hs3mb /></div>
                    </div>
                </div>

                {/* SECTION 4 */}
                <div className="homeSection2 homeSection4">
                    <div className="hs2_main">
                        <div className="hs2m_wrapper">
                            <div className="hs1_top hs3m_top">
                                <h1>Sponsor</h1>
                                <p><NavLink to="/sponsor">Vedi tutte</NavLink></p>
                            </div>
                            <div className="hs2mw_bottom hs4m_bottom"><AutoPlay /></div>
                        </div>
                    </div>
                </div>

                {/* SECTION 5 */}
                <div className="homeSection5">
                    <div className="hs5_main">
                        <div className="hs5m_left">
                            <div className="hs5ml_content">
                                <h1>Vieni a trovarci in fiera!</h1>
                                <h2>Abilmente è la fiera che proprio non puoi perderti interamente dedicata alla manualità creativa!</h2>
                                <p>Che tu ci conosca già oppure no, qui abbiamo un bel po' di cose che potrebbero davvero mandarti fuori di testa</p>
                            </div>
                        </div>


                        <div className="hs5m_right">
                            <div className="hs5mr_top">
                                <div className="hs5mrt_cub"></div>
                                <div className="hs5mrt_content">
                                    <h2>Roma</h2>
                                    <h3>Dal 23 al 26 settembre 2021</h3>
                                    <button className="hs5mrtc_btn">Scopri di più</button>
                                </div>
                            </div>


                            <div className="hs5mr_top hs5mr_bottom">
                                <div className="hs5mrt_cub"></div>
                                <div className="hs5mrt_content">
                                    <h2>Vicenza</h2>
                                    <h3>Dal 14 al 17 ottobre 2021</h3>
                                    <button className="hs5mrtc_btn">Scopri di più</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 6 */}
                <HomeSection5 />
            </div>
        </>
    );
}

export default Home;
