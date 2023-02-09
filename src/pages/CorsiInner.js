import { CorsinnerFunc, HeaderCard } from "../layouts/Layouts";
import { BsChevronDown } from "react-icons/bs";

export function CorsiInner() {
    return (
        <>
            <div className="corsinner">
                {/* SECTION 1 */}
                <HeaderCard title="Negozi online" about="Scopri i negozi online" />

                {/* SECTION 2 */}
                <div className="corsinnerSection2">
                    <div className="hs1_top scc_top">
                        <h1>I negozi online</h1>
                    </div>

                    <div className="coriS2_bottom">
                        <div className="coriS2b_header">
                                <button className="hs1b_btn">Regione <span><BsChevronDown /></span></button>
                        </div>

                        <div className="coriS2b_footer">
                            <CorsinnerFunc />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};