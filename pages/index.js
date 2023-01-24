import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getTeamMembers } from '../api/teamData';
import { useAuth } from '../utils/context/authContext';
import PlayerCard from '../components/PlayerCard';

function Home() {
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
    <div className="text-center my-4">
      <Link href="/new" passHref>
        <Button>Add a Member</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {members.map((member) => (
          <PlayerCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTeamMembers} />
        ))}
      </div>

    </div>
  );
}
export default Home;
