import "./Accueil.css";
import { useTranslation } from 'react-i18next'
import { useEffect } from "react"
import Navbar from "../components/Navbar"
import LanguageSwitcher from '../components/LanguageSwitcher'
import Footer from "../components/Footer"
import logoreact from "../assets/react-logo.jpg"
import logoWild from "../assets/wild logo.png"
import logoHTML from "../assets/HTML_CSS.png"
import logoNode from "../assets/Node.jpg"
import logoJava from "../assets/Javascript.png"


function Accueil() {
    const { t, i18n } = useTranslation();
    useEffect(() => {
       
        const userLanguage = navigator.language || navigator.userLanguage;

        if (i18n.language !== userLanguage) {
            i18n.changeLanguage(userLanguage);
        }
    }, [i18n]);
    return (
        <>
        <Navbar />
        <div className="contenairAccueil">
        <LanguageSwitcher />
            <p>{t('helloMessage')}</p>
            <p>{t('recherche')}</p>
            <h5>{t('cv')}</h5>
        <div className="parcours">
        <h2>{t('title1')}</h2>
        <p>{t('text1')}</p>
        <p>{t('text2')}</p>
        </div>
        <div className="bootcamp">
        <h2>{t('title2')}</h2>
            <div className="blockbootcamp">
                <img src={logoWild} alt="Wild Code School" />
                 <p>Bootcamp de mai 2023 à octobre 2023</p>
            </div>
        </div>
        <div className="lestechno">
            <img src={logoHTML} alt="HTML CSS" />
            <img src={logoJava} alt="Javascript" />
            <img src={logoreact} alt="React" />
            <img src={logoNode} alt="Node.js" />
        </div>
        <Footer />
        </div>
       
        </>
    );
}

export default Accueil;
