/*Pig Game JavaScript*/
var activePlayer,currentScore,score,gamingCondition;
init();
activePlayer=0;
currentScore=0;
score=[0,0];
document.querySelector('.btn-roll').addEventListener('click',function(){
	var dice;
	if(gamingCondition){
		//update value to current score
		dice=Math.floor(Math.random()*6)+1;
		if (dice>1){
		currentScore+=dice;
		document.getElementById('current-'+activePlayer).textContent=currentScore;
		//updating the respective dice image
		document.querySelector('.dice').style.display='block';
		document.querySelector('.dice').src='dice-'+dice+'.png';
		}else{
			nextPlayer();
		}
	}
	
});
document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamingCondition){
		score[activePlayer]+=currentScore;
		document.getElementById('score-'+activePlayer).textContent=score[activePlayer];
		var input=document.querySelector('.final-score').value;
		if(!input)input=100;
		if(score[activePlayer]>=input){
		document.querySelector('#name-'+activePlayer).textContent='Winner!!';
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		gamingCondition=false;
		}else{
			nextPlayer();
		}
	}
});
document.querySelector('.btn-new').addEventListener('click',init);
function nextPlayer(){
	document.querySelector('.dice').style.display='none';
	currentScore=0;
	document.getElementById('current-'+activePlayer).textContent='0';
	document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
	activePlayer===0?activePlayer=1:activePlayer=0;
	document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
}
function init(){
	activePlayer=0;
	currentScore=0;
	score=[0,0];
	gamingCondition=true;
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.querySelector('#name-0').textContent='Player 1';
	document.querySelector('#name-1').textContent='Player 2';
	document.querySelector('.dice').style.display='none';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.add('active');
}