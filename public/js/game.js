levels = [{
    name: "animals",
    image: "https://loremflickr.com/180/100",
    prompts: [{
        name: "cow",
        text: "FIND THE COW",
        audio: ""
    }, {
        name: "horse",
        text: "FIND THE HORSE",
        audio: ""
    }, {
        name: "chicken",
        text: "FIND THE CHICKEN",
        audio: ""
    }, {
        name: "duck",
        text: "FIND THE DUCK",
        audio: ""
    }],
    choices: [{
        name: "cow",
        image: "./images/cow.png",
        sound: "",

    }, {
        name: "horse",
        image: "./images/horse.png",
        sound: "",
    }, {
        name: "chicken",
        image: "./images/chicken.png",
        sound: "",
    }, {
        name: "duck",
        image: "./images/duck.png",
        sound: "",
    }]
}, {
    name: 'shapes',
    image: "https://loremflickr.com/180/100",
    prompts: [{
        name: "square",
        text: "FIND THE SQUARE",
        audio: ""
    }, {
        name: "triangle",
        text: "FIND THE TRIANGLE",
        audio: ""
    }, {
        name: "circle",
        text: "FIND THE CIRCLE",
        audio: ""
    }, {
        name: "star",
        text: "FIND THE STAR",
        audio: ""
    }],
    choices: [{
        name: "square",
        image: "./images/shapes/square.png",
        sound: "",

    }, {
        name: "triangle",
        image: "./images/shapes/triangle.png",
        sound: "",
    }, {
        name: "circle",
        image: "./images/shapes/circle.png",
        sound: "",
    }, {
        name: "star",
        image: "./images/shapes/star.png",
        sound: "",
    }]
}]
var selectedLevel = ''

var showLevels = () => {
    for (const key in levels) {
        if (levels.hasOwnProperty(key)) {
            const element = levels[key];
            console.log('element:', element);
            var levelBttn = $('<button type="button" class="btn btn-outline-primary level-option">')
            $('#levels').append(levelBttn);
            $(levelBttn).attr('value', element.name);
            $(levelBttn).text(element.name)
        }
    }
}

showLevels();

$('.level-option').click(function (e) {
    e.preventDefault();
    selectedLevel = $(this).attr('value');
    console.log('selectedLevel:', selectedLevel);
    hideLevels();
    var correctAnswer = givePrompt(selectedLevel);
    showChoices(selectedLevel, correctAnswer);
});

var hideLevels = () => {
    $('#levels').hide(500, function () {

    });
}

var givePrompt = (selectedLevel) => {
    for (const key in levels) {
        if (levels.hasOwnProperty(key)) {
            const element = levels[key];
            console.log('element:', element);
            if (element.name === selectedLevel) {
                var randomInt = Math.floor(Math.random() * element.prompts.length)
                var prompt = element.prompts[randomInt]
                promptDiv = $('#prompt')
                $(promptDiv).text(prompt.text);
                return prompt.name
            }
        }
    }
}

var showChoices = (selectedLevel, correctAnswer) => {
    for (const key in levels) {
        if (levels.hasOwnProperty(key)) {
            const element = levels[key];
            if (element.name === selectedLevel) {
                var choices = element.choices;
                choices.forEach(element => {
                    console.log('element name:', element.name);
                    newImg = '<img id="' + element.name + '-img" class="card-img-top" src="" alt="">'
                    newDiv = '<div id="' + element.name + '-div" class="card object-card"></div>'
                    $('#game-body').append(newDiv);
                    $('#' + element.name + '-div').append(newImg);
                    $('#' + element.name + '-div').attr('value', element.name);
                    $('#' + element.name + '-img').attr('src', element.image);
                    $('#' + element.name + '-img').attr('value', element.name);
                });
            }
        }
    }
    clickListen(correctAnswer);

}

var clickListen = (correctAnswer) => {
    $('.object-card').click(function (e) {
        e.preventDefault();
        var selectedObject = $(this).attr('value');
        checkClick(selectedObject, correctAnswer);
    });
}

var checkClick = (selectedObject, correctAnswer) => {
    console.log('correct Answer', correctAnswer);
    console.log('selected object:', selectedObject);
    if (correctAnswer === selectedObject) {
        console.log("YAYAYAYAYAYAY");
        var correctAnswer = givePrompt(selectedLevel);
        var data = {
            userID: 1,
            objectName: selectedObject,
            isCorrect: 1
        }
        $.post("/api/sessions", data,
            function (data, textStatus, jqXHR) {
                console.log("success with:", data);
            }
        );
        $('#game-body').html('');
        showChoices(selectedLevel, correctAnswer);

    } else {
        var data = {
            userID: 1,
            objectName: selectedObject,
            isCorrect: 0
        }
        $.post("/api/sessions", data,
            function (data, textStatus, jqXHR) {
                console.log("success with:", data);
            }
        );
        console.log("TRY AGAIN!!!!!");
    }
}