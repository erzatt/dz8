function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama"));
