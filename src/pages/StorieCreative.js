import { HeaderCard, SimCard } from "../layouts/Layouts";

export function Creative() {
    return (
        <>
            <div className="creative">
                {/* SECTION 1 */}
                <HeaderCard title="Storie Creative" about="Consigli, tutorial e curiosità sull'universo del Cucito e Filato fai da te" />

                {/* SECTION 2 */}
                <div className="creativeSection2">
                    <div className="cS2_main">
                        <div className="cS2m_left">
                            <div className="cS2ml_top">
                                <h2>Qual è stata la scintilla che ti ha portato fin qui? Com'è stato l'inizio di tutto e com'è ora guardarsi indietro? Cosa ti aspetta nel prossimo futuro e cosa consigli a chi vuole provarci?</h2>
                            </div>

                            <div className="cS2ml_bottom">
                                <p>Ritagli di esperienze confezionano vite a misura di creatività. <br />
                                    "Storie Creative by Abilmente" è il luogo perfetto per scoprire quelle passioni che con impegno ed entusiasmo sfociano in veri e propri lavori, tra cucito, filato, carta, colore, calligrafia, decorazione, bijoux...
                                </p>
                            </div>
                        </div>

                        <div className="cS2m_right">
                            <h3>Preparati a un ricchissimo calendario di appuntamenti tra interviste personali e curiosità sul mondo fai da te, con la possibilità di lasciare domande e ricevere risposte direttamente dalle creative.</h3>
                        </div>
                    </div>
                </div>

                {/* SECTION 3 */}
                <SimCard title={"Le storie"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc11.png"}
                    img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc8.png"}
                    img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc9.png"}
                    img4={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc10.png"}
                />

                {/* SECTION 4 */}
                <SimCard idd={"simCardB"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc11.png"}
                    img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc8.png"}
                    img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc9.png"}
                    img4={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc10.png"}
                />
            </div>
        </>
    )
};