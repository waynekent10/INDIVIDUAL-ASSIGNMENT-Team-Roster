import { clientCredentials } from "../utils/client";


const endpoint = clientCredentials.databaseURL;

//Get All members on the Roster
const getTeamMembers = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rosters.json?orderBy"uid"andequalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      resolve(Object.values(data));
    } else {
      resolve([]);
    }
  })
  .catch(reject);
});

const createTeamMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rosters.json`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(payload),
  })
   .then((response) => response.json())
   .then((data) => resolve(data))
   .catch(reject);
});

const updateTeamMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rosters/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rosters/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
   })
   .then((response) => response.json())
   .then((data) => resolve(data))
   .catch(reject);
});

const getSingleMember = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/rosters/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
   },
  })
   .then((response) => response.json())
   .then((data) => resolve(data))
   .catch(reject);
});

export {
    getTeamMembers,
    createTeamMember,
    updateTeamMember,
    deleteMember,
    getSingleMember,
};