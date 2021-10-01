import './NavElement.css'
import {useState} from 'react'

export const NavElement = ({text, link, isSelected}) => {
    return(
            <a href={link}>
                <div className={isSelected ? "nav-link-active": "nav-link"} >
                    {text}
                </div>
            </a>
        
    );
}