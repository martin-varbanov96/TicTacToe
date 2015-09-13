step = 2;
function choice(name){
    var inputSquare = document.getElementById(name).innerHTML;
    if (isBlank(inputSquare)==false) {
        alert("Spot has already been filled");
    } else if(isX()==true){
        document.getElementById(name).innerHTML = "X";
        if (isWin()) {
            alert("Player Uno wins!");
            count = 3;
            reset();
        }
        step++;
    } else {
        document.getElementById(name).innerHTML = "O";
        if (isWin()) {
            alert("Player Dos wins!");
            count = 2;
            reset();
        }
        step++;
    }

}
function reset(){
    document.getElementById("Q").innerHTML ="_";
    document.getElementById("W").innerHTML ="_";
    document.getElementById("E").innerHTML ="_";
    document.getElementById("A").innerHTML ="_";
    document.getElementById("S").innerHTML ="_";
    document.getElementById("D").innerHTML ="_";
    document.getElementById("Z").innerHTML ="_";
    document.getElementById("X").innerHTML ="_";
    document.getElementById("C").innerHTML ="_";

}

function isWin(){
    var Q = document.getElementById("Q").innerHTML;
    var W = document.getElementById("W").innerHTML;
    var E = document.getElementById("E").innerHTML;
    var A = document.getElementById("A").innerHTML;
    var S = document.getElementById("S").innerHTML;
    var D = document.getElementById("D").innerHTML;
    var Z = document.getElementById("Z").innerHTML;
    var X = document.getElementById("X").innerHTML;
    var C = document.getElementById("C").innerHTML;
    if (
        ((Q == W)&&(W==E)&&(Q!="_"))||
        ((A == S)&&(S==D)&&(A!="_"))||
        ((Z == X)&&(X==C)&&(Z!="_"))||
        ((Q == A)&&(A==Z)&&(Q!="_"))||    
        ((W == S)&&(S==X)&&(W!="_"))||
        ((E == D)&&(D==C)&&(E!="_"))||
        ((Q == S)&&(S==C)&&(Q!="_"))||
        ((E == S)&&(S==Z)&&(E!="_"))
        ) {
        return true;
    } else {
        return false;
    }
    return false;
}
        
function isBlank(square){
    if (square === '_') {
        return true;
    } else {
        return false;
    }
    return false;
}

function isX(){
    if (step%2==0) {
        return true;
    } else {
        return false
    }
    return false;
}