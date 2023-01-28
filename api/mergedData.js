import { getSingleMember } from "./playerData";



const ViewMemberDetails = (memberFirebaseKey) => new Promise((resolve, reject) => {
    getSingleMember(memberFirebaseKey)
     .then((memberObject) => {
        resolve({ ...memberObject });
     }).catch((error) => reject(error));
});

export { ViewMemberDetails };