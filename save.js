var methods = {
	quad: function (a, x) {
    return ((1 / a) * (x ** 2));
  },
	encode: function (base, width, key){
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "z", "q", "x", " ", ",", ".", "!", "?", "-"];
    var height = ((1/base) * ((width) ** 2));
    var hEach = height / abc.length; // height allocated to each letter in abc.
    var keyLetters = key.split("");
    var final = "";
    for (i=0;i<keyLetters.length;i++){
        var cv = abc.indexOf(keyLetters[i]);  // cv = current value.
        var seed = (Math.random());
        var max = hEach * (cv + 1);
        var min = max - hEach;
        var precision = 10000;
        var val = (((seed * (max - min) + min) * precision));
        var letter = (Math.round(val));
        if (i == keyLetters.length - 1) {
            final += letter;
        } else {
            final += letter + ":";
        }
    }
    return final;
  }
};

module.exports = methods; 

/*
var quad = function (a, x) {
    return ((1 / a) * (x ** 2));
  }

var encode = function (base, width, key){
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "z", "q", "x", " ", ",", ".", "!", "?", "-"];
    var height = ((1/base) * ((width) ** 2));
    var hEach = height / abc.length; // height allocated to each letter in abc.
    var keyLetters = key.split("");
    var final = "";
    for (i=0;i<keyLetters.length;i++){
        var cv = abc.indexOf(keyLetters[i]);  // cv = current value.
        var seed = (Math.random());
        var max = hEach * (cv + 1);
        var min = max - hEach;
        var precision = 10000;
        var val = (((seed * (max - min) + min) * precision));
        var letter = (Math.round(val));
        if (i == keyLetters.length - 1) {
            final += letter;
        } else {
            final += letter + ":";
        }
    }
    return final;
}

function func() {
    var base = document.getElementById("b").value;
    var width = document.getElementById("w").value;
    var text = document.getElementById("t").value;
    
    document.getElementById("val").innerHTML = encode(base, width, text);
}
*/