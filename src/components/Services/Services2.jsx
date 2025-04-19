"use client"
import React from 'react';
import Tilt from 'react-parallax-tilt';

const cardData = [
  {
    image: '/images/nexel/design.webp',
    title: 'Design UI UX',
    description: 'Our UI/UX design services focus on crafting intuitive, engaging, and visually stunning digital experiences. We combine user research, wireframing, prototyping, and modern design trends to build interfaces that ensure seamless interaction and user satisfaction.'
  },
  {
    image: '/images/nexel/development.webp',
    title: 'Development',
    description: 'From web to mobile applications, our development team brings ideas to life using the latest frameworks and technologies. We ensure clean, scalable, and maintainable code with agile methodologies to deliver robust, future-proof digital products tailored to your needs.'
  },
  {
    image: '/images/nexel/devops.webp',
    title: 'Devops',
    description: 'Our DevOps solutions streamline development and operations, automating workflows and improving deployment speed. We implement CI/CD pipelines, cloud infrastructure, and monitoring tools to boost efficiency, reduce downtime, and enhance collaboration across teams.'
  },
  {
    image: '/images/nexel/digital_market.webp',
    title: 'SEO',
    description: 'Our SEO strategies are designed to improve your online visibility and drive organic traffic. From keyword research to on-page and off-page optimization, we use data-driven techniques to boost rankings, enhance content relevance, and achieve sustainable growth.'
  },
  {
    image: '/images/nexel/data_analysis.webp',
    title: 'Data Analysis',
    description: 'Leverage the power of data to drive decisions. Our data analysis services include data collection, cleaning, visualization, and insight generation to help you understand trends, customer behavior, and operational performance for strategic growth.'
  },
  {
    image: '/images/nexel/cyber_security.webp',
    title: 'Cyber Security',
    description: 'Protect your digital assets with our end-to-end cybersecurity solutions. We offer threat detection, risk assessment, network security, and incident response to secure your systems from evolving cyber threats and ensure regulatory compliance.'
  },
  {
    image: '/images/nexel/ai.webp',
    title: 'Artificial Intelligance',
    description: 'Harness the power of AI to transform your business operations. Our services include machine learning, natural language processing, and intelligent automation that help improve efficiency, enhance customer experiences, and unlock new opportunities.'
  },
  {
    image: '/images/nexel/qa.webp',
    title: 'Quality Assurance',
    description: 'Ensure your software meets the highest standards with our QA services. We provide automated and manual testing, bug tracking, and performance validation to deliver error-free products that meet functionality, usability, and reliability goals.'
  },
  {
    image: '/images/nexel/erp.webp',
    title: 'ERP',
    description: 'Streamline and integrate your business processes with our ERP solutions. From finance to inventory and HR management, we customize ERP systems that improve efficiency, enhance collaboration, and provide real-time data for better decision-making.'
  }
];


const Services2 = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '2rem'
  };

  const cardStyle = {
    background: '#111',
    color: '#fff',
    borderRadius: '16px',
    width: '350px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
    cursor:"pointer"
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '1rem'
  };

  const titleStyle = {
    margin: 0,
    marginBottom: '0.5rem',
    fontSize: '1.2rem'
  };

  const descStyle = {
    fontSize: '0.95rem',
    opacity: 0.85
  };

  return (
    <div style={containerStyle}>
      {cardData.map((card, index) => (
        <Tilt
          key={index}
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          style={cardStyle}
        >
          <img src={card.image} alt={card.title} style={imageStyle} />
          <div style={contentStyle}>
            <h2 style={titleStyle}>{card.title}</h2>
            <p style={descStyle}>{card.description}</p>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default Services2;
