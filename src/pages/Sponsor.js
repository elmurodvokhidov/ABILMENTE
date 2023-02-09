import { HeaderCard } from "../layouts/Layouts";

export function Sponsor() {
    return (
        <>
            <div className="sponsor">
                {/* SECTION 1 */}
                <HeaderCard title="Sponsor & Partners" about="Consigli, tutorial e curiosità sull'universo del Cucito e Filato fai da te" />
                
                {/* SECTION 2 */}
                <div className="sponsorSection2">
                    <div className="sS2_image"><img src="./img/Screenshot 2021-11-12 at 15.56.png" alt="Screenshot 2021-11-12 at 15.56.png" /></div>
                </div>
            </div>
        </>
    )
}