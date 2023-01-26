import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Image } from 'react-bootstrap';
import { ViewMemberDetails } from '../../api/mergedData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    ViewMemberDetails(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);
  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <Image src={memberDetails.image} alt={memberDetails.image} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
            <h5>
          {memberDetails.name} {memberDetails.role}
            </h5>
      </div>
    </div>
  );
}
