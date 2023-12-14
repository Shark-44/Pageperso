import PropTypes from 'prop-types'
import "./Infoplant.css"
const info = [
    { Type: "Etoile",
      Dist: "0",
      Diametre: "110 fois la Terre",
      Masse: "333 000 fois la Terre",
      Gravite: "28 fois la Terre",
      Revo: "",
      Periode: "25 jours terrestre",
      Temp: "env. 5500 °C",
      sat: "8",
    },
    { Type: "Tellurique",
      Dist: "57 900 000 km",
      Diametre: "38% de la Terre",
      Masse: "5% de la Terre",
      Gravite: "38 % de la Terre",
      Revo: "88 jours",
      Periode: "59 jours terrestre",
      Temp: "De -180 à 430 °C",
      sat: "Aucun",
    },
    { Type: "Tellurique",
      Dist: "108 208 000 km",
      Diametre: "95% de la Terre",
      Masse: "82% de la Terre",
      Gravite: "90 % de la Terre",
      Revo: "224,7 jours",
      Periode: "243 jours terrestre",
      Temp: "Env. 460 °C",
      sat: "Aucun",
    },
    { Type: "Tellurique",
      Dist: "150 000 000 km",
      Diametre: "12 742 km",
      Masse: "5,97×10²² kg",
      Gravite: " 9,806 65 m/s2",
      Revo: "365,26 jours",
      Periode: "24h terrestre",
      Temp: "De -89,2 à 56,7 °C",
      sat: "1",
    },
    { Type: "Tellurique",
      Dist: "227 939 200 km",
      Diametre: "50% de la Terre",
      Masse: "10% de la Terre",
      Gravite: "38 % de la Terre",
      Revo: "687 jours",
      Periode: "24h40min terrestre",
      Temp: "De -140 à 30 °C",
      sat: "2",
    },
    { Type: "Gazeuse",
      Dist: "778 600 000 km",
      Diametre: "11 fois la Terre",
      Masse: "318 fois la Terre",
      Gravite: "2,36 fois la Terre",
      Revo: "11.8 années",
      Periode: "10h terrestre",
      Temp: "De -161 à -108 °C",
      sat: "79",
    },
    { Type: "Gazeuse",
      Dist: "1,43 milliard de km",
      Diametre: "9 fois la Terre",
      Masse: "95 fois la Terre",
      Gravite: "Semblable à la Terre",
      Revo: "29,5 années",
      Periode: "10h30min  terrestre",
      Temp: "De -189 à -139 °C",
      sat: "82",
    },
    { Type: "Gazeuse",
      Dist: "2,9 milliards de km",
      Diametre: "4 fois la Terre",
      Masse: "15 fois la Terre",
      Gravite: "90 % de la Terre",
      Revo: "84 années",
      Periode: "17h  terrestre",
      Temp: "De -226 à -197 °C",
      sat: "27",
    },
    { Type: "Gazeuse",
      Dist: "4,5 milliards de km",
      Diametre: "4 fois la Terre",
      Masse: "17 fois la Terre",
      Gravite: "1,14 fois la Terre",
      Revo: "165 années",
      Periode: "Entre 12 et 18 heures",
      Temp: "De -218 à -200 °C",
      sat: "14",
    },
    { Type: "Gazeuse",
      Dist: "2,9 milliards de km",
      Diametre: "4 fois la Terre",
      Masse: "15 fois la Terre",
      Gravite: "90 % de la Terre",
      Revo: "84 années",
      Periode: "17h  terrestre",
      Temp: "De -226 à -197 °C",
      sat: "27",
    }
    ]

function Infoplant({ infoIndex }) {
    if (infoIndex >= 0 && infoIndex < info.length) {
        const infopl = info[infoIndex];
    
        return (
          <div className="contenaireinfo">
            <div className="textinfo">
              <p className="textp">Type : {infopl.Type}</p>
              <p className="textp">Distance du soleil : {infopl.Dist}</p>
              <p className="textp">Diametre : {infopl.Diametre}</p>
              <p className="textp">Masse : {infopl.Gravite}</p>
              <p className="textp">Revolution autour du soleil : {infopl.Revo}</p>
              <p className="textp">Période : {infopl.Periode}</p>
              <p className="textp">Température : {infopl.Temp}</p>
              <p className="textp">Satéllite : {infopl.sat}</p>
            </div>
          </div>
        );
      } else {
      
        return <p>Attente de donnée</p>;
      }
    }
Infoplant.propTypes = {
    infoIndex: PropTypes.number.isRequired,
}

export default Infoplant