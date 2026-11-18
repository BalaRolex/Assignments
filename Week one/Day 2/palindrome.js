let reversed=""
function checkPal(str1){
let sep=str1.split("")// splits string into char
for(let i=str1.length-1;i>=0;i--)// this loop reverse given str
{
   reversed+=sep[i]// concadinate string to reversed
}
if(reversed===str1)// check original string quals to reversed string
{
    console.log(str1,"is a palindrome")//if yes
}
else{
    console.log(str1,"is a not palindrome")//if no
}
}
checkPal("level")
