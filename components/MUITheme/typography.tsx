//Global styling for typhography
type TypographyOption = {
    [element: string]: {
        fontFamily: string,
        fontStyle?: string,
        fontWeight?: string,
        lineHeight: string,
        fontSize: string,
        lineSpacing?: string,
        textTransform?: string,
        letterSpacing?:string,
        transition?: string,
        "@media (max-width: 1439px)" ?: {
            fontSize: string,
            lineHeight: string,
        },
        "@media (max-width: 900px)" ?: {
            fontSize: string,
            lineHeight: string,
            lineSpacing?:string
        },
    }
}

const typography:TypographyOption = {
    button:{
        fontFamily: 'Syne',
        fontWeight: '700',
        lineHeight: 'auto',
        fontSize: '12px',
        lineSpacing: '20%',
        letterSpacing: '0.2em',
        "@media (max-width: 900px)": {
            fontSize: '12px',
            lineHeight: '14px',
            lineSpacing:'0'
        }, //media query for mobile
    },
    h1:{
        fontFamily: 'Syne',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "84px",
        lineHeight: "76px",
        textTransform: "uppercase",
        transition: "all 0.3s ease-in-out",
        "@media (max-width: 1439px)": {
            fontSize: '70px',
            lineHeight: '66px',
        }, //media query
        "@media (max-width: 900px)": {
            fontSize: '36px',
            lineHeight: '36px',
            lineSpacing:'0'
        }, //media query for mobile
    },
    h2:{
        fontFamily: 'Syne',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "64px",
        lineHeight: "64px",
        textTransform: "uppercase",
        transition: "all 0.3s ease-in-out",
        "@media (max-width: 1439px)": {
            fontSize: '40px',
            lineHeight: '36px',
        }, //media query
        "@media (max-width: 900px)": {
            fontSize: '24px',
            lineHeight: '24px',
            lineSpacing:'0'
        }, //media query for mobile
    },
    h3:{
        fontFamily: 'Syne',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "32px",
        lineHeight: "32px",
        textTransform: "uppercase",
        transition: "all 0.3s ease-in-out",
        "@media (max-width: 1439px)": {
            fontSize: '20px',
            lineHeight: '18px',
        }, //media query
        "@media (max-width: 900px)": {
            fontSize: '18px',
            lineHeight: '18px',
            lineSpacing:'0'
        }, //media query for mobile
    },
    subtitle2:{
        fontFamily: 'Syne',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "28px",
        transition: "all 0.3s ease-in-out",
        "@media (max-width: 1439px)": {
            fontSize: '18px',
            lineHeight: '20px',
        }, //media query
        "@media (max-width: 900px)": {
            fontSize: '16px',
            lineHeight: '20px',
            lineSpacing:'0'
        }, //media query for mobile
    },
    body1:{
        fontFamily: 'Archivo',
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        lineHeight: "24px",
        transition: "all 0.3s ease-in-out",
        "@media (max-width: 1439px)": {
            fontSize: '16px',
            lineHeight: '22px',
        }, //media query
        "@media (max-width: 900px)": {
            fontSize: '14px',
            lineHeight: '22px',
            lineSpacing:'0'
        }, //media query for mobile
    }
    ,
    subtitle1:{
        fontFamily: 'Oxygen Mono',
        fontSize: '12px',
        lineHeight: '14px',
        lineSpacing: '10%',
        textTransform:'uppercase',
        letterSpacing:'0.1em',
        transition: "all 0.3s ease-in-out",
    }
}

export default typography