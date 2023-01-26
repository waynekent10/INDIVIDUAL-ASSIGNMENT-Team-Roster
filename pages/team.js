import React, { useEffect, useState } from 'react';
import { getTeamMembers } from '../api/teamData';
import PlayerCard from '../components/PlayerCard';
import { useAuth } from '../utils/context/authContext';

export default function TeamView() {
  const [members, setMembers] = useState([]);
  const { user } = useAuth();

  const getAllTeamMembers = () => {
    getTeamMembers(user.uid).then(setMembers);
  };
  useEffect(() => {
    getAllTeamMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>Your squad ${user.displayName}</h1>
      <div>
        {members.map((member) => (
        <PlayerCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTeamMembers} />
      ))}
      </div>
    </>
  );
}
