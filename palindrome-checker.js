function palindrome(str) {
  
  var lstr = str.toLowerCase(str);
  var filtered_str =lstr.replace(/\W|\_|\*|/gi,"");
  var reversed_fill_str = filtered_str.split("").reverse().join("");
if(filtered_str===reversed_fill_str) {
  return true;
} else{
  return false;
}
}
palindrome("racecare");
console.log(palindrome);
