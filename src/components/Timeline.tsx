import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardUser, faFlask, faBuildingUser, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>📚 Education and Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Muhammadiyah Surakarta</h4>
            <p>
              Informatics Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faFlask} />}
          >
            <h3 className="vertical-timeline-element-title">Laboratory Assistant </h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Muhammadiyah Surakarta</h4>
            <p>
              Algorithm and Data Structure Laboratory Assistant 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faChalkboardUser} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud Computing Cohort</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangkit Academy 2024 Batch 2</h4>
            <p>
              Dicoding, Google Cloud Skill Boost, GCP, Docker, Hapi.JS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingUser} />}
          >
            <h3 className="vertical-timeline-element-title">Head of Cyber Security</h3>
            <h4 className="vertical-timeline-element-subtitle">FOSTI UMS</h4>
            <p>
              Cyber Security Team
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingUser} />}
          >
            <h3 className="vertical-timeline-element-title">Research and Development Member</h3>
            <h4 className="vertical-timeline-element-subtitle">FOSTI UMS</h4>
            <p>
              Research and Development Team
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;