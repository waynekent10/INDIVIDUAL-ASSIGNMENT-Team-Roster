import React, { useEffect, useState } from 'react';
import { getTheTeam } from '../api/teamData';
import PlayerCard from '../components/PlayerCard';
import { useAuth } from '../utils/context/authContext';

export default function GetTheTeam() {
  const { user } = useAuth();
  const [members, setMembers] = useState([]);

  const getAllTheTeam = () => {
    getTheTeam(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllTheTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {members.map((member) => (
        <PlayerCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTheTeam} />
      ))}
    </div>
  );
}
