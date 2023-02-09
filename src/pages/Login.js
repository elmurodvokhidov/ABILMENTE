import { NavLink } from "react-router-dom";

export function Login() {
    return (
        <>
            <div className="login">

                {/* SCECTION 1 */}
                <div className="loginSection1">
                    <div className="lS1_main">
                        <div className="lS1m_content">
                            <div className="lS1mc_top">
                                <div className="lS1mct_header">
                                    <div className="logo">
                                        <NavLink to="/"><img src="./img/abilmente-magazine 1.png" alt="abilmente-magazine 1.png" /></NavLink>
                                    </div>
                                </div>
                                <div className="lS1mct_footer">
                                    <p>Registrati con il profilo social</p>
                                    <NavLink to="/">
                                        <img src="./img/Schermata 2021-07-07 alle 13.55 1.png" alt="Schermata 2021-07-07 alle 13.55 1.png" />
                                    </NavLink>
                                </div>
                            </div>

                            <div className="lS1mc_bottom">
                                <div className="lS1mcb_header">
                                    <form action="#">
                                        <label htmlFor="nome">Nome</label>
                                        <input type="text" name="nome" id="nome" />

                                        <label htmlFor="cognome">Cognome</label>
                                        <input type="text" name="cognome" id="cognome" />

                                        <label htmlFor="mail">E-mail</label>
                                        <input type="email" name="mail" id="mail" />

                                        <label htmlFor="pass">Password</label>
                                        <input type="password" name="pass" id="pass" />
                                    </form>
                                </div>

                                <div className="lS1mcb_footer">
                                    <button className="hs1b_btn">Registrati</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}