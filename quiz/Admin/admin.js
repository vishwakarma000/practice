var table = document.getElementById("userTable")
const user = JSON.parse(localStorage.getItem("users"))
const userInfo = JSON.parse(localStorage.getItem("userTests"))
const currentUser = JSON.parse(localStorage.getItem("loginUser"))
// const testCount = JSON.parse(localStorage.getItem("userTests"))


const uniqueUserInfo = userInfo.filter((user, index, self) =>     ////SELECT THE UNIQUE USERS ONLY

  index === self.findIndex((u) => u.email === user.email)

);
console.log("yteh wal",user)
function displayUserList(){

for(let i =0 ; i < userInfo.length ; i++){
   let testCount =  userInfo.filter( (email) => {return userInfo[i].email == email.email ; }).length
  
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")  
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    td1.innerText = i + 1;
    td2.innerText = userInfo[i].name ;
    td3.innerText = userInfo[i].email ;
    td4.innerText = userInfo[i].score ;
    td5.innerText = testCount ;
    td6.innerHTML = `<a href= "view_question.html?id=${i}" target="_blank">View more</a>`;


    tr.append(td1, td2, td3, td4, td5 , td6 );
    table.append(tr);

}
}

function toggle(){
    let element = document.getElementsByClassName("side-toggle-column")[0]
    element.classList.toggle("toggle-style");
  
  }


const params = new URLSearchParams(window.location.search);
let index = params.get('id');
document.getElementById("name").innerText = userInfo[index].name;
document.getElementById("email").innerText = userInfo[index].email;
// console.log(" check the format", userInfo)
// userInfo.filter(() => {

// });
console.log(userInfo)
console.log("yeh question print kar raha hia",userInfo[index].questions)
let table1 = document.getElementById("question-table")
let question = document.getElementById("question")

function displayQuestion(){
for (let j = 0; j < userInfo[index].questions.length; j++) {
// console.log(userInfo[index].questions[j])

let tr1 = document.createElement("tr");
tr1.classList.add("question")
let tr2 = document.createElement("tr");
let tr3 = document.createElement("tr");
let tr4 = document.createElement("tr");
let tr5 = document.createElement("tr");
// let tr6 = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
td4.setAttribute('id', "option1");
let td5 = document.createElement("td");
let td6 = document.createElement("td");
td6.setAttribute('id', "option2");
let td7 = document.createElement("td");
let td8 = document.createElement("td");
td8.setAttribute('id', "option3");
let td9 = document.createElement("td");
let td10 = document.createElement("td");
td10.setAttribute('id', "option4");

td1.innerText =j +1 + ")";
td2.innerText = userInfo[index].questions[j].question;
td3.innerText = "Option1"
td4.innerText = userInfo[index].questions[j].options[0];
td5.innerText = "Option2"
td6.innerText = userInfo[index].questions[j].options[1];
td7.innerText = "Option3"
td8.innerText = userInfo[index].questions[j].options[2];
td9.innerText = "Option4"
td10.innerText = userInfo[index].questions[j].options[3];

tr1.append(td1, td2)
tr2.append(td3, td4)
tr3.append(td5, td6)
tr4.append(td7, td8)
tr5.append(td9, td10)
table1.append(tr1, tr2, tr3, tr4, tr5)

let correctAnswer = userInfo[index].questions[j].answer;
let userSelectedAnswer = userInfo[index].questions[j].choosedAnswer;
let allOptions=  userInfo[index].questions[j].options

////coloring still pensding and it is doisplaying prop[erly]

console.log(correctAnswer);

}


}




