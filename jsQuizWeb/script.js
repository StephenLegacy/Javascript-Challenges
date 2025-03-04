document.getElementById("submitQuiz").addEventListener("click", function() {
    let score = 0;

    let answers = {
        q1: "JavaScript",
        q2: "both",
        q3: "mouseover",
        q4: "console",
        q5: "none",
        
    };


    let userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
        q5: document.querySelector('input[name="q5"]:checked')
    };

    if (userAnswers.q1 && userAnswers.q1.value === answers.q1) {
        score++;
    }
    if (userAnswers.q2 && userAnswers.q2.value === answers.q2) {
        score++;
    }
    if (userAnswers.q3 && userAnswers.q3.value === answers.q3) {
        score++;
    }
    if (userAnswers.q4 && userAnswers.q4.value === answers.q4) {
        score++;
    }
    if (userAnswers.q5 && userAnswers.q5.value === answers.q5) {
        score++;
    }
   

    alert("Your score: " + score + "/5");
});
