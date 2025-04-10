import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "JavaScript",
    "Hapi.JS",
    "NoSQL",
    "SQL",
    "Postman",
    "Newman"
];

const labelsSecond = [
    "Git",
    "Cloud Computing",
    "Cloud Engineering",
    "Google Cloud",
    "Linux",
];

const labelsThird = [
    "Docker",
    "Container",
    "Whale Charmer",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>🖥️ Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faNode} size="3x"/>
                    <h3>Back-End Development</h3>
                    <p>
                        I specialize in Back-End Development, focusing on building robust, scalable, and efficient server-side applications. I primarily work with JavaScript (Node.js) to develop and integrate APIs with various databases, including SQL and NoSQL. My focus is on creating efficient, scalable, and maintainable back-end systems that support dynamic applications.
                    </p>
                    <p>
                        I have experience in designing RESTful APIs, handling database interactions, and optimizing performance. While authentication and authorization are not my strongest areas, I continuously improve my skills to build secure and reliable back-end solutions. My goal is to refine my expertise and develop high-performing, scalable architectures for modern web and mobile applications. 
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Cloud Engineering</h3>
                    <p>
                        I specialize in Cloud Engineering, focusing on designing, deploying, and optimizing cloud-based solutions. Through the Bangkit Academy 2024 Cloud Computing Cohort, supported by Google, Tokopedia, Gojek, and Traveloka, I have gained hands-on experience in cloud infrastructure, networking, security, and DevOps practices.
                    </p>
                    <p>
                        By working on real-world projects, I have developed expertise in scalable architectures, containerization (Docker), a little CI/CD pipelines, and cloud security best practices. My goal is to obtain industry-recognized cloud certifications and leverage my skills to build high-performance, resilient, and cost-efficient cloud solutions that drive innovation and efficiency. 🚀☁️
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBoxesStacked} size="3x"/>
                    <h3>Containerization</h3>
                    <p>
                        I specialize in Containerization, primarily using Docker to create lightweight, portable, and efficient containers for back-end applications. My focus is on building optimized container images, managing multi-container environments with Docker Compose, and ensuring smooth deployment in local and cloud environments.
                    </p>
                    <p>
                    While I’m not deeply experienced with Kubernetes, I have a strong understanding of container fundamentals, basic networking, and resource optimization. My goal is to enhance scalability and deployment efficiency by leveraging Docker to streamline application development and deployment workflows. 🚀🐳
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;