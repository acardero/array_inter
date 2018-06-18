inter = (first, second) => {
 first.sort((a,b)=>a-b);
 second.sort((a,b)=>a-b);
 const len1 = first.length,
  len2 = second.length,
  results = [],
  chosen = len1 > len2 ? second : first;

 let tracker1 = 0,
  tracker2 = 0;

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

console.log(inter([2,3,4,5,9,0,8],[1,2,0,3,6,7,9,11,32,11,43,8,33,13,100]));
