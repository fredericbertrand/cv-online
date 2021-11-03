import React, { Component } from 'react';
import ProgressBar from './ProgressBar';


class Languages extends Component {
    state={
        languages: [
            {id: 1, value:"Python", xp:3},
            {id: 2, value:"Java", xp:3},
            {id: 3, value:"HTML/CSS", xp:3},
            {id: 4, value:"PHP", xp:1.3},
            {id: 5, value:"JavaScript", xp:2.3}
        ],
        frameworks: [
            {id: 1, value:"Flask", xp:1.8},
            {id: 2, value:"Django", xp: 2.3},
            {id: 3, value:"NodeJS/VueJS", xp:1},
            {id: 4, value:"ReactJS", xp:1}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    values={languages}
                    className="languagesDisplay"
                    title="langages"
                />
                <ProgressBar
                    values={frameworks}
                    className="frameworksDisplay"
                    title="frameworks"
                />
            </div>
        );
    }
}

export default Languages;