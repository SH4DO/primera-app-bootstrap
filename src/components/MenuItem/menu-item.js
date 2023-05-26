import {Link} from 'react-router-dom';
import './menu-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuItem (props){
    return(
        <li className="nav-item">
            <Link className="nav-link active menu fw-semibold text-center" to={props.link}>
                <FontAwesomeIcon icon={props.icon}/><span className='pe-2'>{props.text}</span>
            </Link>
        </li>
    );
}

export default MenuItem;