import { useContext } from "react"
import { ContextData } from "../context/Context";
import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { AiOutlinePlayCircle } from "react-icons/ai";

export function HomeHeaderCard() {

    const { homeHeaderCardContext } = useContext(ContextData);

    return (
        <div className="homeHeaderCardWrapper">
            {
                homeHeaderCardContext.map(item => (
                    <div className="homeHeaderCard" key={item.id}>
                        <div className="hhc_left"><img src={item.img} alt={item.img} /></div>
                        <div className="hhc_right">
                            <p>{item.title}</p>
                            <h2>{item.about}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export function Hs1bContent() {
    return (
        <>
            <div className="hs1bc_left">
                <div className="hs1bcl_img">
                    <img src="./img/diy-woman-2021-09-24-03-38-11-utc.png" alt="diy-woman-2021-09-24-03-38-11-utc.png" />
                </div>
                <div className="hs1bcl_text">
                    <p className="orange">Lorem ipsum </p>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisci elit</h1>
                    <p>Di <span className="orange">Angela Rossi</span></p>
                    <button className="hs1b_btn">Scopri di più</button>
                </div>
            </div>


            <div className="hs1bc_right">
                <div className="hs1bcr_top">
                    <div className="hs1bcrt_img">
                        <img src="./img/Rectangle 206.png" alt="Rectangle 206.png" />
                    </div>
                    <div className="hs1bcrt_text">
                        <span className="orange">Lorem ipsum </span>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p id="paragraph">Lorem ipsum dolor sit amet...</p>
                        <p className="orange1">di <span className="orange orange1">Lorem ipsum</span></p>
                        <button className="hs1b_btn">Scopri di più</button>
                    </div>
                </div>


                <div className="hs1bcr_top hs1bcr_bottom">
                    <div className="hs1bcrt_img">
                        <img src="./img/Rectangle 207.png" alt="Rectangle 206.png" />
                    </div>
                    <div className="hs1bcrt_text">
                        <span className="orange">Lorem ipsum </span>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p id="paragraph">Lorem ipsum dolor sit amet...</p>
                        <p className="orange1">di <span className="orange orange1">Lorem ipsum</span></p>
                        <button className="hs1b_btn">Scopri di più</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export function Hs2mwb() {

    const { hs2mwbContext } = useContext(ContextData);

    return (
        <>
            <div className="hs2mwb_wrapper">
                {
                    hs2mwbContext.map(item => (
                        <div className="hs2mwbw_card" key={item.id}>
                            <div className="hs2mwbwc_content">
                                <NavLink to="/cucito"><div className="hs2mwbwc_image"><img src={item.img} alt={item.img} /></div></NavLink>
                                <p>{item.about}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export function Hs3mb() {

    const { hs3mbContext } = useContext(ContextData);

    return (
        <>
            <div className="hs3mb_wrapper">
                {
                    hs3mbContext.map(item => (
                        <div className="hs3mb_card" key={item.id}>
                            <div className="hs3mbc_image"><img src={item.img} alt={item.img} /></div>
                            <div className="hs3mbc_text">
                                <div className="hs3mbc_header">
                                    <p>{item.title}</p>
                                    <p>di <span className="orange">Angelica Foschi</span></p>
                                </div>
                                <h2>{item.about}</h2>
                                <button className="hs1b_btn">{item.btn}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export function AutoPlay() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="sliderSponsor">
            <Slider {...settings}>
                <div className="slideCard">
                    <img src="./img/Logo-Design-Hub.png" alt="Logo-Design-Hub.png" />
                </div>
                <div className="slideCard">
                    <img src="./img/whirlpool-logo-1.png" alt="whirlpool-logo-1.png" />
                </div>
                <div className="slideCard">
                    <img src="./img/koh-i-noor-logo-png-transparent.png" alt="koh-i-noor-logo-png-transparent.png" />
                </div>
                <div className="slideCard">
                    <img src="./img/logo_200x200__1_.avif" alt="logo_200x200__1_.avif" />
                </div>
                <div className="slideCard">
                    <img src="./img/images.png" alt="images.png" />
                </div>
                <div className="slideCard">
                    <img src="./img/Hepi_Press-logo.png" alt="Hepi_Press-logo.png" />
                </div>
                <div className="slideCard">
                    <img src="./img/AdsTArgets-Logo.png" alt="AdsTArgets-Logo.png" />
                </div>
                <div className="slideCard">
                    <img src="./img/kookienowlogo-8ee0d9c9-200x200.png" alt="kookienowlogo-8ee0d9c9-200x200.png" />
                </div>
                <div className="slideCard">
                    <img src="./img/viber-logo.png" alt="viber-logo.png" />
                </div>
                <div className="slideCard">
                    <img src="./img/Renkalik.jpg" alt="Renkalik.jpg" />
                </div>
            </Slider>
        </div>
    );
};

export function FormTem() {
    return (
        <>
            <div className="FormWind">
                <form action="#">
                    <label htmlFor="name">Nome</label> <br />
                    <input type="text" name="name" id="name" /> <br /> <br />

                    <label htmlFor="email">E-mail</label> <br />
                    <input type="email" name="email" id="email" />
                </form>
            </div>
        </>
    )
};

export function HeaderCard(prop) {
    return (
        <>
            <div className="headerCard">
                <div className="hc_content">
                    <h1>{prop.title}</h1>
                    <p>{prop.about}</p>
                </div>
            </div>
        </>
    )
};

export function SimCard(prop) {
    return (
        <>
            <div className="simCard" id={prop.idd}>
                <div className="sc_content">
                    <div className="hs1_top scc_top">
                        <h1>{prop.title}</h1>
                        <p><NavLink to="/articolo">{prop.link}</NavLink></p>
                    </div>
                    <div className="scc_bottom">
                        <div className="sc_wrapper">
                            <div className="sc_card">
                                <div className="scc_img">
                                    <img src={prop.img1} alt={prop.img1} />
                                </div>
                                <div className="scc_content">
                                    <p className="blurText">1 giugno 2022</p>
                                    <h2>Lorem ipsum dolor sit, consectetur adipisci</h2>
                                    <p>di <span className="orange">Angelica Foschi</span></p>
                                    <button className="hs1b_btn">Guarda</button>
                                </div>
                            </div>

                            <div className="sc_card">
                                <div className="scc_img">
                                    <img src={prop.img2} alt={prop.img2} />
                                </div>
                                <div className="scc_content">
                                    <p className="blurText">1 giugno 2022</p>
                                    <h2>Lorem ipsum dolor sit, consectetur adipisci</h2>
                                    <p>di <span className="orange">Angelica Foschi</span></p>
                                    <button className="hs1b_btn">Guarda</button>
                                </div>
                            </div>

                            <div className="sc_card">
                                <div className="scc_img">
                                    <img src={prop.img3} alt={prop.img3} />
                                </div>
                                <div className="scc_content">
                                    <p className="blurText">1 giugno 2022</p>
                                    <h2>Lorem ipsum dolor sit, consectetur adipisci</h2>
                                    <p>di <span className="orange">Angelica Foschi</span></p>
                                    <button className="hs1b_btn">Guarda</button>
                                </div>
                            </div>

                            <div className="sc_card" id={prop.dNone}>
                                <div className="scc_img">
                                    <img src={prop.img4} alt={prop.img4} />
                                </div>
                                <div className="scc_content">
                                    <p className="blurText">1 giugno 2022</p>
                                    <h2>Lorem ipsum dolor sit, consectetur adipisci</h2>
                                    <p>di <span className="orange">Angelica Foschi</span></p>
                                    <button className="hs1b_btn">Guarda</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export function TS2ltop() {
    return (
        <>
            <div className="tS2l_top">
                <div className="tS2lt_header">
                    <h4>MondI Abilmente</h4>
                </div>
                <div className="tS2lt_footer">
                    <div className="tS2ltf_wrapper">
                        <div className="tS2ltfw_card">
                            <div className="tS2ltfwc_img"><img src="./img/Vector2.png" alt="Vector2.png" /></div>
                            <div className="tS2ltfwc_content"><h4>Cucito & Filato</h4></div>
                        </div>

                        <div className="tS2ltfw_card">
                            <div className="tS2ltfwc_img"><img src="./img/Vector7.png" alt="Vector7.png" /></div>
                            <div className="tS2ltfwc_content"><h4>Carta Scrap & colore</h4></div>
                        </div>

                        <div className="tS2ltfw_card">
                            <div className="tS2ltfwc_img"><img src="./img/Vector8.png" alt="Vector8.png" /></div>
                            <div className="tS2ltfwc_content"><h4>Decorazione</h4></div>
                        </div>

                        <div className="tS2ltfw_card">
                            <div className="tS2ltfwc_img"><img src="./img/Vector9.png" alt="Vector9.png" /></div>
                            <div className="tS2ltfwc_content"><h4>Ricamo & tradizione</h4></div>
                        </div>

                        <div className="tS2ltfw_card">
                            <div className="tS2ltfwc_img"><img src="./img/Vector10.png" alt="Vector10.png" /></div>
                            <div className="tS2ltfwc_content"><h4>Bijooux & Accessori</h4></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export function SimCardND(prop) {
    return (
        <>
            <div className="simCard" id={prop.idd}>
                <div className="sc_content">
                    <div className="hs1_top scc_top">
                        <h1>{prop.title}</h1>
                        <p><NavLink to="/">{prop.link}</NavLink></p>
                    </div>
                    <div className="scc_bottom">
                        <div className="sc_wrapper">
                            <div className="sc_card">
                                <div className="scc_img">
                                    <span><NavLink to="/tutorialvideo"><AiOutlinePlayCircle /></NavLink></span>
                                    <img src={prop.img1} alt={prop.img1} />
                                </div>
                                <div className="scc_content">
                                    <div className="sccc_header">
                                        <p className="blurText">1 giugno 2022</p>
                                        <p><NavLink className="extraLink" to="/">Difficoltà tutorial</NavLink></p>
                                    </div>
                                    <h2>Lorem ipsum dolor sit, consectetur adipisci</h2>
                                    <p>di <span className="orange">Angelica Foschi</span></p>
                                    <button className="hs1b_btn">Guarda</button>
                                </div>
                            </div>

                            <div className="sc_card">
                                <div className="scc_img">
                                    <span><NavLink to="/tutorialvideo"><AiOutlinePlayCircle /></NavLink></span>
                                    <img src={prop.img1} alt={prop.img1} />
                                </div>
                                <div className="scc_content">
                                    <div className="sccc_header">
                                        <p className="blurText">1 giugno 2022</p>
                                        <p><NavLink className="extraLink" to="/">Difficoltà tutorial</NavLink></p>
                                    </div>
                                    <h2>Lorem ipsum dolor sit, consectetur adipisci</h2>
                                    <p>di <span className="orange">Angelica Foschi</span></p>
                                    <button className="hs1b_btn">Guarda</button>
                                </div>
                            </div>

                            <div className="sc_card">
                                <div className="scc_img">
                                    <span><NavLink to="/tutorialvideo"><AiOutlinePlayCircle /></NavLink></span>
                                    <img src={prop.img1} alt={prop.img1} />
                                </div>
                                <div className="scc_content">
                                    <div className="sccc_header">
                                        <p className="blurText">1 giugno 2022</p>
                                        <p><NavLink className="extraLink" to="/">Difficoltà tutorial</NavLink></p>
                                    </div>
                                    <h2>Lorem ipsum dolor sit, consectetur adipisci</h2>
                                    <p>di <span className="orange">Angelica Foschi</span></p>
                                    <button className="hs1b_btn">Guarda</button>
                                </div>
                            </div>

                            <div className="sc_card" id={prop.dNone}>
                                <div className="scc_img">
                                    <span><NavLink to="/tutorialvideo"><AiOutlinePlayCircle /></NavLink></span>
                                    <img src={prop.img1} alt={prop.img1} />
                                </div>
                                <div className="scc_content">
                                    <div className="sccc_header">
                                        <p className="blurText">1 giugno 2022</p>
                                        <p><NavLink className="extraLink" to="/">Difficoltà tutorial</NavLink></p>
                                    </div>
                                    <h2>Lorem ipsum dolor sit, consectetur adipisci</h2>
                                    <p>di <span className="orange">Angelica Foschi</span></p>
                                    <button className="hs1b_btn">Guarda</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export function MainBloggerCard() {

    const { mainBloggerContext } = useContext(ContextData);

    return (
        <>
            <div className="mainBloggerWrapper">
                {
                    mainBloggerContext.map(item => (
                        <div className="mainBloggerCard">
                            <div className="mbc_img">
                                <div className="circyeCard">
                                    <img src={item.img} alt={item.img} />
                                </div>
                            </div>

                            <div className="mbc_top">
                                <h4>{item.title}</h4>
                                <h2>{item.name}</h2>
                                <p><NavLink to="/">{item.link}</NavLink></p>
                            </div>

                            <p>{item.about}</p>

                            <button className="hs1b_btn">{item.btn}</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export function HomeSection5() {
    return (
        <>
            <div className="homeSection5 homeSection6">
                <div className="hs5_main">
                    <div className="hs5m_left">
                        <h1>La nostra scintillante newsletter!</h1>
                        <h2>Novità di fiera in anteprima, creative da seguire, tutorial freschissimi, promozioni e codici sconto per le tue spese folli online. Wonder Woman sarà fiera di te!</h2>
                    </div>


                    <div className="hs5m_left hs5m_right">
                        <div className="hs6mr_top"><FormTem /></div>

                        <div className="hs6mr_bottom">
                            <p>Letta l'informativa comunicatami, dichiaro la seguente volontà circa il trattamento dati per autonome finalità di marketing diretto da parte di terzi partner di IEG (finalità 4 dell'informativa)</p>
                            <div className="radioSelect">
                                <div className="firstDo">
                                    <label className="customRadio">
                                        <input type="radio" name="acconsento" id="acconsento" />
                                        <span className="checkMark"></span>
                                    </label>
                                    <label className="labelND" htmlFor="acconsento">Acconsento</label>
                                </div>

                                <div className="firstDo secondDo">
                                    <label className="customRadio">
                                        <input type="radio" name="acconsento" id="nonAcconsento" />
                                        <span className="checkMark"></span>
                                    </label>
                                    <label className="labelND" htmlFor="nonAcconsento">Non Acconsento</label>
                                </div>
                            </div>
                            <button className="hs6mrbBtn">Iscriviti</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export function CorsinnerFunc() {

    const { corsinnerContext } = useContext(ContextData);

    return (
        <>
            <div className="corsiS2_wrapper">
                {
                    corsinnerContext.map(item => (
                        <div className="corCard" key={item.id}>
                            <div className="corc_header">
                                <h1>{item.title}</h1>
                                <h3>{item.about}</h3>
                                <NavLink to="/">{item.link}</NavLink>
                            </div>

                            <div className="corc_footer">
                                <NavLink>{item.footer}</NavLink>
                            </div>
                            <hr />
                        </div>
                    ))
                }
            </div>
        </>
    )
};