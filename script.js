//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}
function sleep_in(x,y){
    return x;
}

function sleep_in(weekDay,vacation){
    if(weekDay === false || vacation === true) {
        return true;
    }else{
        return false;
    }
}

function monkey_trouble(a_smile,b_smile){
    if(a_smile === b_smile){
        return true;
    }else {
        return false;
    }
}

function string_times(x,n){
    var answer = "";

    for(var i = 0; i< n; i++) {
        answer = answer + x;
    }
    return answer;
}

function front_times(x,n){
    if(x.length<3){
        var boi = x;
    }else{
        var boi = x.substring(0,3);
    }
    var answer = "";
    for(var i = 0; i < n ; i++){
        answer = answer + boi;
    }
    return answer;
}

function string_bits(x){
    var boi = "";
    for(var i = 0; i < x.length; i+=2){
        boi = boi + x[i];

    }
    return boi;
}

function caughtSpeeding(speed,vacation){
    if(vacation == true){
     speed = speed - 5;
    }
    if(speed <= 60){
        return 0;
    }
    if(speed >= 61 && speed <= 80){
        return 1;
    }
    return 2;
}

function fizz_buzz(num){
    if(num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz";
    }
    if(num % 3 == 0){
        return "Fizz";
    }
    if(num % 5 == 0){
        return "Buzz";
    }
    return num + "!";
}

function teaParty(tea,candy){
    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea >= candy * 2 || candy >= tea * 2){
        return 2;
    }
    if(tea >= 5 && candy >= 5){
        return 1;
    }
}

function blackjack (intOne,intTwo){
    if(intOne <= 21 && intOne > intTwo){
        return intOne;
    }
    if(intTwo <= 21 && intTwo > intOne){
        return intTwo;
    }
    if(intOne > 21 && intTwo > 21) {
        return 0;
    }
    if(intOne < intTwo && intTwo > 21){
        return intOne;
    }
    if(intTwo < intOne && intOne > 21){
        return intTwo;
    }
}

function loneSum(a,b,c){
    if(a == b && b == c && c == a){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(b == c){
        return a;
    }
    if(c == a){
        return b;
    }
    return a + b +c;
}









