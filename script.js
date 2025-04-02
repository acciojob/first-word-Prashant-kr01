function firstWord(s) {
  // your code here
	let news ="";
	
	for(let el of s ){
	if(el==" "){
		break;
	}else{
		news += el;
	}
		
	}
	return news;
}

// Do not change the code belo

const s = prompt("Enter String:"); 
alert(firstWord(s));
