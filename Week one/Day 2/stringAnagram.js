let s = "Hello World"
let s1 = s.split(" ")// split string by white space
console.log("Length of last word in array is", s1[1].length); // in string array a[1] length is verified


let input = "   fly me   to   the moon  "
let trimmed = input.trim()// trim the additioanal space in begining and end
let extracted = trimmed.split(" ")// split with white space
for (let i = 0; extracted.length; i++)//traverse based on s3 length
{
    if (i === extracted.length - 1)// checks whether i matches with last index of array
    {
        console.log("length of last word", extracted[i].length)// prints length of last word
        break
    }
}


function checkAnagram(str1, str2) {
    str1 = str1.toLowerCase()// given string converted to lower case
    str2 = str2.toLowerCase()// given string converted to lower case
    if (str1.length == str2.length)// length compared betweeen two strings
    {
        let arr = str1.split("")// given string splitted into char
        let arr1 = str2.split("")// given string splitted into char
        let a = arr.sort().join("")//given string sorted and joined together
        let b = arr1.sort().join("")// given string sorted and joined together
        let result = a === b//both strings are compared
        console.log(a === b ? "String is Anagram" : "String is not Anagram")// compares condition and prints required result
        console.log(result)//return true or false based on cmparison
    }
    else {// if length not matched
        console.log("Length not matched")
    }
}
checkAnagram("listen", "silent")
checkAnagram("hello", "world")
checkAnagram("hello", "word")