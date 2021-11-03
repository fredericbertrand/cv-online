import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Désolé mais cette page n'existe pas ...</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home">
                        <span>Retour à l'Accueil</span>
                    </i>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;