import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>📊 Projects I've Done</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Capstone-C242-PS225/Cloud-Computing" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Capstone-C242-PS225/Cloud-Computing" target="_blank" rel="noreferrer"><h2>FREE APPS (API)</h2></a>
                <p>This API is designed to help individuals recovering from gambling addiction by providing account management, addiction level prediction, and gambling site reporting</p>
            </div>
            <div className="project">
                <a href="https://github.com/AdonNeet/LocalDB" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AdonNeet/LocalDB" target="_blank" rel="noreferrer"><h2>LocalDB: Lightweight IndexedDB Wrapper with SQL-Like Queries</h2></a>
                <p>LocalDB is a minimalist and efficient framework designed to simplify the use of IndexedDB in web projects. It provides a SQL-like experience, making it easier for developers to interact with IndexedDB without dealing with its complex API.</p>
            </div>
            <div className="project">
                <a href="https://adonneet.github.io/Kalkulator-Konversi-Suhu/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://adonneet.github.io/Kalkulator-Konversi-Suhu/" target="_blank" rel="noreferrer"><h2>Web-Based Temperature Conversion Calculator</h2></a>
                <p>The Temperature Conversion Calculator is a simple web application that allows users to convert temperatures between the three most commonly used units: Celsius, Kelvin, and Fahrenheit. Designed for ease of use, this tool eliminates the need for complex mathematical formulas by providing instant conversions along with detailed explanations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/AdonNeet/MorseCipherGUI" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/AdonNeet/MorseCipherGUI" target="_blank" rel="noreferrer"><h2>MorseCipher: Morse Code Encoder-Decoder with GUI (Java)</h2></a>
                <p>This application is a Morse code encoder-decoder implemented with a Graphical User Interface (GUI) in Java. It allows users to effortlessly convert text to Morse code and decode Morse code back into text through an intuitive interface.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;