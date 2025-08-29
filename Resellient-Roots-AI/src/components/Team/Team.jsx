import React, { useState } from 'react';
import './Team.css';
import preethamImg from '../../assets/team/preetham.png';
import preetham2Img from '../../assets/team/preetham2.jpg'
import preetham from '../../assets/team/mine.jpg'
import rohan from '../../assets/team/rohan.jpg'
import amogh from '../../assets/team/amogh.jpg'
import anmol from '../../assets/team/anmol.jpg'
import shripad from '../../assets/team/shripad.jpg'
const teamMembers = [
  {
    id: 1,
    name: 'Rohan R Gowda',
    role: 'AIML Developer',
    image: rohan
  },
  {
    id: 2,
    name: 'Shripad Maradi',
    role: 'Backend Developer',
    image: shripad
  },
  {
    id: 3,
    name: 'Preetham Raj',
    role: 'Web developer',
    image: preetham
  },
  {
    id: 4,
    name: 'Amogh A P',
    role: 'Front End Developer',
    image: amogh
  },
  {
    id: 5,
    name: 'Anmol Rathan Rao',
    role: 'UI/UX Designer',
    image: anmol
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
          {teamMembers.map((member, index) => {
            // Calculate z-index: leftmost has lowest, rightmost has highest
            const zIndex = index + 1;
            const isActive = hoveredMember?.id === member.id;
            return (
              <div 
                key={member.id}
                className={`team-member-circle ${index === 2 ? 'main-circle' : 'outer-circle'} ${isActive ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${member.image})`,
                  transform: `translateX(${(index - 2) * 18}px) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                  zIndex: isActive ? 50 : zIndex, // Active item gets highest z-index
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={() => setHoveredMember(member)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {hoveredMember?.id === member.id && (
                  <div className="member-popup">
                    <div className="member-name">{member.name}</div>
                    <div className="member-role">{member.role}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
