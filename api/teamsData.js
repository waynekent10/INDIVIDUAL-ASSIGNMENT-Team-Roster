import { clientCredentials } from "../utils/client";


const endpoint = clientCredentials.databaseURL;

//Get All Teams in the league
const getOrgs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/teams.json?orderBy="uid"&equalTo="${uid}"`, {
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

const createOrgs = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/teams.json`, {
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

const updateOrgs = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/teams/${payload.firebaseKey}.json`, {
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

const deleteOrgs = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/teams/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
   })
   .then((response) => response.json())
   .then((data) => resolve(data))
   .catch(reject);
});

const getSingleOrg = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/teams/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
   },
  })
   .then((response) => response.json())
   .then((data) => resolve(data))
   .catch(reject);
});
const getPublicOrgs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/teams.json`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((data) => { resolve(data())
  .catch(reject)
  })
})

export {
  getOrgs,
  getSingleOrg,
  createOrgs,
  updateOrgs,
  deleteOrgs,
  getPublicOrgs
}