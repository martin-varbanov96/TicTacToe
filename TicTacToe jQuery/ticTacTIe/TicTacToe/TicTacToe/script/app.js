$(document).ready(function () {
    game();
});

function game() {
    var turn = 0;
    var winBool = false;

    $('.freeSpot').click(function () {
        console.log(this); 
        $(this).attr('class', "marked");
        $(this).html("X");
        winBool = checkWin();
        if (winBool == true) {
            alert("Player wins");
        }
        botTurn();
    });

    //TODO- finish for every turn
    function botTurn() {
        var Q = $('#Q').text();
        var W = $('#W').text();
        var E = $('#E').text();
        var A = $('#A').text();
        var S = $('#S').text();
        var D = $('#D').text();
        var Z = $('#Z').text();
        var X = $('#X').text();
        var C = $('#C').text();
        if (S != "X") {
            $("#S").attr("class", 'botMarked');
            $("#S").html("O"); 
        }
    }

    
    //checks if someone has won
    function checkWin() {
        var Q = $('#Q').text();
        var W = $('#W').text();
        var E = $('#E').text();
        var A = $('#A').text();
        var S = $('#S').text();
        var D = $('#D').text();
        var Z = $('#Z').text();
        var X = $('#X').text();
        var C = $('#C').text();
        if (((Q == W) && (Q == E) && isFilled(Q)) ||
            ((A == S) && (S == D) && isFilled(A)) ||
            ((Z == X) && (X == C) && isFilled(Z)) ||
            ((Q == A) && (A == Z) && isFilled(Q)) ||
            ((W == S) && (S == X) && isFilled(W)) ||
            ((E == D) && (D == C) && isFilled(E)) ||
            ((Q == S) && (S == C) && isFilled(Q)) ||
            ((E == S) && (S == Z) && isFilled(E))     
            ) {
            return true;         
        }
        return false;

        function isFilled(val) {
            if ((val == "X") || (val == "O")) { 
                return true;
            }
            return false;
        }
    }       
}
