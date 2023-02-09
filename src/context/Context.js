import React from "react";

export const ContextData = React.createContext();

function ContextFunc({ children }) {

    const homeHeaderCardContext = [
        {
            id: 'homeHeaderCard1', img: './img/Rectangle 203.png', title: 'Lorem ipsum', about: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 'homeHeaderCard2', img: './img/Rectangle 204.png', title: 'Lorem ipsum', about: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 'homeHeaderCard3', img: './img/Rectangle 205.png', title: 'Lorem ipsum', about: 'Lorem ipsum dolor sit amet'
        }
    ];

    const hs2mwbContext = [
        {
            id: 'hs2mwCard1', img: './img/Vector.png', about: 'Cucito & Filato'
        },
        {
            id: 'hs2mwCard2', img: './img/Vector1.png', about: 'Carta, Scrap & Colore'
        },
        {
            id: 'hs2mwCard3', img: './img/Group 98.png', about: 'Decorazione'
        },
        {
            id: 'hs2mwCard4', img: './img/Frame 8.png', about: 'Ricamo & Tradizione'
        },
        {
            id: 'hs2mwCard5', img: './img/Group 97.png', about: 'Bijoux & Accessori'
        }
    ];

    const hs3mbContext = [
        {
            id: 'hs3mbCard1', img: './img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc1.png', title: 'Durata', about: 'Lorem ipsum dolor sit, consectetur adipisci', btn: 'Guarda'
        },
        {
            id: 'hs3mbCard2', img: './img/hs3mbcImage2.png', title: 'Durata', about: 'Lorem ipsum dolor sit, consectetur adipisci', btn: 'Guarda'
        },
        {
            id: 'hs3mbCard3', img: './img/young-woman-repainting-furniture-with-diy-2021-08-28-11-04-49-utc2.png', title: 'Durata', about: 'Lorem ipsum dolor sit, consectetur adipisci', btn: 'Guarda'
        }
    ];

    const mainBloggerContext = [
        {
            id: 'mainBloggerCard1', img: './img/mainBloggerImg.png', title: 'Mondo', name: 'Nome Cognome', link: '@nomecognome', about: 'Mi dedico al ricamo contemporaneo e alla pittura con filo.', btn: 'Guarda'
        },
        {
            id: 'mainBloggerCard1', img: './img/mainBloggerImg.png', title: 'Mondo', name: 'Nome Cognome', link: '@nomecognome', about: 'Mi dedico al ricamo contemporaneo e alla pittura con filo.', btn: 'Guarda'
        },
        {
            id: 'mainBloggerCard1', img: './img/mainBloggerImg.png', title: 'Mondo', name: 'Nome Cognome', link: '@nomecognome', about: 'Mi dedico al ricamo contemporaneo e alla pittura con filo.', btn: 'Guarda'
        },
        {
            id: 'mainBloggerCard1', img: './img/mainBloggerImg.png', title: 'Mondo', name: 'Nome Cognome', link: '@nomecognome', about: 'Mi dedico al ricamo contemporaneo e alla pittura con filo.', btn: 'Guarda'
        },
        {
            id: 'mainBloggerCard1', img: './img/mainBloggerImg.png', title: 'Mondo', name: 'Nome Cognome', link: '@nomecognome', about: 'Mi dedico al ricamo contemporaneo e alla pittura con filo.', btn: 'Guarda'
        },
        {
            id: 'mainBloggerCard1', img: './img/mainBloggerImg.png', title: 'Mondo', name: 'Nome Cognome', link: '@nomecognome', about: 'Mi dedico al ricamo contemporaneo e alla pittura con filo.', btn: 'Guarda'
        },
        {
            id: 'mainBloggerCard1', img: './img/mainBloggerImg.png', title: 'Mondo', name: 'Nome Cognome', link: '@nomecognome', about: 'Mi dedico al ricamo contemporaneo e alla pittura con filo.', btn: 'Guarda'
        },
        {
            id: 'mainBloggerCard1', img: './img/mainBloggerImg.png', title: 'Mondo', name: 'Nome Cognome', link: '@nomecognome', about: 'Mi dedico al ricamo contemporaneo e alla pittura con filo.', btn: 'Guarda'
        },
    ];

    const corsinnerContext = [
        {id: 'corsinner1', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner2', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner3', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner4', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner5', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner6', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner7', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner8', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner9', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner10', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner11', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
        {id: 'corsinner12', title: 'Nome del negozio', about: 'Breve descrizione dello shop: lorem ipsum...', link: 'sitoweb.com', footer: 'Cucito & Filato, Decorazioni'},
    ]

    return (
        <ContextData.Provider value={{ homeHeaderCardContext, hs2mwbContext, hs3mbContext, mainBloggerContext, corsinnerContext }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextFunc;