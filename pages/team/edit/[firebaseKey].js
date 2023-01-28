import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleOrg } from '../../../api/teamsData';
import TeamForm from '../../../components/forms/TeamForm';

export default function EditTeams() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleOrg(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<TeamForm obj={editItem} />);
}
