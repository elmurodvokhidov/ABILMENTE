import { HeaderCard, SimCardND, TS2ltop } from "../layouts/Layouts";

export function Tutorial() {
    return (
        <>
            <div className="tutorial">

                {/* SECTION 1 */}
                <HeaderCard title={"Tutorial"} about={"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod"} />

                {/* SECTION 2 */}
                <div className="tutorialSection2">
                    <div className="tS2_left">
                        <TS2ltop />

                        <div className="tS2l_bottom">
                            <div className="tS2lt_header">
                                <h4>Tag</h4>
                            </div>

                            <div className="tS2lb_footer">
                                <h4 className="tS2lbf_content">Punto Croce</h4>
                                <h4 className="tS2lbf_content">Ferri</h4>
                                <h4 className="tS2lbf_content">Uncinetto</h4>
                                <h4 className="tS2lbf_content">Ferri circolari</h4>
                                <h4 className="tS2lbf_content">Cucito creativo</h4>
                                <h4 className="tS2lbf_content">Cucito Pratico</h4>
                            </div>
                        </div>
                    </div>

                    <div className="tS2_right">
                        <SimCardND dNone={'dNone'} title={"Cucito & Filato"}
                            link={"Vedi tutti"}
                            img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc12.png"}
                        />
                        
                        <SimCardND dNone={'dNone'} title={"Carta Scrap & Colore"}
                            link={"Vedi tutti"}
                            img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc12.png"}
                        />
                        
                        <SimCardND dNone={'dNone'} title={"Decorazione"}
                            link={"Vedi tutti"}
                            img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc12.png"}
                        />
                        
                        <SimCardND dNone={'dNone'} title={"Ricamo & Tradizione"}
                            link={"Vedi tutti"}
                            img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc12.png"}
                        />
                        
                        <SimCardND dNone={'dNone'} title={"Bijoux & Accessori"} idd={"simCardB"}
                            link={"Vedi tutti"}
                            img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc12.png"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}