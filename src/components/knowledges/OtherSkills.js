import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres Compétences</h3>
            <div className="list">
            <ul>
                <li className="skill">
                    <i className="fas fa-code-branch">
                        <span>Git</span>
                    </i>
                </li>
                <li className="skill">
                    <i className="fas fa-language">
                    <span>Anglais - Courant</span>
                    </i>
                </li>
                <li className="skill">
                    <i className="fas fa-project-diagram">
                    <span>Gestion de projet</span>
                    </i>
                </li>
                <li className="skill">
                    <i className="fas fa-gavel">
                    <span>Droit Informatique</span>
                    </i>
                    
                </li>
            </ul>
            <ul>
                <li className="skill">
                    <i className="fas fa-code">
                    <span>CMS</span>
                    </i>
                </li>
                <li className="skill">
                    <i className="fas fa-box-open">
                    <span>Pack Office</span>
                    </i>
                </li>
                <li className="skill">
                    <i className="fas fa-lock">
                    <span>Sécurité Informatique</span>
                    </i>
                </li>
                <li className="skill"> 
                    <i className="fas fa-server">
                    <span>Réseau</span>
                    </i>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default OtherSkills;