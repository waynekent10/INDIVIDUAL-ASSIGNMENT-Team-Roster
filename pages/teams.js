import React, { useEffect, useState } from 'react';
import { getOrgs } from '../api/teamsData';
import { useAuth } from '../utils/context/authContext';
import TeamCard from '../components/forms/TeamCard';

export default function TeamsView() {
  const [teams, setTeams] = useState([]);
  const { user } = useAuth();

  const getAllOrgs = () => {
    getOrgs(user.uid).then(setTeams);
  };
  useEffect(() => {
    getAllOrgs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
           {teams.map((team) => (
              <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getAllOrgs} />
            ))}
      </div>
    </>
  );
}
