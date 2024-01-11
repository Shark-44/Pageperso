import { useTranslation } from 'react-i18next';
import "./LanguageSwitcher.css"

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="switchtrans">
            <button onClick={() => changeLanguage('fr')}>Français</button>
            <button onClick={() => changeLanguage('en')}>English</button>
        </div>
    );
};

export default LanguageSwitcher;