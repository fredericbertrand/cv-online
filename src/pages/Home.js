import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
        <div className="homeContent">
            <div className="content">
                <h1>Hugo BERTRAND</h1>
                <h2>Développeur Web</h2>
                <div className="pdf">
                    <a href="./media/CV_Hugo_BERTRAND.pdf" target="blank">Télécharger mon CV</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;