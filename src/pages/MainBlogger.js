import { HeaderCard, MainBloggerCard } from "../layouts/Layouts";

export function MainBlogger() {
    return (
        <>
            <div className="mainBlogger">
                {/* SECTION 1 */}
                <HeaderCard title="Blogger" about="Tutte le blogger di Abilmente" />

                {/* SECTION 2 */}
                <div className="mainBloggerSection2">
                    <MainBloggerCard />
                </div>
            </div>
        </>
    )
};