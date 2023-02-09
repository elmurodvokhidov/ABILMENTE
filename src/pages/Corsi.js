import { HeaderCard } from "../layouts/Layouts";
import { BsChevronDown } from "react-icons/bs";

export function Corsi() {
    return (
        <>
            <div className="corsi">
                {/* SECTION 1 */}
                <HeaderCard title="Corsi" about="Scopri i corsi nella tua città" />

                {/* SECTION 2 */}
                <div className="corsiSection2">
                    <div className="hs1_top scc_top">
                        <h1>Trova i corsi vicino a te</h1>
                    </div>

                    <div className="cS2_top">
                        <button className="hs1b_btn">Regione <span><BsChevronDown /></span></button>
                        <button className="hs1b_btn">Provincia <span><BsChevronDown /></span></button>
                        <button className="hs1b_btn">Città <span><BsChevronDown /></span></button>
                    </div>

                    <div className="cS2_bottom">

                        {/* Card 1 */}
                        <div className="cS2b_card">
                            <div className="cS2bc_img">
                                <img src="./img/image 7.png" alt="" />
                            </div>

                            <div className="cS2bc_text">
                                <h4>Cucito & Filato, Decorazione</h4>
                                <h2>Titolo Corso Sed ut perspiciatis unde omnis</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam </p>
                            </div>

                            <div className="cS2bc_child">
                                <div className="cS2bcc_top">
                                    <div className="cS2bcct_img"><img src="./img/pin.png" alt="" /></div>
                                    <div className="cS2bcct_content"><h4>Rimini</h4><p>Viale Ceccarini 18 - 47838 Tel: 054 13094</p></div>
                                </div>
                                <button className="hs1b_btn">Info</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="cS2b_card">
                            <div className="cS2bc_img">
                                <img src="./img/image 71.png" alt="" />
                            </div>

                            <div className="cS2bc_text">
                                <h4>Cucito & Filato, Decorazione</h4>
                                <h2>Titolo Corso Sed ut perspiciatis unde omnis</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam </p>
                            </div>

                            <div className="cS2bc_child">
                                <div className="cS2bcc_top">
                                    <div className="cS2bcct_img"><img src="./img/pin.png" alt="" /></div>
                                    <div className="cS2bcct_content"><h4>Rimini</h4><p>Viale Ceccarini 18 - 47838 Tel: 054 13094</p></div>
                                </div>
                                <button className="hs1b_btn">Info</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="cS2b_card">
                            <div className="cS2bc_img">
                                <img src="./img/image 72.png" alt="" />
                            </div>

                            <div className="cS2bc_text">
                                <h4>Cucito & Filato, Decorazione</h4>
                                <h2>Titolo Corso Sed ut perspiciatis unde omnis</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam </p>
                            </div>

                            <div className="cS2bc_child">
                                <div className="cS2bcc_top">
                                    <div className="cS2bcct_img"><img src="./img/pin.png" alt="" /></div>
                                    <div className="cS2bcct_content"><h4>Rimini</h4><p>Viale Ceccarini 18 - 47838 Tel: 054 13094</p></div>
                                </div>
                                <button className="hs1b_btn">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};