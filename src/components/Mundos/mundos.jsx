import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Mundos (){
    return (
        <div className="container text-center">
            <h1 className="fw-bold">MUNDOS</h1> <br/>
            <span className="fs-1 fw-bold"><FontAwesomeIcon icon={faPersonDigging}/></span>
            <h3>En desarrollo, posiblemente pa la version 2.0 carnal :3</h3>
        </div>
    );
}

export default Mundos;