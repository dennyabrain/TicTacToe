window.onload = function(){
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			var id = ''+i+''+j;
			//console.log(id);
			document.getElementById(id).style.width='100%';
			document.getElementById(id).style.height='100px';
			document.getElementById(id).addEventListener('click', function(event){
				console.log(event.toElement.id);
			})
		}
	}	
}

