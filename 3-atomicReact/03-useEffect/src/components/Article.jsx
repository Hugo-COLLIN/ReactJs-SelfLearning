import { useEffect, useState } from "react";

const convertSecondsToHMS = (timeInSeconds) => {
    timeInSeconds = Number(timeInSeconds);
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds % 3600 / 60);
    const seconds = Math.floor(timeInSeconds % 3600 % 60);

    const hDisplay = hours < 10 ? `0${hours}` : hours;
    const mDisplay = minutes < 10 ? `0${minutes}` : minutes;
    const sDisplay = seconds < 10 ? `0${seconds}` : seconds;
    
    return `${hDisplay}h ${mDisplay}m ${sDisplay}s`;
}

function Article({title = '', children = null}) {
    const [elapsedTime, setElapsedTime] = useState(0);

    // useEffect s'exécute TOUJOURS au montage du composant
    // ET AUSSI à chaque MAJ du composant
    // useEffect(() => {
    //     console.log('ARTICLE MOUNTED');

    //     setInterval(() => {
    //         setElapsedTime(e => e + 1) // or, ici, setElapsedTime remet à jour le state, ce qui réexécute cette ligne indéfiniment (boucle infinie d'actualisation du state)
    //         // => comportement incohérent et utilise de + en + de mémoire
    //     }, 1000)
    // });

    // s'exécute UNIQUEMENT au montage du composant => ignore les maj du state
    useEffect(() => {
        console.log('ARTICLE MOUNTED');

        setInterval(() => {
            console.log("INTERVAL");
            setElapsedTime(e => e + 1)
        }, 1000);
    }, []); //Tableau de dépendances

    return (
        <div>
            <h1>{title}</h1>
            <p>Temps écoulé: {convertSecondsToHMS(elapsedTime)}</p>
            <p>{children}</p>
        </div>
    )
}

export default Article;