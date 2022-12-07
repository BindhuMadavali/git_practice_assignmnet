let s = "BINDHU";
let rev = ''
for(let i=s.length-1; i>=0; i--){
    rev += s[i]
}
if(rev===s){
    console.log("Palindrome")
}else{
    console.log("Not plaindrome");
}