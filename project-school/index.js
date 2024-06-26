const questions = [
    {
        question: "В какой период времени в России появился парламент?",
        optionA: "в начале XIX века",
        optionB: "в конце XX века",
        optionC: "в конце XVIII века",
        optionD: "в XXI веке",
        correctOption: "optionA"
    },

    {
        question: "На какой срок изначально избиралась Дума?",
        optionA: "10 лет",
        optionB: "3 года",
        optionC: "5 лет",
        optionD: "1 год",
        correctOption: "optionC"
    },

    {
        question: "Когда была открыта первая Дума?",
        optionA: "27 апреля 1905 года",
        optionB: "27 апреля 1906 года",
        optionC: "26 марта 1906 года",
        optionD: "26 апреля 1906 года",
        correctOption: "optionB"
    },

    {
        question: "Сколько просуществовала первая Дума?",
        optionA: "1 месяц",
        optionB: "49 дней",
        optionC: "1 год",
        optionD: "72 дня",
        correctOption: "optionD"
    },

    {
        question: "В выборах в первую Государственную Думу не участвовали:",
        optionA: "кадеты",
        optionB: "меньшевики",
        optionC: "Эсеры",
        optionD: "Октябристы",
        correctOption: "optionC"
    },

    {
        question: "Председателем первой Думы был избран:",
        optionA: "М. В. Родзянко",
        optionB: "С. А. Муромцев",
        optionC: "Ф. А. Головин",
        optionD: "Н. А. Хомяков",
        correctOption: "optionB"
    },

    {
        question: "Когда состоялось первое заседание Государственной Думы в г. Санкт-Петербурге?",
        optionA: "27 апреля 1906 года в Зимнем дворце",
        optionB: "27 апреля 1905 года Таврическом дворце",
        optionC: "27 апреля 1906 года в Таврическом дворце",
        optionD: "27 апреля 1905 года в Зимнем дворце",
        correctOption: "optionC"
    },

    {
        question: "Активным избирательным правом в Государственную Думу в 1906 году не обладали женщины, молодёжь до 25 лет, военнослужащие и ряд национальных меньшинств. Это значило, что выборы были:",
        optionA: "не всеобщие",
        optionB: "не равные",
        optionC: "не прямые",
        optionD: "не тайные",
        correctOption: "optionA"
    },

    {
        question: "Сколько просуществовала вторая Дума?",
        optionA: "100 дней",
        optionB: "102 дня",
        optionC: "90 дней",
        optionD: "105 дней",
        correctOption: "optionB"
    },

    {
        question: "Какая из четырех Государственный Дум в Российской Империи проработала полный по закону о выборах срок?",
        optionA: "1 Дума",
        optionB: "2 Дума",
        optionC: "3 Дума",
        optionD: "4 Дума",
        correctOption: "optionC"
    },

    {
        question: "Когда состоялись выборы в Государственную Думу Федерального Собрания Российской Федерации первого созыва?",
        optionA: "в 1990 г",
        optionB: "в 1991 г ",
        optionC: "в 1992 г",
        optionD: "в 1993 г",
        correctOption: "optionD"
    },

    {
        question: "К какой ветви государственной власти относится Федеральное Собрание РФ?",
        optionA: "Судебной",
        optionB: "Законодательной",
        optionC: "Исполнительной",
        optionD: "Ко всем",
        correctOption: "optionB"
    },


    {
        question: "Из чего состоит Федеральное Собрание в России?",
        optionA: "Совет Федерации",
        optionB: "Государственная Дума",
        optionC: "Оба варианта",
        optionD: "Никакой из вариантов",
        correctOption: "optionC"
    },

    {
        question: "Какого числа отмечается День рождения парламентаризма в России?",
        optionA: "27 декабря",
        optionB: "12 июня",
        optionC: "27 апреля",
        optionD: "12 апреля",
        correctOption: "optionC"
    },

    {
        question: "О чем гласил второй Манифест Николая II от 17 октября 1905 года?",
        optionA: "О ввидении новых законов",
        optionB: "Об усовершенствовании государственного порядка",
        optionC: "О выборах депутатов",
        optionD: "Все варианты",
        correctOption: "optionB"
    }

    // {
    //     question: "О чем гласил первый Манифест Николая II от 6 августа 1905 года?",
    //     optionA: "24",
    //     optionB: "30",
    //     optionC: "36",
    //     optionD: "37",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "____ is the capital of Nigeria ?",
    //     optionA: "Abuja",
    //     optionB: "Lagos",
    //     optionC: "Calabar",
    //     optionD: "Kano",
    //     correctOption: "optionA"
    // },

    // {
    //     question: "Los Angeles is also known as ?",
    //     optionA: "Angels City",
    //     optionB: "Shining city",
    //     optionC: "City of Angels",
    //     optionD: "Lost Angels",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "What is the capital of Germany ?",
    //     optionA: "Georgia",
    //     optionB: "Missouri",
    //     optionC: "Oklahoma",
    //     optionD: "Berlin",
    //     correctOption: "optionD"
    // },

    // {
    //     question: "How many sides does an hexagon have ?",
    //     optionA: "Six",
    //     optionB: "Sevene",
    //     optionC: "Four",
    //     optionD: "Five",
    //     correctOption: "optionA"
    // },

    // {
    //     question: "How many planets are currently in the solar system ?",
    //     optionA: "Eleven",
    //     optionB: "Seven",
    //     optionC: "Nine",
    //     optionD: "Eight",
    //     correctOption: "optionD"
    // },

    // {
    //     question: "Which Planet is the hottest ?",
    //     optionA: "Jupitar",
    //     optionB: "Mercury",
    //     optionC: "Earth",
    //     optionD: "Venus",
    //     correctOption: "optionB"
    // },

    // {
    //     question: "where is the smallest bone in human body located?",
    //     optionA: "Toes",
    //     optionB: "Ears",
    //     optionC: "Fingers",
    //     optionD: "Nose",
    //     correctOption: "optionB"
    // },

    // {
    //     question: "How many hearts does an Octopus have ?",
    //     optionA: "One",
    //     optionB: "Two",
    //     optionC: "Three",
    //     optionD: "Four",
    //     correctOption: "optionC"
    // },

    // {
    //     question: "How many teeth does an adult human have ?",
    //     optionA: "28",
    //     optionB: "30",
    //     optionC: "32",
    //     optionD: "36",
    //     correctOption: "optionC"
    // }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}