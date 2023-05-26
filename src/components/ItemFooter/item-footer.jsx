import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ItemFooter (props){
    return(
        <li className='nav-item'>
            <Link className="nav-link text-light" to={props.link} target="_blank">
                {<span className="fs-3"><FontAwesomeIcon icon={props.icon}/>  
                </span>}</Link> 
        </li>
    );
}



export default ItemFooter;