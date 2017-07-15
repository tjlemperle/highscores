
var highScores =[
    {
        score: 100,
        name: "Ashley"
        
    }, 
    {
        score: 99,
        name: "Jacob"

    }
];
             
        function myFunction() {
                var nameInput = document.getElementById("nameInput").value
                var scoreInput = document.getElementById("scoreInput").value
                if(!Number(scoreInput)){
                    alert("Please enter a valid score and try again");
                }else{

                highScores.push({name: nameInput, score: scoreInput});
                
                highScores.sort(function(a, b){return a.score - b.score});

                console.log(highScores);

                var i;

                highScores.forEach(function(score, i) {

                ++i;

                var table = document.getElementById("highScoresTable");
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = i;
                cell2.innerHTML = score.name;
                cell3.innerHTML = score.score;

                })
                }
                 
                               
        }

      

        function clearText() {

            document.getElementById("nameInput").value ="";
            document.getElementById("scoreInput").value ="";

        }
        
