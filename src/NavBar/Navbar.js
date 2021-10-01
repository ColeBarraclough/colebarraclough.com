import { NavbarData } from "./NavbarData";
import { NavElement } from "./NavElement";
import './Navbar.css'

export const Navbar = ({indexSelected}) => {


    return(
        <nav className="navbar">
            <ul className="nav-links">
                {NavbarData.map((data) => {
                    return (
                        <li>                           
                            <NavElement key={data.key} {...data} isSelected={indexSelected == data.key}/>
                        </li>
                    )
                })}
            </ul>
            <div className='other-links-container'>
                <a className="social-link" href='https://github.com/ColeBarraclough'> 
                    <img className="social-img" src='GitHub-Mark.svg' alt='Github'></img> 
                </a>
                <a className="social-link" href='https://www.linkedin.com/in/cole-barraclough-7a4385208/'> 
                    <img className="social-img" src='linkedin-icon.svg' alt='Linkedin'></img> 
                </a>
                <a className="social-link" href='https://www.instagram.com/'> 
                    <img className="social-img" src="Insta.svg" alt="Insta"/>
                </a>
            </div>
        </nav>
    );
}