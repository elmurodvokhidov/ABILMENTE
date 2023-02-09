import { HeaderCard } from "../layouts/Layouts";

export function Fiere() {
    return (
        <>
            <div className="fiere">
                {/* SECTION 1 */}
                <HeaderCard title="Inserisci il tuo negozio" about="Compila il form per entrare a far parte della piattaforma con il tuo negozio online!" />

                {/* SECTION 2 */}
                <div className="fiereSection2">
                    <div className="fS2_main">
                        <div className="hs1_top scc_top">
                            <h1>Contatti</h1>
                        </div>

                        <div className="fS2m_bottom">
                            <div className="fS2mb_left">
                                <div className="FormWind">
                                    <form action="#">
                                        <label htmlFor="name">Nome del negozio</label> <br />
                                        <input type="text" name="name" id="name" /> <br /> <br />

                                        <label htmlFor="email">E-mail</label> <br />
                                        <input type="email" name="email" id="email" /> <br /> <br />

                                        <label htmlFor="sito">Sito web</label> <br />
                                        <input type="text" name="sito" id="sito" />

                                    </form>
                                </div>

                                <div className="hs6mr_bottom">
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
                                </div>
                            </div>

                            <div className="fS2mb_right">
                                <h2>A quale mondo appartiene?</h2>
                                <i>* Selezione multipla</i>
                                <div className="radioSelect">
                                    <div className="firstDo">
                                        <label className="customRadio">
                                            <input type="checkbox" name="cucito" id="cucito" />
                                            <span className="checkMark"></span>
                                        </label>
                                        <label className="labelND" htmlFor="cucito">Cucito & Filato</label>
                                    </div>

                                    <div className="firstDo secondDo">
                                        <label className="customRadio">
                                            <input type="checkbox" name="carta" id="carta" />
                                            <span className="checkMark"></span>
                                        </label>
                                        <label className="labelND" htmlFor="carta">Carta Scrap & Colore</label>
                                    </div>

                                    <div className="firstDo secondDo">
                                        <label className="customRadio">
                                            <input type="checkbox" name="Decorazione" id="Decorazione" />
                                            <span className="checkMark"></span>
                                        </label>
                                        <label className="labelND" htmlFor="Decorazione">Decorazione</label>
                                    </div>

                                    <div className="firstDo secondDo">
                                        <label className="customRadio">
                                            <input type="checkbox" name="Ricamo" id="Ricamo" />
                                            <span className="checkMark"></span>
                                        </label>
                                        <label className="labelND" htmlFor="Ricamo">Ricamo e tradizione</label>
                                    </div>

                                    <div className="firstDo secondDo">
                                        <label className="customRadio">
                                            <input type="checkbox" name="Bijoux" id="Bijoux" />
                                            <span className="checkMark"></span>
                                        </label>
                                        <label className="labelND" htmlFor="Bijoux">Bijoux & Accessori</label>
                                    </div>

                                    <button className="hs6mrbBtn">Invia</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};