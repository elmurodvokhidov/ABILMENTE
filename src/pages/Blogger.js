import { SimCard } from "../layouts/Layouts";

export function Blogger() {
    return (
        <>
            <div className="blogger">

                {/* SECTION 1 */}
                <div className="bloggerSection1">
                    <div className="bS1_main">
                        <div className="bS1m_left">
                            <div className="circyeCard">
                                <img src="./img/Ellipse 11.png" alt="Ellipse 11.png" />
                            </div>
                        </div>

                        <div className="bS1m_center">
                            <h1>Angelica Foschi</h1>
                            <h3>@angelicafoschi</h3>
                            <p>Sono feltraia per passione ed educatrice per vocazione e vado in giro per lo stivale a fare “feltromagie” con la lana cardata.</p>
                            <p>L’arte e la scienza sono le 2 passioni che ho fuso per fondare il mio brand col quale mi occupo di fiber art e artigianato tessile. Sono specializzata nella tecnica ad ago e realizzo oggetti per l’home decor morbidi, profumati e magici.</p>
                            <button className="hs1b_btn">Guarda la storia</button>
                        </div>
                        <div className="bS1m_right">
                            <div className="bS1mr_icon"><img src="./img/WebIcon.png" alt="WebIcon.png" /></div>
                            <div className="bS1mr_icon"><img src="./img/FacebookIcon.png" alt="FacebookIcon.png" /></div>
                            <div className="bS1mr_icon"><img src="./img/InstagramIcon.png" alt="InstagramIcon.png" /></div>
                            <div className="bS1mr_icon"><img src="./img/EmailIcon.png" alt="EmailIcon.png" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bloggerFooter">

                {/* SECTION 2 */}
                <SimCard title={"Tutti i miei articoli per Abilmente"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc11.png"}
                    img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc8.png"}
                    img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc9.png"}
                    img4={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc10.png"}
                />


                {/* SECTION 3 */}
                <SimCard idd={"simCardC"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc3.png"}
                    img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc4.png"}
                    img3={"./img/BloggerImg.png"}
                    img4={"./img/BloggerImg1.png"}
                />
            </div>
        </>
    )
};