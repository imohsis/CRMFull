import { addNewContact, getContacts, getContactWithID,updateContact,deleteContact} from "../controllers/crmController";




const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) =>{

console.log(`Request from :${req.originalUrl}`);
console.log(`Request type :${req.method}`);
next();
    },getContacts
)

    .post(addNewContact);




    app.route('/contact/:contactId')      // with route parameters added
    // get a specific contact
      .get(getContactWithID) 
    
      //update a specific contact
     .put(updateContact)
     
     .delete(deleteContact);


}
export default routes;