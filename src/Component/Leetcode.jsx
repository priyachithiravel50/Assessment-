
//LongestWord
function longestWord(text) {
  const words = text.split(' ');
  const maxLength = Math.max(...words.map(word => word.length));
  return words.filter(word => word.length === maxLength);
}
console.log(longestWord("This is a coding challenge for the interview process"));

//LargestSum
function largestSum(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[0] + unique[1] + unique[2];
}
console.log(largestSum([1, 5, 8, 6, 7, 9, 9, 9]));

//Find vowels
function Vowels(word) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(Vowels("Challenge"));

//Intersection
function Intersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}
console.log(Intersection([1, 2, 3, 4, 5, 6], [1, 3, 5, 7]));



