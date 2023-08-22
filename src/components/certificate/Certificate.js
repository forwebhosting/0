import React, { useState } from 'react';
import Title from '../layouts/Title';
import { ExCertificate } from "../../assets/index";
import ProjectsCard from './CertificateCard';
import CertificatePopup from './CertificatePopup';

const Certificate = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [cerSrc, setCerSrc] = useState('');
  const [cerLink, setCerLink] = useState(''); // State to track the certificate link

  const toggleCertificatePopup = (src, link) => {
    setCerSrc(src);
    setCerLink(link);
    setShowCertificate(!showCertificate);
  };

  return (
    <section id="certificate" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Certificates" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-14">
        <ProjectsCard
          title="Certificates"
          des="Mohamed Thowfick's certificates uploading is under processing, it will be updated soon"
          src={ExCertificate}
          link="https://example-link1.com" // Provide the link here
          onGithubClick={() => toggleCertificatePopup(ExCertificate)} // Pass the image source
        />
        <ProjectsCard
          title="Certificates"
          des="Mohamed Thowfick's certificates uploading is under processing, it will be updated soon"
          src={ExCertificate}
          link="https://example-link2.com" // Provide the link here
          onGithubClick={() => toggleCertificatePopup(ExCertificate)} // Pass the image source
        />
        <ProjectsCard
          title="Certificates"
          des="Mohamed Thowfick's certificates uploading is under processing, it will be updated soon"
          src={ExCertificate}
          link="https://example-link3.com" // Provide the link here
          onGithubClick={() => toggleCertificatePopup(ExCertificate)} // Pass the image source
        />
        <ProjectsCard
          title="Certificates"
          des="Mohamed Thowfick's certificates uploading is under processing, it will be updated soon"
          src={ExCertificate}
          link="https://example-link3.com" // Provide the link here
          onGithubClick={() => toggleCertificatePopup(ExCertificate)} // Pass the image source
        />
      </div>
      {showCertificate && <CertificatePopup src={cerSrc} link={cerLink} onClose={toggleCertificatePopup} />}
    </section>
  );
}

export default Certificate;
