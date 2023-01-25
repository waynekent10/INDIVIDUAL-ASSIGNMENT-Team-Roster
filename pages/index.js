import Head from 'next/head';
import React, { useEffect, useState } from 'react';
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
    <>
      <Head>
        <title>Now! Heres your Organization!</title>
      </Head>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {members.map((member) => (
            <PlayerCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTeamMembers} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
