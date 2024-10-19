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
let questionCard = document.getElementById("question-box")
// let question = document.getElementById("question")

function displayQuestion(){
for (let j = 0; j < userInfo[index].questions.length; j++) {
 let h2 = document.createElement("h2");
 let ul = document.createElement("ul");
 let li1 = document.createElement("li");
 let li2 = document.createElement("li");
 let li3 = document.createElement("li");
 let li4 = document.createElement("li");

 h2.innerText = j +1 +" " +userInfo[index].questions[j].question
 li1.innerText = userInfo[index].questions[j].options[0]
 li2.innerText = userInfo[index].questions[j].options[1]
 li3.innerText = userInfo[index].questions[j].options[2]
 li4.innerText = userInfo[index].questions[j].options[3]

 ul.append(li1 ,li2, li3, li4);

 questionCard.append(h2 ,ul);


 
}


}




