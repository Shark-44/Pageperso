import "./Accueil.css";
import Navbar from "../components/Navbar";
import logoreact from "../assets/react-logo.jpg"
import logoWild from "../assets/wild logo.png"
import logoHTML from "../assets/HTML_CSS.png"
import logoNode from "../assets/Node.jpg"
import logoJava from "../assets/Javascript.png"
import Accelerator from "../components/Accelerator";

function Accueil() {
    return (
        <>
        <Navbar />
        <div className="contenairAccueil">
            <p>
                Bonjour je me prénomme Joanny, passé 50 ans j&apos;ai voulu découvrir le code. Si au départ c&apos;était par culture générale, j&apos;ai découvert une passion et je veux en faire mon métier. Oui, mon ambition est d&apos;apprendre encore plus et devenir quelqu&apos;un qui maîtrise.
            </p>
            <p>Actuellement je recherche une entreprise qui voudra m&apos;accompagner au titre de Bachelor Concepteur Développeur d&apos;Applications</p>
        <div className="parcours">
        <h2>Mon parcours</h2>
        <p> J&apos;ai commencé ma carrière en tant qu&apos;électromécanicien dans l&apos;aéronavale (8 ans). Une des plus belle expérience humaine</p>
        <p>Ensuite 20 ans dans le milieu industriel. J&apos;y ai découvert différents aspects dans ce métier. Il y a des méthodes qui me permettra de basculer d&apos;un monde à l&apos;autre et cet aspect commercial. Car il faut bien vendre un savoir faire</p>
        </div>
        <div className="bootcamp">
        <h2>Ma formation DWWM</h2>
            <div className="blockbootcamp">
                <img src={logoWild} alt="Wild Code School" />
                 <p>Bootcamp du mai 2023 à octobre 2023</p>
            </div>
        </div>
        <div className="lestechno">
            <img src={logoHTML} alt="HTML CSS" />
            <img src={logoJava} alt="Javascript" />
            <img src={logoreact} alt="React" />
            <img src={logoNode} alt="Node.js" />
        </div>
        
        </div>
        <Accelerator />
        </>
    );
}

export default Accueil;
