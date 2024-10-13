let table = document.getElementById("userTable")
const user = JSON.parse(localStorage.getItem("users"))
// console.log("hii", user)
const userInfo = JSON.parse(localStorage.getItem("userTests"))
const currentUser = JSON.parse(localStorage.getItem("loginUser"))
// const testCount = JSON.parse(localStorage.getItem("userTests"))
console.log(userInfo)

const uniqueUserInfo = userInfo.filter((user, index, self) =>     ////SELECT THE UNIQUE USERS ONLY

  index === self.findIndex((u) => u.email === user.email)

);


let count = 0 ;
for(let i = 0 ; i < userInfo.length ; i++){
    if(currentUser[0].email === userInfo[i].email){
        count++;
    }

}
for(let i = 0 ; i < user.length ; i++){
    if(currentUser[0].email === user[i].email){
        user[i].testGiven = count ; 
        break ;
    }
}


for(let i =0 ; i < user.length ; i++){
   let testCount =  userInfo.filter( (email) => {return user[i].email == email.email ; }).length


    let tr = document.createElement("tr")
    let td1 = document.createElement("td")  
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    // let td6 = document.createElement("td")
    td1.innerText = i + 1;
    td2.innerText = user[i].name ;
    td3.innerText = user[i].email ;
    td4.innerText = userInfo[i].score ;
    td5.innerText = testCount ;
    // td6.innerText = testCount ;


    tr.append(td1, td2, td3, td4, td5 );
    table.append(tr);

}
