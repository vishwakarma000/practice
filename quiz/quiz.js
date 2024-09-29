// for registration
function submitData() {
  var full_name = document.getElementById("full_name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const namePattern = /^[a-zA-Z\s]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the full_name matches the pattern
  if (full_name == "") {
    alert("enter your full name");
    return false;
  } else if (namePattern.test(full_name)) {
    console.log(true);
  } else {
    alert("Full name is incorrect");
    return false;
  }

  if (email == "") {
    alert("enter your valid email id");
    return false;
  } else if (emailPattern.test(email)) {
    console.log(true);
  } else {
    alert("Email Id is not correct");
    return false;
  }

  if (password == "") {
    alert("Please enter password");
    return false;
  } else if (password.length <= 8) {
    alert("Enter password must be 8 digit long");
    return false;
  }

  let userList = JSON.parse(window.localStorage.getItem("users")) || [];
  const userExists = userList.some((user) => user.email === email);
  if (userExists) {
    alert("oppsss!!!!, User already exist");
  } else {
    const user = {
      name: full_name,
      email: email,
      password: password,
    };

    userList.push(user);
    var userString = JSON.stringify(userList);
    window.localStorage.setItem("users", userString);
    alert("register Successfull");
    window.location.href = "login.html";
  }
}

//for login

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let adminId = "admin1234";
  let adminPassword = "2580";

  let userList = JSON.parse(window.localStorage.getItem("users")) || [];

  const validEmail = userList.some((user) => user.email === email);
  const validPassword = userList.some((user) => user.password === password);
  if (email === adminId && password === adminPassword) {
    window.location.href = "adminDashboard.html";
  } else {
    if (email == "" && password == "") {
      alert("enter user name and password");
      return;
    } else {
      if (!validEmail) {
        ///success condition
        alert("Invaild user , retry!!");
        return;
      } else if (!validPassword) {
        alert("Password is Incorrect");
        return;
      } else {
        alert("success");

        // handleUser(email)
        const existUser = userList.filter((user) => user.email === email);
        localStorage.setItem("loginUser", JSON.stringify(existUser));
        window.location.href = "dashboard.html";
      }
    }
  }
}

// question page function


let choosedQuestions = [];
let questionIndex = 0;


function startQuize() {
    const allQuestions = JSON.parse(localStorage.getItem("questions"));
    choosedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    displayQuestion(questionIndex)
    console.log(choosedQuestions)    
}


function displayQuestion (i) {

  document.getElementById("question-text").innerText = choosedQuestions[i].question;
  document.getElementById("ans1").innerText = choosedQuestions[i].options[0];
  document.getElementById("ans2").innerText = choosedQuestions[i].options[1];
  document.getElementById("ans3").innerText = choosedQuestions[i].options[2];
  document.getElementById("ans4").innerText = choosedQuestions[i].options[3];
  

  document.getElementById("option1").value = choosedQuestions[i].options[0];
  document.getElementById("option2").value = choosedQuestions[i].options[1];
  document.getElementById("option3").value = choosedQuestions[i].options[2];
  document.getElementById("option4").value = choosedQuestions[i].options[3];

  
  document.getElementById("noOfQuestions").innerText = i + 1;
  selectedRadio = document.querySelector("[name='options']:checked");
  if(selectedRadio) {
    selectedRadio.checked = false
  }

  //set choosed answer
  if(choosedQuestions[questionIndex].choosedAnswer) {
    let choosedAnswer = choosedQuestions[questionIndex].choosedAnswer;
    choosedAnswer = choosedAnswer.replaceAll("'", "\\'");
    document.querySelector("[name='options'][value='" + choosedAnswer + "']").checked = true;
  }
  
}
function choosedAnswer(optionIndex) {
  choosedQuestions[questionIndex]["choosedAnswer"] = choosedQuestions[questionIndex].options[optionIndex];
}


//function for next questions
function next() {
  if(questionIndex == 9) {
    Submit()

      return
  }
  questionIndex++;
  displayQuestion(questionIndex)
  
}
//function for previous questions
function previous() {
  if(questionIndex == 0) {
      return;
  }
  questionIndex--;
  displayQuestion(questionIndex)
}
function Submit(){
  let score = 0;
  for(let i = 0; i < choosedQuestions.length; i++) {
      if(choosedQuestions[i].choosedAnswer == choosedQuestions[i].answer) {
          score += 10;
      }
  }




  let userTests = JSON.parse(localStorage.getItem("userTests")) || [];
  let loggedInUser = JSON.parse(localStorage.getItem("loginUser"));


  let usertest = {
      questions: choosedQuestions,
      score: score,
      name: loggedInUser[0].name,
      email: loggedInUser[0].email,
  }

  userTests.push(usertest)
  localStorage.setItem("userTests", JSON.stringify(userTests));

  window.location = "scoreBoard.html"
}

let userTests = JSON.parse(localStorage.getItem("userTests")) || [];
  let loggedInUser = JSON.parse(localStorage.getItem("loginUser"));
  // console.log(userTests)
  console.log(loggedInUser[0].name)
  console.log("hi")
