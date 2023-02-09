import { NavLink } from "react-router-dom";
import { FormTem } from "./layouts/Layouts";

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer_content">
                    <div className="footer_top">
                        <div className="ft_header">
                            <div className="footer_logo">
                                <NavLink to="/"><img src="./img/abilmente-magazine 1.png" alt="abilmente-magazine 1.png" /></NavLink>
                            </div>
                            <ul>
                                <li>
                                    <NavLink to="/"><img src="./img/Vector6.png" alt="Vector6.png" /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><img src="./img/Vector5.png" alt="Vector5.png" /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><img src="./img/Vector4.png" alt="Vector4.png" /></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"><img src="./img/Vector3.png" alt="Vector3.png" /></NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="ft_main">
                            <div className="ftm_card">
                                <h2>Magazine</h2>
                                <NavLink to=""><h3>News</h3></NavLink>
                                <NavLink to=""><h3>Tutorial</h3></NavLink>
                                <NavLink to=""><h3>Blogger</h3></NavLink>
                            </div>
                            <div className="ftm_card">
                                <h2>Mondi</h2>
                                <NavLink to=""><h3>Cucito & Filato </h3></NavLink>
                                <NavLink to=""><h3>Carta Scrap & Colore</h3></NavLink>
                                <NavLink to=""><h3>Decorazione</h3></NavLink>
                                <NavLink to=""><h3>Bijoux & Accessori</h3></NavLink>
                                <NavLink to=""><h3>Ricamo & Tradizione</h3></NavLink>
                            </div>
                            <div className="ftm_card">
                                <h2>Corsi</h2>
                                <NavLink to=""><h3>Corsi nella tua città</h3></NavLink>
                            </div>
                            <div className="ftm_card">
                                <h2>Fiera</h2>
                                <NavLink to=""><h3>Vicenza </h3></NavLink>
                                <NavLink to=""><h3>Roma</h3></NavLink>
                                <NavLink to=""><h3>Milano</h3></NavLink>
                                <NavLink to=""><h3>Visita in sicurezza</h3></NavLink>
                            </div>
                            <div className="ftm_card">
                                <h2>Utili</h2>
                                <NavLink to=""><h3>Newsletter</h3></NavLink>
                                <NavLink to=""><h3>Privacy policy</h3></NavLink>
                                <NavLink to=""><h3>Cookies policy</h3></NavLink>
                                <NavLink to=""><h3>Terms and conditions</h3></NavLink>
                                <NavLink to=""><h3>Area Download</h3></NavLink>
                            </div>
                            <div className="ftm_card">
                                <h2>Negozi</h2>
                                <NavLink to=""><h3>Negozi nella tua città</h3></NavLink>
                                <NavLink to=""><h3>Negozi online</h3></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="fb_content">
                            <div className="hs5m_left fbc_card1">
                                <h1>La nostra scintillante Newsletter!</h1>
                                <h2>Novità di fiera in anteprima, creative da seguire, tutorial freschissimi, promozioni e codici sconto per le tue spese folli online. Wonder Woman sarà fiera di te!</h2>
                            </div>
                            <div className="hs6mr_top fbc_card2"><FormTem /></div>
                            <div className="hs6mr_bottom fbc_card3">
                                <p>Letta l'informativa comunicatami, dichiaro la seguente volontà circa il trattamento dati per autonome finalità di marketing diretto da parte di terzi partner di IEG (finalità 4 dell'informativa)</p>
                                <div className="radioSelect">
                                    <div className="firstDo">
                                        <label className="customRadio">
                                            <input type="radio" name="acconsento" id="acconsento" />
                                            <span className="checkMark"></span>
                                        </label>
                                        <label className="labelND" htmlFor="acconsento">Acconsento</label>
                                    </div>

                                    <div className="firstDo secondDo">
                                        <label className="customRadio">
                                            <input type="radio" name="acconsento" id="nonAcconsento" />
                                            <span className="checkMark"></span>
                                        </label>
                                        <label className="labelND" htmlFor="nonAcconsento">Non Acconsento</label>
                                    </div>
                                </div>
                                <button className="hs6mrbBtn">Iscriviti</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerND">
                <div className="fND_top">
                    <div className="fNDt_left">
                        <p>Organizzato da:</p>
                        <figure><img src="./img/image 2.png" alt="image2.png" /></figure>
                    </div>
                    <div className="fNDt_right">
                        <figure><img src="./img/image 6.png" alt="image6.png" /></figure>
                        <figure><img src="./img/image 4.png" alt="image4.png" /></figure>
                        <figure><img src="./img/image 5.png" alt="image5.png" /></figure>
                    </div>
                </div>
            </div>
            <div className="fND_bottom">
                <p>© ITALIAN EXHIBITION GROUP SpA© All rights reserved - Via Emilia 155, 47921 Rimini - CF/PI 00139440408 - Registro Imprese: Rimini P.I e n. Reg. Imprese 00139440408 - Capitale Sociale € 52.214.897 i.v.</p>
            </div>
        </>
    )
};