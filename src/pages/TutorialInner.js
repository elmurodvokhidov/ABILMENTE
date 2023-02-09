import { NavLink } from "react-router-dom";
import { SimCardND } from "../layouts/Layouts";
import { AiOutlinePlayCircle } from "react-icons/ai";

export function TutorialInner() {
    return (
        <>
            <div className="articolo tutorialInner">

                {/* SECTION 1 */}
                <div className="articoloSection1 tutorialInnerS1">
                    <div className="aS1_img tIS1_img">
                        <span><AiOutlinePlayCircle /></span>
                        <img src="./img/titoloheaderVideoImg.png" alt="titoloheaderVideoImg.png" />
                    </div>
                </div>

                {/* SECTION 2 */}
                <div className="articoloSection2">
                    <div className="aS2_left">
                        <img src="./img/close-up-portrait-pretty-smiling-girl_171337-11418 1.png" alt="close-up-portrait-pretty-smiling-girl_171337-11418 1.png" />
                        <p>News</p>
                        <p>by <span className="orange"><NavLink to="/blogger">Angelica Foschi</NavLink></span></p>
                    </div>

                    <div className="aS2_center">
                        <div className="aS2c_header">
                            <div className="aS2ch_top">
                                <div className="aS2cht_left">
                                    <p className="orange">TAG 1,</p>
                                    <p className="orange">TAG 2,</p>
                                    <p className="orange">TAG 3</p>
                                </div>
                                <div className="aS2cht_right">
                                    <p>15 Novembre 2021</p>
                                </div>
                            </div>
                            <h1>Lorem ipsum dolor sit amet, consectetur adipisci elit</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h3>
                        </div>

                        <div className="aS2c_main tIS1c_main">
                            <h3>Materiali</h3>
                            <ul className="ulAndol">
                                <li>Filo di rame diametro 1,5mm lungo 14cm</li>
                                <li>Filo di rame diametro 0,6mm lungo 10cm ca</li>
                                <li>Perline di pietra, legno o altro arrotondate</li>
                            </ul>

                            <h3>Atrezzi</h3>
                            <ul className="ulAndol">
                                <li>Righello</li>
                                <li>Tronchesi</li>
                                <li>Lima da ferro</li>
                                <li>Oggetto cilindrico diametro 1cm ca</li>
                                <li>Pinze a punta piatta</li>
                                <li>Incudine</li>
                                <li>Martello piatt</li>
                                <li>Oggetto cilindrico diametro come il tuo dito</li>
                            </ul>
                        </div>

                        <div className="aS2c_footer tIS1c_footer">
                            <h3>Procedimento</h3>
                            <ol className="ulAndol">
                                <li>Tagliare una porzione di filo di rame diametro 1,5mm di lunghezza 14 cm e modellarla sulla forma cilindrica piegandola a metà e appoggiando il centro sulla forma, poi accompagnarla fino a fare accavallare l e due metà e a formare un cerchio con due l unghi "baffi".</li>
                                <li>Con l a pinza a punta piatta ripiegare l e due estremità nel punto dove si i ncrociano tangenti il cerchio, fino a portarle ad essere perpendicolari al cerchio stesso, restando sullo stesso piano.</li>
                                <li>Ora passiamo alla martellatura. Con martello e incudine appiattire in maniera uniforme sul piano il filo nella parte modellata a cerchio.</li>
                                <li>I due baffi vanno anche loro martellati, ma devono assumere una sezione circa quadrata. Per farlo devono essere martellati uno per volta. Si parte martellando entrambi i fili con leggerezza e perpendicolarmente al piano, in questo modo si appiattisce in un senso. Poi si separano i fili e si girano per poter martellare a 90° rispetto a prima e ripetere l 'operazione. Questo passaggio dev'essere fatto sui due baffi singolarmente e, se necessario, ripetuto un po' di volte.</li>
                                <li>Ora dobbiamo lavorare sulle estremità dei baffi. Innanzitutto verifichiamo che le lunghezze siano uguali, se non lo sono tagliamo la parte eccedente della più lunga, così che lo diventino. Limiamo le estremità fino ad arrotondarle.</li>
                                <li>Misuriamo la circonferenza del nostro dito, segnamo sui baffi il punto corrispondente alla lunghezza a partire dalla "testa" del cerchio. Con le pinze a punta piatta ripieghiamo le estremità verso l 'esterno a partire dal punto segnato. Poi ci aiutiamo con il martello e l'incudine a schiacciare le estremità ripiegate.</li>
                                <li>È il momento di creare il nostro cerchietto. Prendiamo la forma cilindrica che ha più o meno la circonferenza del nostro dito e modelliamo il rame. Partiamo dalla parte modellata a cerchio, la schiacciamo in modo che si arrotondi e poi la teniamo ben aderente alla forma quindi schiacciamo con le dita lungo tutto il nostro pezzetto di rame i n modo che si adagi sul cilindro e ne prenda la forma. Possiamo perfezionare il risultato martellando leggermente lungo tutto il pezzo.</li>
                                <li>Possiamo finire qui ma se vogliamo inserire del colore al nostro anellino procediamo come segue. Scegliamo delle perle di pietra o altro, i mportante è che non siano troppo grandi né appuntite. Le infiliamo in un filo di rame di diametro 0,6mm e arrotoliamo una estremità del filo attorno ad un punto del cerchio appiattito del nostro.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="aS2_right">
                        <div className="aS2r_top">
                            <h2>altri articoli di angelica</h2>
                        </div>
                        <div className="aS2r_bottom">
                            <div className="aS2rb_wrapper">
                                <div className="aS2rb_card">
                                    <div className="aS2rbc_image"><img src="./img/articolovector.png" alt="articolovector.png" /></div>
                                    <div className="aS2rbc_content">
                                        <p className="orange">Lorem ipsum</p>
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <button className="hs1b_btn">Partecipa</button>
                                    </div>
                                </div>

                                <div className="aS2rb_card">
                                    <div className="aS2rbc_image"><img src="./img/articolovector1.png" alt="articolovector1.png" /></div>
                                    <div className="aS2rbc_content">
                                        <p className="orange">Lorem ipsum</p>
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <button className="hs1b_btn">Partecipa</button>
                                    </div>
                                </div>

                                <div className="aS2rb_card">
                                    <div className="aS2rbc_image"><img src="./img/articolovector2.png" alt="articolovector2.png" /></div>
                                    <div className="aS2rbc_content">
                                        <p className="orange">Lorem ipsum</p>
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <button className="hs1b_btn">Partecipa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tI_footer">
                {/* SECTION 3 */}
                <SimCardND title={"Tutorial Correlati"} idd={"simCardB"}
                    link={"Scopri tutti"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc12.png"}
                />
            </div>
        </>
    )
}