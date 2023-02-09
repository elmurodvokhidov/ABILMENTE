import { HeaderCard } from "../layouts/Layouts";

export function CorsiOnline() {
    return (
        <>
            <div className="online">
                {/* SECTION 1 */}
                <HeaderCard title="Inserisci il corso nella tua città" about="Compila il form per entrare a far parte della piattaforma con il tuo corso!" />

                {/* SECTION 2 */}
                <div className="onlineSection2">
                    <div className="oS2_main">
                        <div className="hs1_top scc_top">
                            <h1>Contatti</h1>
                        </div>

                        <div className="oS2m_bottom">
                            <div className="oS2m_left">
                                <div className="FormWind">
                                    <form action="#">
                                        <label htmlFor="del">Nome del corso</label> <br />
                                        <input type="text" name="del" id="del" /> <br /> <br />

                                        <label htmlFor="referente">Email referente/del corso</label> <br />
                                        <input type="email" name="referente" id="referente" /> <br /> <br />

                                        <label htmlFor="della">URL della pagina del sito</label> <br />
                                        <input type="text" name="della" id="della" />

                                        <div className="formWrapper">
                                            <div className="inputParent">
                                                <label htmlFor="Telefono">Telefono del referente</label> <br />
                                                <input type="text" name="Telefono" id="Telefono" /> <br /> <br />
                                            </div>
                                            <div className="inputParent">
                                                <label htmlFor="Regione">Regione</label> <br />
                                                <input type="email" name="Regione" id="Regione" /> <br /> <br />
                                            </div>
                                            <div className="inputParent">
                                                <label htmlFor="Provincia">Provincia</label> <br />
                                                <input type="email" name="Provincia" id="Provincia" /> <br /> <br />
                                            </div>
                                            <div className="inputParent">
                                                <label htmlFor="Città">Città</label> <br />
                                                <input type="text" name="Città" id="Città" />
                                            </div>
                                        </div>

                                        <div className="formWrapper2">
                                            <div className="inputParent">
                                                <label htmlFor="Indirizzo">Indirizzo</label> <br />
                                                <input type="email" name="Indirizzo" id="Indirizzo" /> <br /> <br />
                                            </div>
                                            <div className="inputParent">
                                                <label htmlFor="CAP">CAP</label> <br />
                                                <input type="email" name="CAP" id="CAP" /> <br /> <br />
                                            </div>
                                        </div>

                                        <div className="textarea">
                                            <label htmlFor="textarea">Breve descrizione del corso <i>*120 caratteri</i></label>
                                            <textarea name="#" id="textarea" cols="30" rows="5"></textarea>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            <div className="oS2m_right">
                                <div className="oS2mr_header">
                                    <p>Carica l’immagine del corso *</p>
                                    <button className="hs1b_btn">Sfoglia</button>
                                    <i>* Importa una foto in 240x240 px minimo e di massimo 1MB.</i>
                                </div>

                                <div className="fS2mb_right oS2mr_center">
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
                                    </div>
                                </div>

                                <div className="oS2mr_footer">
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
                                    <button className="hs1b_btn">Invia</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};