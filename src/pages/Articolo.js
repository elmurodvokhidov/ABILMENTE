import { NavLink } from "react-router-dom";
import { SimCard } from "../layouts/Layouts";

export function Articolo() {
    return (
        <>
            <div className="articolo">

                {/* SECTION 1 */}
                <div className="articoloSection1">
                    <div className="aS1_img">
                        <img src="./img/articoloheader.png" alt="articoloheader.png" />
                    </div>
                </div>

                {/* SECTION 2 */}
                <div className="articoloSection2">
                    <div className="aS2_left">
                        <img src="./img/close-up-portrait-pretty-smiling-girl_171337-11418 1.png" alt="close-up-portrait-pretty-smiling-girl_171337-11418 1.png" />
                        <p>News</p>
                        <p>by <span className="orange"><NavLink to="/blogger">Angelica Foschi</NavLink></span></p>
                    </div>

                    <div className="aS2_center">
                        <div className="aS2c_header">
                            <div className="aS2ch_top">
                                <div className="aS2cht_left">
                                    <p className="orange">TAG 1,</p>
                                    <p className="orange">TAG 2,</p>
                                    <p className="orange">TAG 3</p>
                                </div>
                                <div className="aS2cht_right">
                                    <p>15 Novembre 2021</p>
                                </div>
                            </div>
                            <h1>Lorem ipsum dolor sit amet, consectetur adipisci elit</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h3>
                        </div>

                        <div className="aS2c_main">
                            <p className="simParag">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                            <div className="aS2cm_image"><img src="./img/articolovector3.png" alt="articolovector3.png" /></div>
                            <i>Dida: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto</i>
                        </div>

                        <div className="aS2c_footer">
                            <p className="simParag">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        </div>
                    </div>

                    <div className="aS2_right">
                        <div className="aS2r_top">
                            <h2>altri articoli di angelica</h2>
                        </div>
                        <div className="aS2r_bottom">
                            <div className="aS2rb_wrapper">
                                <div className="aS2rb_card">
                                    <div className="aS2rbc_image"><img src="./img/articolovector.png" alt="articolovector.png" /></div>
                                    <div className="aS2rbc_content">
                                        <p className="orange">Lorem ipsum</p>
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <button className="hs1b_btn">Partecipa</button>
                                    </div>
                                </div>

                                <div className="aS2rb_card">
                                    <div className="aS2rbc_image"><img src="./img/articolovector1.png" alt="articolovector1.png" /></div>
                                    <div className="aS2rbc_content">
                                        <p className="orange">Lorem ipsum</p>
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <button className="hs1b_btn">Partecipa</button>
                                    </div>
                                </div>

                                <div className="aS2rb_card">
                                    <div className="aS2rbc_image"><img src="./img/articolovector2.png" alt="articolovector2.png" /></div>
                                    <div className="aS2rbc_content">
                                        <p className="orange">Lorem ipsum</p>
                                        <h2>Lorem ipsum dolor sit amet</h2>
                                        <button className="hs1b_btn">Partecipa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3 */}
            <SimCard title={"Articoli correlati"} idd={"simCardC"}
                img1={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc7.png"}
                img2={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc8.png"}
                img3={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc9.png"}
                img4={"./img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc11.png"}
            />
        </>
    )
}