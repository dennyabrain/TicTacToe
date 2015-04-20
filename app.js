window.onload = function(){
	//data sctructures for the game
	var game=[[0,0,0],[0,0,0],[0,0,0]];
	var PoLR=[0,0,0,0,0,0,0,0]; //Path of least resistance

	//console.log(getWinner());
	getPoLR();
	console.log(PoLR);
	function printArray(){
		console.log("======");
		console.log('- ' + game[0][0] + ' - ' + game[0][1] + ' - ' + game[0][2]);
		console.log('- ' + game[1][0] + ' - ' + game[1][1] + ' - ' + game[1][2]);
		console.log('- ' + game[2][0] + ' - ' + game[2][1] + ' - ' + game[2][2]);
		console.log("======");
	}

	//printArray();

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
		
				if(game[i][j]==0){ //check to see if the box is empty
					game[i][j]=1;
					document.getElementById(id).innerHTML='X';
					computerMove();
					//console.log(getWinner());
					if(getWinner()==1 || getWinner()==2){
						alert('Your winner is Player ' + getWinner());
						location.reload();
					}
					
					//return;
				}
		//document.getElementById(id).innerHTML='X';
	}

	function computerMove(){
		getPoLR();
		console.log(PoLR);
		var move = intelligentMove();
		insertO(move);
	}

	function checkWinner(){
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				if(game[i][j]==0){

				}
			}
		}
	}

	function getWinner(){
		//console.log('computing winner');
		for(i=0;i<3;i++){
			if(game[i][0] && game[i][0]==game[i][1] && game[i][1]==game[i][2]){
				return game[i][0];
			}
		}

		for(i=0;i<3;i++){
			if(game[0][i] && game[0][i]==game[1][i] && game[1][i]==game[2][i]){
				return game[i][0];
			}
		}
	}

	function getPoLR(){
		PoLR=[0,0,0,0,0,0,0,0];
		for(i=0;i<3;i++){
			if(game[i][0]==0) PoLR[i]++;
			if(game[i][1]==0) PoLR[i]++;
			if(game[i][2]==0) PoLR[i]++;
		}
		for(i=0;i<3;i++){
			if(game[0][i]==0) PoLR[i+3]++;
			if(game[1][i]==0) PoLR[i+3]++;
			if(game[2][i]==0) PoLR[i+3]++;
		}
		if(game[0][0]==0) PoLR[6]++;
		if(game[1][1]==0) PoLR[6]++;
		if(game[2][2]==0) PoLR[6]++;

		if(game[0][2]==0) PoLR[7]++;
		if(game[1][1]==0) PoLR[7]++;
		if(game[2][0]==0) PoLR[7]++;
	}

	function intelligentMove(){
		var val=Math.max.apply(Math,PoLR);
		//console.log(val);
		var index=PoLR.indexOf(val);
		//console.log(index);
		return index;
	}

	function insertO(indPoLR){
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
}


