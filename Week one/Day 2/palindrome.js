function checkPalindrome(str1){
let reversed=""
let sep=str1.split("")// splits string into char
for(let i=str1.length-1;i>=0;i--)// this loop reverse given str
{
    reversed+=sep[i]// concatenate string to reversed
}
if(str1===reversed)// check original string equals to reversed string
{
    console.log(str1,"is a palindrome")//if condition is yes it print string is palindrome
    
}
else{
    console.log(str1,"is a not palindrome")//if condition is no it print string is not palindrome
    
}}
checkPal("level")
checkPal("mom")
checkPal("bala")
