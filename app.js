// inter: this function finds the intersection 
// first: an array of integers
// second: an array of integers
// return: returns an array with the elements common in both arrays


inter = (first, second) => {
//sort arrays
 first.sort((a,b)=>a-b);
 second.sort((a,b)=>a-b);
//variables declaration and initialization
  const len1 = first.length,
  len2 = second.length,
  results = [],
  let tracker1 = 0,
  tracker2 = 0;

//compare until of the arrays is done
 while(tracker1 < len1 && tracker2 < len2) {
  if (first[tracker1] === second[tracker2]) {
   results.push(first[tracker1]);
   tracker1++;
   tracker2++;
  }
  else if (first[tracker1] > second[tracker2]) {
   tracker2++;
  } else tracker1++;

 }
 return results;
};

//example
console.log(inter([2,3,4,5,9,0,8],[1,2,0,3,6,7,9,11,32,11,43,8,33,13,100]));
