let choosedQuestions = [];
let questionIndex = 0;


function startQuize() {
    const allQuestions = JSON.parse(localStorage.getItem("AllQuestions"));
    choosedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    displayQuestion(questionIndex)
}

function displayQuestion (i) {

  document.getElementById("question").innerText = i + 1 + ". " + choosedQuestions[i].question;
  document.getElementById("op1").innerText = choosedQuestions[i].options[0];
  document.getElementById("op2").innerText = choosedQuestions[i].options[1];
  document.getElementById("op3").innerText = choosedQuestions[i].options[2];
  document.getElementById("op4").innerText = choosedQuestions[i].options[3];
  

  document.getElementById("option1").value = choosedQuestions[i].options[0];
  document.getElementById("option2").value = choosedQuestions[i].options[1];
  document.getElementById("option3").value = choosedQuestions[i].options[2];
  document.getElementById("option4").value = choosedQuestions[i].options[3];

  
  document.getElementById("count").innerText = i + 1;

  // progress path setting
  let progress = document.getElementById("progress");
  let progressWidth = (document.getElementById("count").innerText / 10) * 100;
  progress.style.width = progressWidth + "%";


  //set options to unchecked
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

function next() {
    if(questionIndex == 9) {
        Submit();
        return
    }
    questionIndex++;
    displayQuestion(questionIndex)

}

function back() {
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
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


    let usertest = {
        questions: choosedQuestions,
        score: score,
        name: loggedInUser.name,
        email: loggedInUser.email,
    }

    userTests.push(usertest)
    localStorage.setItem("userTests", JSON.stringify(userTests));

    window.location = "scoreboard.html"
}