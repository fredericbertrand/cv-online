import React from 'react';

const SocialNetwork = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/hugo-bertrand-68237319a/" target=" blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://facebook.com" target=" blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com" target=" blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://github.com/Hobertrand" target=" blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </li>
            </ul>
            <div className="signature">
                <i className="fas fa-copyright"> Hugo Bertrand - 2021</i>
            </div>
        </div>
    );
};

export default SocialNetwork;