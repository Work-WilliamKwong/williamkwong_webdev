import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

class Buttons extends React.Component {
    render() {
        return (
            <div class="text-center">
                <Router>
                    <div class="btn-group" role="group" aria-label="">
                        <a class="btn btn-outline-primary" href="https://drive.google.com/uc?export=download&id=1bsw19G31J2ZvSHAMPRJxUpdpJdGM6vUh" role="button">Download Resume</a>
                        <a class="btn btn-outline-primary" href="https://www.linkedin.com/in/w5kwong/" role="button">Linkedin</a>
                        <a class="btn btn-outline-primary" href="https://github.com/Work-WilliamKwong" role="button">Github</a>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Buttons;