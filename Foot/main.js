function players (name,number,position,battAv) {
	return {
		name : name, jersyNumber: number,position : position, battingAverage : battAv
	}
}

var player1 = players('CR',7,'Lavant-centre', .215) ; 
var player2 = players('Messi',8,'milieu défnesif',.316)
var player3 = players('raoui',1,'left',.356)
var player4 = players('msekni',2,'right',.317)
var player5 = players('syrine',3,'milieu défnesif',.116)
var roster = [player1,player2,player3,player4,player5]


for (var i=0;i<roster.length;i++){
var Joueur = document.createElement("tr")
var nom = document.createElement("td")
var num = document.createElement("td")
var Pos = document.createElement("td")
var BatAv = document.createElement("td")
var button = document.createElement("button")
document.getElementById("joueurs").appendChild(Joueur);
Joueur.appendChild(nom)
Joueur.appendChild(num)
Joueur.appendChild(Pos)
Joueur.appendChild(BatAv)
Joueur.appendChild(button)
nom.innerHTML=roster[i].name
num.innerHTML=roster[i].jersyNumber
Pos.innerHTML=roster[i].position
BatAv.innerHTML=roster[i].battingAverage
button.innerHTML="delete"

}

function highestBatAv (roster) {
	var result = roster[0]
	for (var i =0; i<roster.length;i++) {
		if (roster[i].battingAverage > result.battingAverage ){
        result = roster[i]
        
		}
	}
	return result
}
var Highest = highestBatAv (roster)
document.getElementById("Highest").innerHTML = Highest.name + " " + Highest.jersyNumber+ " " + Highest.position+ " " + Highest.battingAverage
function searchPlayer(player) {
return player.name + ' ' + player.jersyNumber + ' ' + player.position + ' ' + player.battingAverage
}


function addPlayer (player) {
roster.push(player)
}

function remove (player) {
	for (var i=0 ;i<roster.length;i++) {
if (roster[i].name === player.name) {
roster.splice(i,1)
	}
}
}

function myFunction() {
  var name = document.getElementById("name").value
  var jersy = document.getElementById("number").value
  var pos = document.getElementById("position").value
  var batav = document.getElementById("batting").value
 var player = players (name,jersy,pos,batav)
 console.log(player)
 addPlayer(player)

}
console.log(roster)

