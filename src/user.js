//Define User class
var User = /** @class */ (function () {
    //constuctor 
    function User(userName, password, contact, emailId, address) {
        this.userName = userName;
        this.password = password;
        this.contact = contact;
        this.emailId = emailId;
        this.address = address;
    }
    return User;
}());
//Fetch form values using Object.fromentries()
function submitUser() {
    var form = document.querySelector("#reg-form");
    var formData1 = new FormData(form);
    var user1 = new User(formData1.get("username"), formData1.get("password"), formData1.get("contact"), formData1.get("email"), formData1.get("address"));
    registerUser(user1);
    return false;
    //call registerUser method with the constructed User object
}
//POST data using fetch() api
function registerUser(user) {
    fetch("http://localhost:3001/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    }).then(function (response) { return response.json(); }).then(function (json) { return console.log(json); });
    alert("successful registration");
    return false;
    //Dispay welcome message after successful registration
}
