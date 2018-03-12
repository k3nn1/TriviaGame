//      Marvel Trivial Trivia       //
$(document).ready(function() {
    
    var correct = 0;
    var incorrect = 0;
    var counter = 30;
    var unAnswered = 0;
    
    var intervalId;

    // ---------- Questions & Answers --------------------------
    var qa = {
        marvelArray: [{question: "Captain America's shield is made of?", multipleChoices: ["Titanium Alloy", "Mithril", "Adamantium", "Vibranium"], answer:3, id: "1",
        }, {question: "Which of these characters was not in the post-credits for Guardians of the Galaxy?", multipleChoices:["The Collector", "Adam Warlock", "Cosmo the Space Dog", "Howard the Duck"], answer:1, id: "2",
        }, {question: "Who is Loki's biological father?", multipleChoices: ["Volstagg", "Jutunn", "Odin", "Laufey"], answer:3, id: "3",
        }, {question: "Who said this: 'Well now I'm standing. Happy? We're all standing now. Bunch of jackasses, standing in a circle.'", multipleChoices:["Rocket Racoon", "Star-Lord", "TOny Stark", "Spiderman"], answer:0, id: "4",
        }, {question: "Name the character who acts as a go-between for Thanos?", multipleChoices:["The Slave", "The Minion", "THe Mouth of Thanos", "The Other"], answer:3, id: "5",
        }, {question: "Who ends up with the Aether after the events of 'Thor: The Dark World'?", multipleChoices:["The Collector", "Jane Foster", "Thor and his companions","Algrim"],answer:0, id: "6",
        }, {question: "Who was Bruce Banner's love interest in 'The Incredible Hulk'?", multipleChoices:["Eleanor Ross", "Peggy Carter", "June Carter", "Betty Ross"], answer:3, id: "7",
        }, {question: "What is Peter Parker's middle name?", multipleChoices:["William", "Benjamin", "Chad", "Constantine"], answer:1, id: "8",
        }, {question: "Which villain possessed the Infinity Gems?", multipleChoices:["Thanos","Galactus","Ultron", "Apocolypse"], answer:0, id: "9",
        }, {question: "Which comic book writer created Hawkeye?", multipleChoices:["Ang Lee", "Bob Kane", "Stan Lee", "Jack Kirby", "Roy Thomas"], answer:2, id: "10",
        }   
        ]};
        console.log("----variable qa----");
        console.log(qa);
        console.log(qa.marvelArray); //checking my arrays
        // console.log(question.id)
        // console.log(qa.marvelArray[0].id);
        // console.log(qa.marvelArray[1]);

    // -------- Setting timer functions ------------------------
    
    function timer() {
        if (counter > 0) {
            counter--;
        }
        if (counter === 0) {
            // alert("Time Up!");
            stop();
            endGame();
        }
        $("#counter").html("<h2>" + counter + "</h2>");
    };

    var clockRunning = false;
    function  runTimer() {
        if(!clockRunning) {
            intervalId = setInterval(timer, 1000);
            clockRunning = true;
        }
    };
    
    function stop() {
        clearInterval(intervalId);
        intervalId = undefined;
        clockRunning = false;
    };

    // ------------ Game Data Template ------------------------
    function showTrivia() {

        function gamePage(who) {
            var whoamI = "<form action='' id='question'>" + "<h3>"+who.question+"</h3>"  + "<br>";
            var multipleChoices = who.multipleChoices;
            // console.log(qa.marvelArray.id);
            for (i=0; i < multipleChoices.length; i++) {
                var multipleChoice = multipleChoices[i];
                // console.log(multipleChoice);
                whoamI = whoamI + "  "  +"<input type ='radio' name='" + who.id + "' value =" + i + ">" + "<class='picks'>" + multipleChoice;
                console.log(whoamI);
            }
            return whoamI + "</form>";
        };
        
        function gameData() {
            var data = "";
            for (var i=0; i < qa.marvelArray.length; i++) {
                data = data + gamePage(qa.marvelArray[i]);
            }
            $("#trivia").append(data);
            
        };
        console.log(gameData());
        $("#doneBtn").html("DONE")
    };

    // ---------- Game Data Results -----------------------;

    function  check(question) {
        var answers = $('[name= ' + question.id +']');
        var correct = answers.eq(question.answer);
        var x = correct.is(":checked");              // ----check this
        return x;
    };

    function checkAns() {
        for (var i=0; i < qa.marvelArray.length; i++) {
            if (check(qa.marvelArray[i])) {
                correct++;
            } else {
                if (filledIn(qa.marvelArray[i])) {
                    incorrect++;
                } else {
                    unAnswered++;
                }
            }
        }
    };
    
    function filledIn(question) {       // check to see if answered or not
        var filled = false;
        var answers = $("[name= " + question.id +"]");
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                filled = true;
            }
        }
        return filled;
    }
    
    // --------------- Game functions  --------------------
    $("#start").on("click",function() {
        startTrivia();
    });

    function startTrivia() {
        $("#start").hide();
        $(".description").hide();
        $("#trivia").show();
        $("#doneBtn").show();
        runTimer();
        showTrivia();
    };

    function endGame() {
        checkAns();
        finalScores = "<h2> Time Remaining: <span>" + counter + "</span></h2>" + "<h3>Correct Answer: " + correct + "</h3><h3>Incorrect Answer: " + incorrect + "</h3><h3>Unanswered: " + unAnswered + "</h3>";
        $("#trivia").html(finalScores);
        stop();
        $("#Thanos").show();
    };
    
    $("#doneBtn").on("click", function() {
        endGame();
        $("#counter").hide();
        $("#startover").html("Start Over");
        $("#doneBtn").hide();
        // $("#startover").show();
    });

    $("#startover").on("click", function() {
        reset();
    })
    // function reset() {           // ------------Commented this out because it wasn't working how I wanted it to do --//
    //     var correct = 0;
    //     var incorrect = 0;
    //     var counter = 30;
    //     var unAnswered = 0;
    //     var intervalId;
    //     startTrivia();
    //     $("#counter").hide();
    // }
})