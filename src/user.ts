//Define User class
class User {
//Field declartions
private userName : string;
private password : string;
private contact : number;
private emailId : string;
private address : string;



//constuctor 
constructor(userName : string,password : string,contact : number,emailId : string,address : string){
    this.userName = userName;
    this.password = password;
    this.contact = contact;
    this.emailId = emailId;
    this.address = address;
}

//getter and setter methods
// get user_name(){
//     return this.userName
// }
// set username(name:string){
// this.userName = name;
// }
// get pass(){
//     return this.password
// }
// set pas(password:string){
// this.password = password;
// }
// get contac(){
//     return this.contact
// }
// set cont(name:number){
// this.contact = name;
// }
// get email(){
//     return this.emailId
// }
// set email(name:string){
// this.emailId = name;
// }
// get addres(){
//     return this.address
// }
// set addres(name:string){
// this.address = name;
// }



}

//Fetch form values using Object.fromentries()
function submitUser(){
    let form:any = document.querySelector("#reg-form");
    let formData1:any = new FormData(form);
    

    let user1 = new User(formData1.get("username"),formData1.get("password"),formData1.get("contact"),formData1.get("email"),formData1.get("address"))
    

    registerUser(user1)
    return false;
    //call registerUser method with the constructed User object
}

//POST data using fetch() api
function registerUser(user: User) {

    fetch("http://localhost:3001/users", {
        method: "POST",
        body:JSON.stringify(user),
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    }).then(response => response.json()).then(json => console.log(json))
    alert("successful registration")
    return false;

    //Dispay welcome message after successful registration
}