
// Define helloSpeaker and byeSpeaker objects
var helloSpeaker = {
    speak: function(name) {
        console.log("Hello " + name + "!");
    }
};

var byeSpeaker = {
    speak: function(name) {
        console.log("Goodbye " + name + "!");
    }
};

//  code to iterate through names
(function () {
    var names = ["hicham", "mehdi", "mouhamed", "ali", "ahmed", "oussama", "yazed", "mouade", "bilale", "youssef"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
