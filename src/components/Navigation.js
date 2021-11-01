import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialNetwork from './SocialNetwork';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/guy.png" alt="photo-cv" />
                    <h3>Hugo BERTRAND</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                    <NavLink exact to="/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/competences" activeClassName="navActive">
                        <i className="fas fa-graduation-cap"></i>
                        <span>Competences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/contact" activeClassName="navActive">
                        <i className="fas fa-address-card"></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/portfolio" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Portfolio</span>
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <SocialNetwork />
            </div>
            <div className="signature">
                <p><i className="fas fa-copyright"></i>Hugo BERTRAND - 2021</p>
            </div>
        </div>
    );
};

export default Navigation;