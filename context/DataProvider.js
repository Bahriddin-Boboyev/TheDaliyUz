"use client"
import React, {createContext, useContext, useState} from 'react';
import { heroMain, hero1, hero2, hero3 } from '@/assets';
import { uz } from "@/language";
export const Context = createContext(null)

const DataProvider = ({children}) => {
    const [language, setLanguage] = useState(uz);
     const mockData = [{
             title: "Inflyatsiya eng past darajadagi davlatlar",
             text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             imgURL: heroMain,
             addedTime: "Yan. 25",
             spendTime: "9min",
             viewers: "1k",
             type: "Jahon",
         },
         {
             title: " AQSH'dagi eng yirik banklardan biri Silicon Valley bankrot boʻldi ",
             imgURL: hero1, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Dek. 25",
             spendTime: "3min",
             viewers: "1k",
             type: "Biznes",
         },
         {
             title: "O‘zbekistonda yosh oilalar daromadining asosiy qismini qarz to‘lashga sarflamoqda ",
             imgURL: hero2, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Noy. 5",
             spendTime: "8min",
             viewers: "1k",
             type: "Mahalliy",
         },
         {
             title: "Bloomberg Osiyoning ayni paytdagi 20 ta eng boy oilasi reytingini taqdim qildi ",
             imgURL: hero3, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Noy. 5",
             spendTime: "5min",
             viewers: "1k",
             type: "Jahon",
         },
         {
             title: " AQSH'dagi eng yirik banklardan biri Silicon Valley bankrot boʻldi ",
             imgURL: hero1, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Dek. 25",
             spendTime: "3min",
             viewers: "1k",
             type: "Biznes",
         },
         {
             title: "O‘zbekistonda yosh oilalar daromadining asosiy qismini qarz to‘lashga sarflamoqda ",
             imgURL: hero2, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Noy. 5",
             spendTime: "8min",
             viewers: "1k",
             type: "Mahalliy",
         },
         {
             title: "Bloomberg Osiyoning ayni paytdagi 20 ta eng boy oilasi reytingini taqdim qildi ",
             imgURL: hero3, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Noy. 5",
             spendTime: "5min",
             viewers: "1k",
             type: "Jahon",
         },
         {
             title: "Inflyatsiya eng past darajadagi davlatlar",
             imgURL: heroMain, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Yan. 25",
             spendTime: "9min",
             viewers: "1k",
             type: "Jahon",
         },
         {
             title: " AQSH'dagi eng yirik banklardan biri Silicon Valley bankrot boʻldi ",
             imgURL: hero1, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Dek. 25",
             spendTime: "3min",
             viewers: "1k",
             type: "Biznes",
         },
         {
             title: "O‘zbekistonda yosh oilalar daromadining asosiy qismini qarz to‘lashga sarflamoqda ",
             imgURL: hero2, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Noy. 5",
             spendTime: "8min",
             viewers: "1k",
             type: "Mahalliy",
         },
         {
             title: "Bloomberg Osiyoning ayni paytdagi 20 ta eng boy oilasi reytingini taqdim qildi ",
             imgURL: hero3, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Noy. 5",
             spendTime: "5min",
             viewers: "1k",
             type: "Jahon",
         },
         {
             title: " AQSH'dagi eng yirik banklardan biri Silicon Valley bankrot boʻldi ",
             imgURL: hero1, text: "Rossiyaning ko'plab kompaniyalari uchun 2022-yil yangi xorijiy sanktsiyalar fonida juda qiyin bo'ldi. VTB Rossiya banklaridan eng ko'p zarar koʻrdi taxminan $7,83 mlrd.",
             addedTime: "Dek. 25",
             spendTime: "3min",
             viewers: "1k",
             type: "Biznes",
         },
     ];

    const paginationArr = [{
            name: "Yangiliklar",
            href: "/",
            active: true,
        },
        {
            name: "Sport",
            href: "/sport",
            active: false,
        },
        {
            name: "Biznes",
            href: "/biznes",
            active: false,
        },
        {
            name: "Texnologiya",
            active: false,
            href: "/texnologiya",
        },
        {
            name: "Sayohat",
            active: false,
            href: "/sayohat",
        },
        {
            name: "Mahalliy",
            active: false,
            href: "/mahalliy",
        },
        {
            name: "Jahon",
            active: false,
            href: "/jahon",
        },
    ];

    const value = {
        language,
        setLanguage,
        paginationArr,
        mockData
    }

    return ( <Context.Provider value = {value}>
                <Context.Consumer> 
                  {
                    () => children
                  } 
                </Context.Consumer> 
            </Context.Provider>
    )
}

const useServices = (setterOnly) => {
    const {
        services,
        setServices
    } = useContext(Context)
    return setterOnly ? [setServices] : [services, setServices]
}

export {
    useServices,
}

export default DataProvider;