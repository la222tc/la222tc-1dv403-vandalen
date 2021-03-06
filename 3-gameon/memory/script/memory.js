"use strict";

function memory(rows, cols) {

    //var that = this;
    var firstGuess;
    var secondGuess;
    var newMem = [];
    var flippedBrick = 0;
    var numberOfTries = 0;
    var numberOfPairs = (rows * cols) / 2;
    var pairsFound = 0;



    function createMemoryBoard() {
            newMem = RandomGenerator.getPictureArray(rows, cols);

            createTable(rows, cols);

        }
        //  console.log(newMem);



    function createTable(rows, cols) {
        var div = document.getElementById("content");
        var table = document.createElement("table");
        var number = 0;
        table.id = "memoryTable";

        div.appendChild(table);

        for (var i = 0; i < rows; i++) {
            var row = document.createElement("tr");
            table.appendChild(row);

            for (var j = 0; j < cols; j++) {
                var col = document.createElement("td");

                var img = document.createElement("img");
                img.setAttribute("src", "pics/0.png");


                var a = document.createElement("a");
                a.setAttribute("href", "#");

                row.appendChild(col);
                col.appendChild(a);
                a.appendChild(img);
                img.className = newMem[number];
                number++;

                a.addEventListener("click", function(e) {
                    if (flippedBrick === 2) {
                        return flippedBrick = 0;
                    }
                    //   console.log(flippedBrick);
                    var target;

                    if (e.target === this) {
                        target = e.target.childNodes[0];
                    }

                    else {

                        target = e.target;
                    }

                    turnBrick(target);
                });
            }
        }

        // Reset button
        var button = document.createElement("button");
        div.appendChild(button);
        button.id = "button";
        button.innerHTML = "Reset";

        button.addEventListener("click", function(e) {
            div.innerHTML = "";
            memoryapp.init();
        });
    }

    function turnBrick(target) {
        for (var i = 0; i < newMem.length; i++) {


            if (target.className == newMem[i]) {

                target.src = "pics/" + newMem[i] + ".png";
            }

        }
        flippedBrick += 1;
        numberOfTries += 1;

        if (flippedBrick === 1) {
            firstGuess = target;
            console.log(firstGuess);
        }

        if (flippedBrick == 2) {
            secondGuess = target;
            console.log(secondGuess);
        }

        if (flippedBrick === 2 && firstGuess.className === secondGuess.className) {
            flippedBrick = 0;
            pairsFound += 1;
            if (pairsFound === numberOfPairs) {
                alert("Grattis du klarade spelet på " + numberOfTries / 2 + " försök");
            }
        }

        else if (flippedBrick === 2 && firstGuess.className != secondGuess.className) {

            window.setTimeout(function() {
                firstGuess.src = "pics/0.png";
                secondGuess.src = "pics/0.png";
                flippedBrick = 0;
            }, 500);
        }

    }
    createMemoryBoard();
}
