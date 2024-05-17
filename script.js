function firstWord(str) {
  // your code here
if (str==' ') {
    return '';  
  }

  // Trim leading spaces
  str = str.trim();
  
  // Find the index of the first space
  const firstSpaceIndex = str.indexOf(' ');

  // If there is no space, return the entire string
  if (firstSpaceIndex === -1) {
    return str;
  }

  // Return the substring from the start to the first space
  return str.substring(0, firstSpaceIndex);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
