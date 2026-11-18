let s="Hello World"
let s1=s.split(" ")// split string by white space
console.log("Length of last word in array is",s1[1].length); // in string array a[1] length is verified

                    
let input= new String("   fly me   to   the moon  ")
let s2=input.trim()// trim the additioanal space in begining and end
let s3=s2.split(" ")// split with white space
console.log(s3.length-1);// last string length is determined
console.log("length of last word",s3[8].length);// length of last word

function checkitis(str1,str2)
{
     str1=str1.toLowerCase()// given string convertd to lower case
     str2=str2.toLowerCase()// given string convertd to lower case
    if (str1.length==str2.length)// length compared betweeen two strings
    {
        let arr=str1.split("")// given string splitted into char
        let arr1=str2.split("")// given string splitted into char
        let a=arr.sort().join("")//given string soretd and joined together
        let b=arr1.sort().join("")// given string soretd and joined together
        let result=a===b//both strings are compared
        console.log("String is Anagram")
        console.log(result)//return tru of false based on cmparison
    }
    else{// if not matched
        console.log("Length not matched")      
}}
checkitis("listen","silent")
checkitis("hello","world")
checkitis("hello","word")