import { TfiClose } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export function Cerca() {

    const myRef = useRef();

    function show() {
        myRef.current.style.opacity = '1'
    }

    return (
        <>
            <div className="cerca">

                {/* SECTION 1 */}
                <div className="cercaSection1" ref={myRef}>
                    <h3>Pagina non trovata</h3>
                    <h1> Oops! Sembra che questo contenuto non sia presente</h1>
                    <h2>Prova a cercare di nuovo:</h2>
                </div>

                {/* SECTION 1 */}
                <div className="cercaSection2">
                    <NavLink to="/" className="close"><span><TfiClose /></span></NavLink>
                    <label htmlFor="searchComp"><span><BsSearch /></span>Cerca</label>
                    <input type="text" name="#" id="searchComp" onChange={show} />
                    <div className="cerS2_btn">
                        <button className="hs1b_btn">Feltro</button>
                        <button className="hs1b_btn">Feltro</button>
                        <button className="hs1b_btn">Feltro</button>
                    </div>
                </div>
            </div>
        </>
    )
};