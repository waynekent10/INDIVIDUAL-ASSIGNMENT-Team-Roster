import React from 'react';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Name:{user.displayName}</h1>
      <Image src={user.photoURL} alt="userURL" width="100px" height="100px" />
      <h3>Email:{user.email}</h3>
      <h4>Last Login:{user.metadata.lastSignInTime}</h4>
    </div>
  );
}
