/*
The Code for Tic-Tac-Toe
the code follows the following logic
1) Player makes a move
2) Computer checks if its winning in the next move. If yes, plays the winning move and exits else goes to step 3.
3) Computer check if the player is winning in the next move. If yes then plays a blocking move and then continues the game.
4) If neither is winning, the computer plays an 'Intelligent move' which I defined as making a mark in a path that has most number of blank spaces
*/

window.onload = function(){
	//data sctructures for the game
	var game=[[0,0,0],[0,0,0],[0,0,0]];
	var PoLR=[0,0,0,0,0,0,0,0]; //Path of least resistance
	var computerScore = 0;
	var playerScore = 0;

	//Click handlers
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			var id = ''+i+''+j;
			//console.log(id);
			document.getElementById(id).style.width='100%';
			document.getElementById(id).style.height='100px';
			document.getElementById(id).addEventListener('click', function(event){
				//console.log(event.toElement.id);
				drawX(event.toElement.id);
			})
		}
	}	

	function drawX(id){
		var i=id[0]
		var j=id[1]
		//console.log('index ' + i + ' ' + j);
		console.log('gamestate : ');
		console.log(game);
		console.log(i+''+j);
				if(game[i][j]==0){ //check to see if the box is empty
					game[i][j]=1;
					document.getElementById(id).innerHTML='X';
					//console.log(getWinner());
					checkState();

					computerMove();
					
					checkState();
					
				}
	}

	function computerMove(){
		getPoLR();
		var win=checkProspectiveWinner();

		for(i=0;i<win.length;i++){
			if(win[i].winner==0){//make winning move
				findSpaceAndInsert0(win[i].index);
				console.log('------');
				return;
			}
		}

		for(i=0;i<win.length;i++){
			if(win[i].winner==1){//block X's winning move
				findSpaceAndInsert0(win[i].index);
				console.log('------');
				return;
			}
		}

		for(i=0;i<win.length;i++){
			if(win[i].winner==-1){//make intelligent move
				var move = intelligentMove();
				insertO(move);
				console.log('------');
				return;
			}
		}

		var move = intelligentMove();
		insertO(move);
	}

	function checkProspectiveWinner(){
			var win =[];
			if(PoLR[0]==1){
				if(game[0][0]==1 && game[1][0]==1 || game[1][0]==1 && game[2][0]==1 || game[0][0]==1 && game[2][0]==1){
						win.push({winner:1,index:0});
				}
				if(game[0][0]==2 && game[1][0]==2 || game[1][0]==2 && game[2][0]==2 || game[0][0]==2 && game[2][0]==2){
						win.push({winner:0,index:0});  
				}
			}
			if(PoLR[1]==1){
				if(game[0][1]==1 && game[1][1]==1 || game[1][1]==1 && game[2][1]==1 || game[0][1]==1 && game[2][1]==1){
						win.push({winner:1,index:1});
				}
				if(game[0][1]==2 && game[1][1]==2 || game[1][1]==2 && game[2][1]==2 || game[0][1]==2 && game[2][1]==2){
						win.push({winner:0,index:1});
				}
			}
			if(PoLR[2]==1){
				if(game[0][2]==1 && game[1][2]==1 || game[1][2]==1 && game[2][2]==1 || game[0][2]==1 && game[2][2]==1){
						win.push({winner:1,index:2});
				}
				if(game[0][2]==2 && game[1][2]==2 || game[1][2]==2 && game[2][2]==2 || game[0][2]==2 && game[2][2]==2){
						win.push({winner:0,index:2});
				}
			}
			if(PoLR[3]==1){
				if(game[0][0]==1 && game[0][1]==1 || game[0][1]==1 && game[0][2]==1 || game[0][0]==1 && game[0][2]==1){
						win.push({winner:1,index:3});
				}
				if(game[0][0]==2 && game[0][1]==2 || game[0][1]==2 && game[0][2]==2 || game[0][0]==2 && game[0][2]==2){
						win.push({winner:0,index:3});
				}
			}
			if(PoLR[4]==1){
				if(game[1][0]==1 && game[1][1]==1 || game[1][1]==1 && game[1][2]==1 || game[1][0]==1 && game[1][2]==1){
						win.push({winner:1,index:4});
				}
				if(game[1][0]==2 && game[1][1]==2 || game[1][1]==2 && game[1][2]==2 || game[1][0]==2 && game[1][2]==2){
						win.push({winner:0,index:4});
				}
			}
			if(PoLR[5]==1){
				if(game[2][0]==1 && game[2][1]==1 || game[2][1]==1 && game[2][2]==1 || game[2][0]==1 && game[2][2]==1){
						win.push({winner:1,index:5});
				}
				if(game[2][0]==2 && game[2][1]==2 || game[2][1]==2 && game[2][2]==2 || game[2][0]==2 && game[2][2]==2){
						win.push({winner:0,index:5});
				}
			}
			if(PoLR[6]==1){
				if(game[0][0]==1 && game[1][1]==1 || game[1][1]==1 && game[2][2]==1 || game[0][0]==1 && game[2][2]==1){
						win.push({winner:1,index:6});
				}
				if(game[0][0]==2 && game[1][1]==2 || game[1][1]==2 && game[2][2]==2 || game[0][0]==2 && game[2][2]==2){
						win.push({winner:0,index:6});
				}
			}
			if(PoLR[7]==1){
				if(game[0][2]==1 && game[1][1]==1 || game[1][1]==1 && game[2][0]==1 || game[0][2]==1 && game[2][0]==1){
						win.push({winner:1,index:7});
				}
				if(game[0][2]==2 && game[1][1]==2 || game[1][1]==2 && game[2][0]==2 || game[0][2]==2 && game[2][0]==2){
						win.push({winner:0,index:7});
				}
			}
			else{
				win.push({winner:2,index:-1});
			}
			return win;
	}

	function getWinner(){
		//console.log('computing winner');
		for(i=0;i<3;i++){
			if(game[0][i] && game[0][i]==game[1][i] && game[1][i]==game[2][i]){
				return game[0][i];
			}
		}

		for(i=0;i<3;i++){
			if(game[i][0] && game[i][0]==game[i][1] && game[i][1]==game[i][2]){
				return game[i][0];
			}
		}
		if(game[0][0] && game[0][0]==game[1][1] && game[1][1]==game[2][2]){return game[0][0]}
		if(game[0][2] && game[0][2]==game[1][1] && game[1][1]==game[2][0]){return game[0][2]}
	}

	function getPoLR(){
		PoLR=[0,0,0,0,0,0,0,0];
		for(i=0;i<3;i++){
			if(game[0][i]==0) PoLR[i]++;
			if(game[1][i]==0) PoLR[i]++;
			if(game[2][i]==0) PoLR[i]++;
		}
		for(i=0;i<3;i++){
			if(game[i][0]==0) PoLR[i+3]++;
			if(game[i][1]==0) PoLR[i+3]++;
			if(game[i][2]==0) PoLR[i+3]++;
		}
		if(game[0][0]==0) PoLR[6]++;
		if(game[1][1]==0) PoLR[6]++;
		if(game[2][2]==0) PoLR[6]++;

		if(game[0][2]==0) PoLR[7]++;
		if(game[1][1]==0) PoLR[7]++;
		if(game[2][0]==0) PoLR[7]++;
	}

	function intelligentMove(){
		console.log(PoLR);
		var val=Math.max.apply(Math,PoLR);
		//console.log(val);
		var index=PoLR.indexOf(val);
		//console.log(index);
		return index;
	}

	function insertO(indPoLR){
		//console.log('gotta insert 0');
		//debugger;
		switch(indPoLR){
			case 0:
				while(1){
					var ind = Math.floor(Math.random()*3);
					if(game[0][ind]==0){
						game[0][ind]=2;
						var i = 0;
						var j = ind;
						var id=''+i+''+j;
						document.getElementById(id).innerHTML='O';
						break;
					}
				}
				break;
			case 1:
				while(1){
					var ind = Math.floor(Math.random()*3);
					if(game[1][ind]==0){
						game[1][ind]=2;
						var i = 1;
						var j = ind;
						var id=''+i+''+j;
						document.getElementById(id).innerHTML='O';
						break;
					}
				}
				break;
			case 2:
				while(1){
					var ind = Math.floor(Math.random()*3);
					if(game[2][ind]==0){
						game[2][ind]=2;
						var i = 2;
						var j = ind;
						var id=''+i+''+j;
						document.getElementById(id).innerHTML='O';
						break;
					}
				}
				break;
			case 3:
				while(1){
					var ind = Math.floor(Math.random()*3);
					if(game[ind][0]==0){
						game[ind][0]=2;
						var i = ind;
						var j = 0;
						var id=''+i+''+j;
						document.getElementById(id).innerHTML='O';
						break;
					}
				}
				break;
			case 4:
				while(1){
					var ind = Math.floor(Math.random()*3);
					if(game[ind][1]==0){
						game[ind][1]=2;
						var i = ind;
						var j = 1;
						var id=''+i+''+j;
						document.getElementById(id).innerHTML='O';
						break;
					}
				}
				break;
			case 5:
				while(1){
					var ind = Math.floor(Math.random()*3);
					if(game[ind][2]==0){
						game[ind][2]=2;
						var i = ind;
						var j = 2;
						var id=''+i+''+j;
						document.getElementById(id).innerHTML='O';
						break;
					}
				}
				break;
			case 6:
				while(1){
					var ind = Math.floor(Math.random()*3);
					if(game[ind][ind]==0){
						game[ind][ind]=2;
						var i = ind;
						var j = ind;
						var id=''+i+''+j;
						document.getElementById(id).innerHTML='O';
						break;
					}
				}
				break;
			case 7:
				while(1){
					var ind = Math.floor(Math.random()*3);
					if(game[2-ind][ind]==0){
						game[2-ind][ind]=2;
						var i = 2-ind;
						var j = ind;
						var id=''+i+''+j;
						document.getElementById(id).innerHTML='O';
						break;
					}
				}
				break;
		}
	}

	function findSpaceAndInsert0(index){
		if(index==0){
				for(i=0;i<3;i++){
					if(game[i][0]==0){
							game[i][0]=2;
							var id =''+i+''+0;
							document.getElementById(id).innerHTML='O';
					}
				}
		}
		if(index==1){
				for(i=0;i<3;i++){
					if(game[i][1]==0){
							game[i][1]=2;
							var id =''+i+''+1;
							document.getElementById(id).innerHTML='O';
					}
				}
		}
		if(index==2){
				for(i=0;i<3;i++){
					if(game[i][2]==0){
							game[i][2]=2;
							var id =''+i+''+2;
							document.getElementById(id).innerHTML='O';
					}
				}
		}
		if(index==3){
				for(i=0;i<3;i++){
					if(game[0][i]==0){
							game[0][i]=2;
							var id =''+0+''+i;
							document.getElementById(id).innerHTML='O';
					}
				}
		}
		if(index==4){
				for(i=0;i<3;i++){
					if(game[1][i]==0){
							game[1][i]=2;
							var id =''+1+''+i;
							document.getElementById(id).innerHTML='O';
					}
				}
		}
		if(index==5){
				for(i=0;i<3;i++){
					if(game[2][i]==0){
							game[2][i]=2;
							var id =''+2+''+i;
							document.getElementById(id).innerHTML='O';
					}
				}
		}
		if(index==6){
				for(i=0;i<3;i++){
					if(game[i][i]==0){
							game[i][i]=2;
							var id =''+i+''+i;
							document.getElementById(id).innerHTML='O';
					}
				}
		}
		if(index==7){
				for(i=0;i<3;i++){
					if(game[2-i][i]==0){
							game[2-i][i]=2;
							var id =''+(2-i)+''+i;
							document.getElementById(id).innerHTML='O';
					}
				}
		}
		
	}

	function resetGame(){
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				game[i][j]=0;
				var id=''+i+''+j;
				document.getElementById(id).innerHTML='';
			}
		}
	
		for(i=0;i<PoLR.length;i++){
			PoLR[i]=0;
		}
	}

	function checkState(){
		if(getWinner()==1 || getWinner()==2){
			alert('Your winner is Player ' + getWinner());
						//location.reload();
			if(getWinner()==1){
				playerScore++;
				document.getElementById('playerScore').innerHTML=playerScore;
			}
			if(getWinner()==2){
				computerScore++;
				document.getElementById('computerScore').innerHTML=computerScore;
			}
			resetGame();
		}
		if(game[0][0]!==0&&game[0][1]!==0&&game[0][2]!==0&&game[1][0]!==0&&game[1][1]!==0&&game[1][2]!==0&&game[2][0]!==0&&game[2][1]!==0&&game[2][2]!==0){
			alert('game is tied');
			//location.reload();
			resetGame();
		}
	}
}




