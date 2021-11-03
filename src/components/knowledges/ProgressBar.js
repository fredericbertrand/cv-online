import React from 'react';


const ProgressBar = (props) => {
    console.log(props);
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'expérience</span>
                <span>1an</span>
                <span>3ans</span>
            </div>         
                <div>
                    {
                        props.values.map((item)=>{
                            let xpYears = 3;
                            let ProgressBar = item.xp / xpYears *100 +'%';
                            return (
                                <div key={item.id} className="LanguagesList">
                                    <li>{item.value}</li>
                                    <div className="progressBar" style={{width:ProgressBar}}></div>
                                    </div>
                            )
                        })  
                    }
                </div>
        </div>
    );
}

export default ProgressBar;