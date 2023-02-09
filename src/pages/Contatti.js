import { HeaderCard, HomeSection5 } from "../layouts/Layouts";

export function Contatti() {
    return (
        <>
            <div className="contatti">
                {/* SECTION 1 */}
                <HeaderCard title="Contatti" />

                {/* SECTION 2 */}
                <div className="contattiSection2">
                    <div className="conS2_main">
                        <div className="conS2m_left">
                            <h1>Serve aiuto?</h1>
                            <p>Sì, abbiamo tutti i contatti che ti potrebbero tornare utili.
                                Se hai bisogno del nostro team commerciale, di assistenza o hai dei dubbi che possiamo chiarirti con le FAQ, sei nel posto giusto!
                            </p>
                        </div>

                        <div className="conS2m_right">
                            <h3>Contattaci su</h3>
                            <p>helpdesk.vi@iegexpo.it</p>
                            <button className="hs1b_btn">Scrivici su whatsapp</button>
                        </div>
                    </div>
                </div>

                {/* SECTION 2 */}
                <div className="contattiSection3">
                    <div className="conS3_top">
                        <div className="hs1_top scc_top">
                            <h1>Il nostro team commerciale</h1>
                        </div>

                        <div className="conS3t_wrapper">

                            {/* Card 1 */}
                            <div className="conS3tw_card">
                                <div className="conS3twc_top">
                                    <h2>Marco Chiarello</h2>
                                    <h3>Brand Manager</h3>
                                </div>

                                <div className="conS3twc_bottom">
                                    <p>marco.chiarello@iegexpo.it</p>
                                    <h4>+39 0444 969413</h4>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="conS3tw_card">
                                <div className="conS3twc_top">
                                    <h2>Carolina Busnardo </h2>
                                    <h3>Sales Account</h3>
                                </div>

                                <div className="conS3twc_bottom">
                                    <p>carolina.busnardo@iegexpo.it</p>
                                    <h4>+39 0444 969439</h4>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="conS3tw_card">
                                <div className="conS3twc_top">
                                    <h2>Serena Rizzotto</h2>
                                    <h3>Sales Account</h3>
                                </div>

                                <div className="conS3twc_bottom">
                                    <p>serena.rizzotto@iegexpo.it</p>
                                    <h4>+39 0444 969087</h4>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="conS3tw_card">
                                <div className="conS3twc_top">
                                    <h2>Roberta Lunardon</h2>
                                    <h3>Event Specialist</h3>
                                </div>

                                <div className="conS3twc_bottom">
                                    <p>roberta.lunardon@iegexpo.it</p>
                                    <h4>+39 0444 969086</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="conS3_bottom">
                        <div className="hs1_top scc_top">
                            <h1>Il nostro ufficio stampa</h1>
                        </div>

                        <div className="conS3b_wrapper">

                            {/* Card 1 */}
                            <div className="conS3bw_card">
                                <h2>Michela Moneta</h2>
                                <h3>Press Office Coordinator</h3>
                                <p>michela.moneta@iegexpo.it</p>
                            </div>

                            {/* Card 2 */}
                            <div className="conS3bw_card">
                                <h2>Luca Paganin</h2>
                                <h3>Press Offive</h3>
                                <p>luca.paganin@iegexpo.it</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 4 */}
                <HomeSection5 />
            </div>
        </>
    )
};