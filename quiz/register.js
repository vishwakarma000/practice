function submitData() {
    var full_name = document.getElementById("full_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // Check if the full_name matches the pattern
    if (full_name == "") {
        alert("enter your full name")
        return false

    } else if (namePattern.test(full_name)) {
        console.log(true)
    } else {
        alert("Full name is incorrect")
        return false
    }

    if (email == "") {
        alert("enter your valid email id")
        return false

    } else if (emailPattern.test(email)) {
        console.log(true)
    } else {
        alert("Email Id is not correct");
        return false
    }


    if (password == "") {
        alert("Please enter password")
    }
    else if (password.length <= 8) {
        alert("Enter password must be 8 digit long")
    }

    let userList = JSON.parse(window.localStorage.getItem("users")) || [];
    const userExists = userList.some(user => user.email === email);
    if (userExists) {
        alert("oppsss!!!!, User already exist");
    }
    else {
        const user = {
            name: full_name,
            email: email,
            password: password
        }

        userList.push(user);
        var userString = JSON.stringify(userList)
        window.localStorage.setItem("users", userString);
        alert("register Successfull")
        

    }
}