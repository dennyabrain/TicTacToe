window.onload = function(){
	//data sctructures for the game
	var game=[[0,0,0],[0,0,0],[0,0,0]];

	function printArray(){
		console.log("======");
		console.log('- ' + game[0][0] + ' - ' + game[0][1] + ' - ' + game[0][2]);
		console.log('- ' + game[1][0] + ' - ' + game[1][1] + ' - ' + game[1][2]);
		console.log('- ' + game[2][0] + ' - ' + game[2][1] + ' - ' + game[2][2]);
		console.log("======");
	}

	printArray();

	//Click handlers
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			var id = ''+i+''+j;
			//console.log(id);
			document.getElementById(id).style.width='100%';
			document.getElementById(id).style.height='100px';
			document.getElementById(id).addEventListener('click', function(event){
				console.log(event.toElement.id);
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
					//return;
				}
		//document.getElementById(id).innerHTML='X';
	}

	function computerMove(){
		var valueChanged = 0;
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				if(game[i][j]==0){//if the box is empty draw a 0
					game[i][j]=2;
					var id = ''+i+''+j;
					document.getElementById(id).innerHTML='0';
					printArray();
					return;
				}
			}
		}
	}

}


