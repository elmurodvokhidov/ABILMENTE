import { HeaderCard, SimCard, SimCardND, TS2ltop } from "../layouts/Layouts";

export function Cucito() {
    return (
        <>
            <div className="cucito">
                {/* SECTION 1 */}
                <HeaderCard title="Cucito & Filato" about="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod" />

                {/* SECTION 2 */}
                <div className="tutorialSection2 cucitoSection2">
                    <div className="tS2_left">
                        <TS2ltop />
                    </div>

                    <div className="tS2_right cucitoS2">
                        <SimCard title={"Cucito & Filato"} dNone={'dNone'}
                            link={"Vedi tutti"}
                            img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc3.png"}
                            img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc4.png"}
                            img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc5.png"}
                        />

                        <SimCardND title={"Tutorial"} dNone={'dNone'}
                            link={"Vedi tutti"}
                            img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc12.png"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};