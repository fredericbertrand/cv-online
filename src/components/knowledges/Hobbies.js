import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Sport</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    <span>Jeux-Video</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-motorcycle"></i>
                    <span>Sport Mécanique</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-code"></i>
                    <span>Informatique</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;