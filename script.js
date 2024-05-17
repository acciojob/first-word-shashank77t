function firstWord(s) {
  // your code here
	if(s===' ')
		return s;
	const ab=s.indexOf(' ');
	if(ab==-1)
		return s;
	return s.substring(0,ab);
	
}

// Do not change the code below

//const s = prompt("Enter String:");
alert(firstWord(s));
