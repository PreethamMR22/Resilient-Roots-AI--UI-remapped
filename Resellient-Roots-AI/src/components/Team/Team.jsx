import React, { useState } from 'react';
import './Team.css';
import preethamImg from '../../assets/team/preetham.png';
import preetham2Img from '../../assets/team/preetham2.jpg'

const teamMembers = [
  {
    id: 1,
    name: 'Rohan R Gowda',
    role: 'AIML Developer',
    image: preetham2Img
  },
  {
    id: 2,
    name: 'Shripad Maradi',
    role: 'Backend Developer',
    image: preethamImg
  },
  {
    id: 3,
    name: 'Preetham Raj',
    role: 'Web developer',
    image: preetham2Img
  },
  {
    id: 4,
    name: 'Amogh A P',
    role: 'Front End Developer',
    image: preethamImg
  },
  {
    id: 5,
    name: 'Anmol Rathan Rao',
    role: 'UI/UX Designer',
    image: preetham2Img
  }
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  return (
    <div className="team-container">
      <div className="team-content">
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-divider"></div>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`team-member-circle ${index === 2 ? 'main-circle' : index % 2 === 0 ? 'outer-circle' : ''}`}
              style={{ backgroundImage: `url(${member.image})` }}
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
              data-member-id={member.id}
            >
              <div className="member-popup">
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
