import { useEffect, useState } from "react";
import './tarjetas-episode.css';

function TarjetasEpisode (props) {

    const [character, setCharacter] = useState(null);
    
    useEffect(function getCharacter (){
        fetch(props.link)
        .then(response => response.json())
        .then(data => setCharacter(data));
    },[character]);

    if(!character) return null;
    return(
        <div className="text-light bg-dark align-items-center">
            <img src={character.image} alt="foto" className="img-fluid rounded-pill cardPersonaje" />       
                <h5 className="card-title mt-2">{character.name}</h5>           
        </div>
    )
}

export default TarjetasEpisode ;