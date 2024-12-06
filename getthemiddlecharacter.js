function getMiddle(word) {
  // Find the length of the string
  const length = word.length;
  
  // If the length is odd, return the middle character
  if (length % 2 !== 0) {
    return word[Math.floor(length / 2)];
  } 
  // If the length is even, return the middle two characters
  else {
    const mid = length / 2;
    return word.slice(mid - 1, mid + 1);
  }
