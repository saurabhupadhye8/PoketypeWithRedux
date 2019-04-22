import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../index.css'

const Navbar = (props) => {

    //console.log(props);
    /* setTimeout(() => {
        props.history.push('/About');
    }, 2000); */

    return(
        <nav className = 'nav-wrapper blue darken-3'>
            <div className = 'container'>
                <a href = 'https://google.co.in' className = 'brand-logo'>Poke'Times</a>
                    <ul className = 'right'>
                        <li><NavLink exact to = '/'>Home</NavLink></li>
                        <li><NavLink to = '/About'>About</NavLink></li>
                        <li><NavLink to = '/Contact'>Contact</NavLink></li>
                    </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);