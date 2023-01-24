import { clientCredentials } from "../utils/client";


const endpoint = clientCredentials.databaseURL;

//Get All members on the Roster
const getTeamMembers = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/roster.json?orderBy"uid"andequalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const createTeamMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/roster.json`, {
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

const getFavoriteMembers = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/roster.json?orderBy"uid"andequalTo="${uid}"`, {
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
        const favoriteMember = Object.values(data).filter((item) => item.favorite);
        resolve(favoriteMember);
    })
    .catch(reject);
});

const updateTeamMember = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/roster/${payload.firebaseKey}.json`, {
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
  fetch(`${endpoint}/roster/${firebaseKey}.json`, {
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
  fetch(`${endpoint}/roster/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
   },
  })
   .then((response) => response.json())
   .then((data) => resolve(data))
   .catch(reject);
});

const getTheTeam = (uid) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/roster.json?orderBy"uid"andequalTo="${uid}"`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((data) => {
            const roleplayers = Object.values(data).filter((item) => item.role);
            resolve(roleplayers);
        })
        .catch(reject);
    });
export {
    getTeamMembers,
    createTeamMember,
    getFavoriteMembers,
    updateTeamMember,
    deleteMember,
    getSingleMember,
    getTheTeam
};