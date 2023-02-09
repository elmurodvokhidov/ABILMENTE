import { Routes, Route, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import './css/Main.css'
import { Corsi } from "./pages/Corsi";
import { Fiere } from "./pages/Fiere";
// import { Magazine } from "./pages/Magazine";
import { Negozi } from "./pages/Negozi";
import Home from "./pages/Home";
import News from "./pages/News";
import { Tutorial } from "./pages/Tutorial";
import { Sponsor } from "./pages/Sponsor";
import { Articolo } from "./pages/Articolo";
import { Blogger } from "./pages/Blogger";
import { MainBlogger } from "./pages/MainBlogger";
import { Login } from "./pages/Login";
import { Cucito } from "./pages/Cucito";
import { TutorialInner } from "./pages/TutorialInner";
import { Creative } from "./pages/StorieCreative";
import { Contatti } from "./pages/Contatti";
import { Cerca } from "./pages/Cerca";
import { CorsiInner } from "./pages/CorsiInner";
import { CorsiOnline } from "./pages/CorsiOnline";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <NavLink to="/"><img src="./img/abilmente-magazine 1.png" alt="abilmente-magazine 1.png" /></NavLink>
                </div>
                <ul>
                    <div className="dropdown">
                        <button className="dropbtn">Magazine <span><FiChevronDown /></span></button>
                        <div className="dropdown-content">
                            <li>
                                <NavLink to="/news">News</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tutorial">Tutorial</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mainblogger">Blogger</NavLink>
                            </li>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Corsi <span><FiChevronDown /></span></button>
                        <div className="dropdown-content">
                            <li>
                                <NavLink to="/corsi">Corsinella</NavLink>
                            </li>
                            <li>
                                <NavLink to="/creative">Creative</NavLink>
                            </li>
                            <li>
                                <NavLink to="/corsinner">Corsinner</NavLink>
                            </li>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Fiere <span><FiChevronDown /></span></button>
                        <div className="dropdown-content">
                            <li>
                                <NavLink to="/fiere">Vicenza</NavLink>
                            </li>
                            <li>
                                <NavLink to="/form">Form</NavLink>
                            </li>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Negozi <span><FiChevronDown /></span></button>
                        <div className="dropdown-content">
                            <li>
                                <NavLink to="/contatti">Contatti</NavLink>
                            </li>
                            <li>
                                <NavLink to="/negozi">Negozinella</NavLink>
                            </li>
                        </div>
                    </div>
                </ul>
                <div className="navbarRight">
                    <NavLink to='/cerca' className="searchBtn"><span><BsSearch /></span></NavLink>
                    <div className="profilePhoto"><img src="./img/close-up-portrait-pretty-smiling-girl_171337-11418 1.png" alt="close-up-portrait-pretty-smiling-girl_171337-11418 1.png" /></div>
                    <div className="profileAction">
                        <div className="dropdown">
                            <button className="dropbtn">Annachiara <span><FiChevronDown /></span></button>
                            <div className="dropdown-content">
                                <li>
                                    <NavLink to="">Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Log out</NavLink>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/corsi" element={<Corsi />} />
                <Route path="/fiere" element={<Fiere />} />
                <Route path="/negozi" element={<Negozi />} />
                <Route path="/news" element={<News />} />
                <Route path="/articolo" element={<Articolo />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/sponsor" element={<Sponsor />} />
                <Route path="/blogger" element={<Blogger />} />
                <Route path="/mainblogger" element={<MainBlogger />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cucito" element={<Cucito />} />
                <Route path="/tutorialvideo" element={<TutorialInner />} />
                <Route path="/creative" element={<Creative />} />
                <Route path="/contatti" element={<Contatti />} />
                <Route path="/cerca" element={<Cerca />} />
                <Route path="/corsinner" element={<CorsiInner />} />
                <Route path="/fiere" element={<Fiere />} />
                <Route path="/form" element={<CorsiOnline />} />
            </Routes>
        </>
    )
}

export default Navbar;