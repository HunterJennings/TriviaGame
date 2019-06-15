var triviaData = [
    {
        "question": "Who was the legendary Benedictine monk who invented champagne?",
        "answers": [ "Dom Perignon","Tony Stark","Connor Mcgregor","Leonardo Devinci"],
        "correctAnswer": 0
    },
    {
        "question":"Name the largest freshwater lake in the world?",
        "answers": [ "Lake Stevens","Lake Texas","Lake Superior","Lake Bake"],
        "correctAnswer": 2
    },
    {
        "question": "Where would you find the Sea of Tranquility?",
        "answers": [ "The Earth","The Sun","Mars","The Moon"],
        "correctAnswer": 3
    },
    {
        "question": "What is someone who shoes horses called?",
        "answers": [ "A horseshoe","A farrier","A shoehorse","A trouter"],
        "correctAnswer": 1
    },
    {
        "question": "What item of clothing was named after its Scottish inventor?",
        "answers": [ "V-Neck","A Mackintosh","A Tuxedo","A Skirt"],
        "correctAnswer": 1
    },
    {
        "question": "What kind of weapon is a falchion?",
        "answers": [ "A sword","A laser rifle","A knife","A spear"],
        "correctAnswer": 0
    },
    {
        "question": "Which word goes before vest, beans and quartet?",
        "answers": [ "Tortilla","Sweater","String","Penny"],
        "correctAnswer": 2
    },
    {
        "question": "What is another word for lexicon?",
        "answers": [ "Dictionary","Book","Document","Magazine"],
        "correctAnswer": 0
    },
    {
        "question": "Name the seventh planet from the sun.",
        "answers": [ "Earth","Pluto","The SUN","Uranus"],
        "correctAnswer": 3
    },
    {
        "question": "Who invented the rabies vaccination?",
        "answers": [ "Justin Beiber","Louis Pasteur","Captin Jack Sparrow","Roger Rabbit"],
        "correctAnswer": 1
    }
];

$(document).ready(function() {
for (var itemIndex=0; itemIndex < triviaData.length; itemIndex++) {
    var triviaItem = triviaData[itemIndex];
    var $questionEl = $("#triviaList");

    $questionEl.append("<p>" + triviaItem.question + "</p>");
    for (var i=0; i < triviaItem.answers.length; i++) {
        $questionEl.append("<input id='item" + itemIndex + "answer" + i +"' type='radio' name='item" + itemIndex + "Answer' value='" + i + "'>");
        $questionEl.append("<label for='item" + itemIndex + "answer" + i +"'>" + triviaItem.answers[i] + "</label>");
    }
}
});

function checkUserInput() {
    var wrongAnswers=0;
    var rightAnswers=0;

    for (var i=0; i < triviaData.length; i++) {
        var itemAnswer = $("input[name='item" + i + "Answer']:checked").val();
        if (triviaData[i].correctAnswer.toString() === itemAnswer) {
            rightAnswers++; 
        }else {
            wrongAnswers++;
        }
    }
    alert ("Correct: " + rightAnswers + " | Incorrect: " + wrongAnswers);
}

function startGame() {
    var secondsLeft = 45;
    var $countDownEl = $("#countDown");

    var x = setInterval(function() {
        secondsLeft--;
        $countDownEl.html("Time remaining: " + secondsLeft + " seconds left");
        if (secondsLeft === 0){
            clearInterval(x);
            checkUserInput();
        }
        
      }, 1000);
}