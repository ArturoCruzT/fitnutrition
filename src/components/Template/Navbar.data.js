import {FaWalking, FaNutritionix, FaAddressBook, FaBookOpen, FaLightbulb} from "react-icons/all";

/**
 * Estructura de Menu
 * keyLang: Key a cargar en el lang
 * icono: Debe ser importado de react icons
 * visible: condicion para mostrar
 * tipo: navLink | simple | dropdown
 * nlOptions: Propiedades de navlink (to/)
 * onClick: Sólo funciona para tipo simple
 */

export const ITEMS_IZQUIERDA = {
    menus: [
        {
            keyLang: 'navbar.quienesSomos',
            icono: FaWalking,
            visible: true,
            tipo: 'navlink',
            nlOptions: {to: '/quienesSomos'}
        },
        {
            keyLang: 'navbar.ideasNutritivas',
            icono: FaNutritionix,
            visible: true,
            tipo: 'navlink',
            nlOptions: {to: '/ideasNutritivas'}
        },
        {
            keyLang: 'navbar.nutriTips',
            icono: FaLightbulb,
            visible: true,
            tipo: 'navlink',
            nlOptions: {to: '/nutriTips'}
        }
    ]
};
export const ITEMS_DERECHA = {
    menus: [
        // {
        //     keyLang: 'navbar.catalogos',
        //     icono: FaBookOpen,
        //     visible: true,
        //     tipo: 'dropdown',
        //     navlinks: [
        //         {keyLang: 'navbar.producto', to: "/catalogos/generico/producto", icono: FaList},
        //         {keyLang: 'navbar.bodega', to: "/catalogos/generico/bodega", icono: FaList},
        //     ]
        // },
        {
            keyLang: 'navbar.contactanos',
            icono: FaAddressBook,
            visible: true,
            tipo: 'navlink',
            nlOptions: {to: '/contactanos'}
        }
    ]
};
