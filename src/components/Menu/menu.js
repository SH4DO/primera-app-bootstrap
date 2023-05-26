import MenuItem from "../MenuItem/menu-item";
import	'./menu.css';
import LOGO from '../../assets/logo192.png';
import { faHouse, faUserGroup, faEarthAmericas, faClapperboard } from '@fortawesome/free-solid-svg-icons';

const menus = [
  {
    id: 1,
    text: "Home",
    link: "/",
    icon: faHouse
  },{
    id: 2,
    text: "Personajes",
    link: "/personajes",
    icon: faUserGroup
  },{
    id: 3,
    text: "Episodios",
    link: "/episodios",
    icon: faClapperboard
  },{
    id: 4,
    text: "Mundos",
    link: "/mundos",
    icon: faEarthAmericas
  }
];

function Menu(){
    return(
      <header >
        <nav className="navbar navbar-expand-lg menuPrincipal" data-bs-theme="dark">
          <div className="container-fluid">
            <img src={LOGO} alt="logo" width={30} height={24} className="d-inline block align-text-top"/>
            <span className="navbar-brand mb-0 h1 text-light">Shadito Web</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {
                  menus.map(menu =>(
                    <MenuItem key={menu.id} text={menu.text} link={menu.link} icon={menu.icon}/>
                  ))
                }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Menu;


