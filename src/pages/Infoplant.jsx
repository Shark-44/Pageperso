import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
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
    { Type: "Tellurique",
      Dist: "5,913 milliards  de km",
      Diametre: "49 fois moins que la Terre",
      Masse: "166 fois moins que la Terre",
      Gravite: "16 % de la Terre",
      Revo: "248 années",
      Periode: "6,4 jours terrestre",
      Temp: "-230 °C",
      sat: "1",
    }
    ]

function Infoplant({ infoIndex, setInfoIndex }) {
    const [displayInfo, setDisplayInfo] = useState(null)
    useEffect(() => {
        if (infoIndex >= 0 && infoIndex < info.length) {
          setDisplayInfo(info[infoIndex]);
        }
      }, [infoIndex])
      useEffect(() => {
        const timer = setTimeout(() => {
          setDisplayInfo(null); 
          setInfoIndex(null);
        }, 7000);
    
        return () => clearTimeout(timer); 
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [displayInfo])
    
        return (
         <div className="contenaireinfo">
            {displayInfo ? (
                <div className="textinfo">
                    <p className="textp">Type : {displayInfo.Type}</p>
                    <p className="textp">Distance du soleil : {displayInfo.Dist}</p>
                    <p className="textp">Diametre : {displayInfo.Diametre}</p>
                    <p className="textp">Masse : {displayInfo.Gravite}</p>
                    <p className="textp">Revolution autour du soleil : {displayInfo.Revo}</p>
                    <p className="textp">Période : {displayInfo.Periode}</p>
                    <p className="textp">Température : {displayInfo.Temp}</p>
                    <p className="textp">Satéllite : {displayInfo.sat}</p>
                </div>
            ) : (
                <p className="textp"> Attente de d&apos;informations...</p>
            )}
        </div>
        );
    }
Infoplant.propTypes = {
    infoIndex: PropTypes.number.isRequired,
    setInfoIndex: PropTypes.func.isRequired,
}

export default Infoplant