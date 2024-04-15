import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next) 
    .init({
        lng: 'fr', 
        resources: {
            fr: {
                translation: {
                    helloMessage: "Bonjour je me prénomme Joanny, passé 50 ans j'ai voulu découvrir le code. Si au départ c'était par culture générale, j'ai découvert une passion et je veux en faire mon métier. Oui, mon ambition est d'apprendre encore plus et devenir quelqu'un qui maîtrise.",
                    recherche: "Actuellement je recherche une entreprise qui peut m'accompagner au titre de Bachelor Concepteur Développeur d'Applications",
                    cv: "Coordonnées sur CV en bas ...",
                    title1: "Mon parcours",
                    text1: "J'ai commencé ma carrière en tant qu'électromécanicien dans l'aéronavale (8 ans). Une des plus belle expérience humaine",
                    text2: "Ensuite 20 ans dans le milieu industriel. J'ai découvert différents aspects dans ce métier. Il y a des méthodes qui me permettra de basculer d&apos;un monde à l'autre et cet aspect commercial. Car il faut bien vendre un savoir faire",
                    title2: "Ma formation DWWM",
                }
            },
            en: {
                translation: {
                    helloMessage: "Hello, my name is Joanny, after 50 I wanted to discover the code. If at first it was for general knowledge, I discovered a passion and I want to make it my job. Yes, my ambition is to learn even more and become someone who masters.",
                    recherche: "Currently I am looking for a company that can support me as a Bachelor Application Developer Designer",
                    cv: "Contact details on CV which can be downloaded from GitHUB at the bottom...",
                    title1: "My journey",
                    text1:"I started my career as an electromechanic in naval aviation (8 years). One of the most beautiful human experiences",
                    text2: "Then 20 years in the industrial sector. I discovered different aspects of this job. There are methods that will allow me to switch from one world to another and this commercial aspect. Because you have to sell know-how",
                    title2: "My DWWM training",
                } 
            }
        }
    });

export default i18n;
