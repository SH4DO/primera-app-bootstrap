import './footer.css';
import ItemFooter from '../ItemFooter/item-footer';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const socials = [
    {
        id: 1,
        text: "Facebook",
        icon: faFacebook,
        link: "https://www.facebook.com/jesus.dlcdpz"
    },{
        id: 2,
        text: "Instagram",
        icon: faInstagram,
        link: "#"
    },{
        id: 3,
        text: "LinkedIn",
        icon: faLinkedin,
        link: "#"
    }
];

function Footer (){
    return(

        <footer className="text-center text-light endPage">
                <div className='container-fluid'>
                    <ul className='nav nav-underline justify-content-center'>
                        {
                            socials.map(social =>(
                                <ItemFooter key={social.id} text={social.text} icon={social.icon} link={social.link} />
                            ))
                        }
                    </ul>
                    Hecho por el Chefcito anonimo. Todos los derechos reservados.
                </div>
        </footer>
    );
}

export default Footer;