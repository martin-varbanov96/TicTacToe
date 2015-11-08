$(document).ready(function () {
    game();
});

function game() {
    var step = 0;
    var winBool = false;

    $('.freeSpot').click(function () {
        if ($(this).attr("class") == "freeSpot") { 
            $(this).attr('class', "marked");
            $(this).html("X");
            winBool = checkWin();
            if (winBool == true) {
                alert("Player wins");
            }
        }
        botTurn();
    });

    //The bot's turn    
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
        if ((S != "X") && (isFilled(S) == false)) {
            $("#S").attr("class", 'botMarked');
            $("#S").html("O");
            return;
        }
        if (isFilled(S)) {
            checkWinMove();
        }
        if (checkWin()) { 
            alert("bot win hue hue hue ");
        }
        
        function checkWinMove() {
            //qwe win 
            if ((Q == "O") && (W == "O") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((W == "O") && (E == "O") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((Q == "O") && (E == "O") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
            //asd win
            else if ((A == "O") && (S == "O") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((S == "O") && (D == "O") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
            //zxc win
            else if ((Z == "O") && (X == "O") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((Z == "O") && (C == "O") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((X == "O") && (C == "O") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
        //qaz win
            else if ((Q == "O") && (A == "O") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else if ((A == "O") && (Z == "O") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((Q == "O") && (Z == "O") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
        //wsx win
            else if ((W == "O") && (S == "O") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((S == "O") && (X == "O") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
        // EDC win       
            else if ((E == "O") && (D == "O") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((E == "O") && (C == "O") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((D == "O") && (C == "O") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
        //qsc win
        
            else if ((Q == "O") && (S == "O") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((S == "O") && (C == "O") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
        // zse win
        
            else if ((Z == "O") && (S == "O") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((S == "O") && (E == "O") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else {                
                predictPlayerWin();
            }
        }
        function predictPlayerWin() {
            if (((W == "") || (D == "") || (X == "") || (A == ""))) {
                if ((Q == "X") && (C == "X") && (step == 0)) {
                    step++;
                    fillSideSpots();
                    return;
                }
                if ((Z == "X") && (E == "X") && (step == 0)) {
                    step++;
                    fillSideSpots();
                    return;
                }                
            else {
                checkPlayerWin();
            }
         }

            function fillSideSpots() {                 
                if ((isFilled(X) == false)) {
                    $("#X").attr("class", 'botMarked');
                    $("#X").html("O");
                    return;
                }                
                else if ((isFilled(D) == false)) {
                    $("#D").attr("class", 'botMarked');
                    $("#D").html("O");
                    return;
                }        
                else if ((isFilled(W) == false)) {
                    $("#W").attr("class", 'botMarked');
                    $("#W").html("O");
                    return;
                }        
                else if ((isFilled(A) == false)) {
                    $("#A").attr("class", 'botMarked');
                    $("#A").html("O");
                    return;
                }
            }
        }
        function checkPlayerWin() {
            //qwe win 
            if ((Q == "X") && (W == "X") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((W == "X") && (E == "X") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((Q == "X") && (E == "X") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
            //asd win
            else if ((A == "X") && (S == "X") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((S == "X") && (D == "X") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
            //zxc win
            else if ((Z == "X") && (X == "X") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((Z == "X") && (C == "X") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((X == "X") && (C == "X") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
        //qaz win
            else if ((Q == "X") && (A == "X") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else if ((A == "X") && (Z == "X") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((Q == "X") && (Z == "X") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
        //wsx win
            else if ((W == "X") && (S == "X") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((S == "X") && (X == "X") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
        // EDC win
        
            else if ((E == "X") && (D == "X") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((E == "X") && (C == "X") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((D == "X") && (C == "X") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
        //qsc win
        
            else if ((Q == "X") && (S == "X") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((S == "X") && (C == "X") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
        // zse win
        
            else if ((Z == "X") && (S == "X") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((S == "X") && (E == "X") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else { 
                casualMove();
            }
        } 
        function casualMove() {
             if ((Q != "X") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((E != "X") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((C != "X") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((Z != "X") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else if ((X != "X") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((D != "X") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((W != "X") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
            else if ((A != "X") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
            
        }
    }

    // checks is value is filled returns bool
    function isFilled(val) {
        if ((val == "X") || (val == "O")) {
            return true;
        }
        return false;
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

    }       
}
