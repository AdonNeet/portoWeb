import React from "react";
import "../assets/styles/CertficateGallery.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

import mlGcp from "../assets/images/ml-gcp.png";
import aiBasic from "../assets/images/ai-basic.png";
import beGcp from "../assets/images/be-gcp.png";
import gcpEng from "../assets/images/gcp-engineer.png";
import jsBasic from "../assets/images/js-basic.png";
import webBasic from "../assets/images/web-basic.png";
import gitBasic from "../assets/images/git-basic.png";
import rplBasic from "../assets/images/rpl-basic.png";
import logic101 from "../assets/images/programmingLogic101.png";

import gcsb from "../assets/images/gcsb.png";

const CertificateGallery = () => {
  const certificates = [
    { src: mlGcp, caption: "Belajar Penerapan Machine Learning dengan Google Cloud", link: "https://www.dicoding.com/certificates/0LZ040LQ0P65" },
    { src: aiBasic, caption: "Belajar Dasar AI", link: "https://www.dicoding.com/certificates/L4PQ5J49VZO1" },
    { src: beGcp, caption: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud", link: "https://www.dicoding.com/certificates/EYX4JO2MJZDL" },
    { src: gcpEng, caption: "Menjadi Google Cloud Engineer", link: "https://www.dicoding.com/certificates/N9ZOYJN78PG5" },
    { src: jsBasic, caption: "Belajar Dasar Pemrograman JavaScript", link: "https://www.dicoding.com/certificates/53XEQKEMYXRN" },
    { src: webBasic, caption: "Belajar Dasar Pemrograman Web", link: "https://www.dicoding.com/certificates/L4PQ5MGD2ZO1" },
    { src: gitBasic, caption: "Belajar Dasar Git dengan GitHub", link: "https://www.dicoding.com/certificates/1RXY2Y4MMXVM" },
    { src: rplBasic, caption: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", link: "https://www.dicoding.com/certificates/L4PQ5M8M7ZO1" },
    { src: logic101, caption: "Pengenalan ke Logika Pemrograman", link: "https://www.dicoding.com/certificates/07Z64L85JPQR" },
  ];

  return (
    <div className="galleryContainer" id="certificate">
      <h1 className="galleryText">📄 Certificate & Badge I’ve Earned</h1>
      <h2 className="galleryText">&nbsp; <FontAwesomeIcon icon={faCertificate} /> Certificate</h2>
      {certificates.map((cert, index) => (
        <div key={index} className="certificateCard">
          <a href={cert.link} target="_blank" rel="noreferrer">
            <img src={cert.src} alt="Certificate" className="certificateImage" />
            <div className="caption">{cert.caption}</div>
          </a>
        </div>
      ))}
      <h2 className="galleryText">&nbsp; <FontAwesomeIcon icon={faShieldHalved} /> Badge</h2>
      <div className="certificateCard">
          <a href="https://www.cloudskillsboost.google/public_profiles/244341fc-9326-4f0c-b744-87214fc5bd11" target="_blank" rel="noreferrer">
            <img src={gcsb} alt="Certificate" className="certificateImage" />
            <div className="caption">Google Cloud Skill Boost</div>
          </a>
        </div>
      
    </div>
  );
};

export default CertificateGallery;

