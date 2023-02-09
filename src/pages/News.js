import { HeaderCard, Hs1bContent, SimCard } from "../layouts/Layouts";

function News() {
    return (
        <>
            <div className="news">
                {/* SECTION 1 */}
                <HeaderCard title={"News"} about={"Consigli, tutorial e curiosità sull'universo del Cucito e Filato fai da te"} />

                {/* SECTION 2 */}
                <div className="homeSection1 newsSection2">
                    <div className="hs1_content">
                        <div className="hs1_top">
                            <h1>In evidenza</h1>
                        </div>
                        <div className="hs1_bottom"><Hs1bContent /></div>
                    </div>
                </div>

                {/* SECTION 3 */}
                <SimCard title={"Cucito & Filato"}
                    link={"Vedi tutti"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc3.png"}
                    img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc4.png"}
                    img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc5.png"}
                    img4={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc6.png"}
                />

                {/* SECTION 4 */}
                <SimCard title={"Carta Scrap & Colore"}
                    link={"Vedi tutti"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc7.png"}
                    img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc8.png"}
                    img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc9.png"}
                    img4={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc10.png"}
                />

                {/* SECTION 5 */}
                <SimCard title={"Ricamo & Tradizione"}
                    link={"Vedi tutti"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc3.png"}
                    img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc4.png"}
                    img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc5.png"}
                    img4={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc6.png"}
                />

                {/* SECTION 6 */}
                <SimCard title={"Decorazione"}
                    link={"Vedi tutti"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc7.png"}
                    img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc8.png"}
                    img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc9.png"}
                    img4={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc10.png"}
                />

                {/* SECTION 7 */}
                <SimCard title={"Bijoux & Accessori"} idd={"simCardB"}
                    link={"Vedi tutti"}
                    img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc7.png"}
                    img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc8.png"}
                    img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc9.png"}
                    img4={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc10.png"}
                />
            </div>
        </>
    )
};

export default News;