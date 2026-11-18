
const broswerVersion="chrome"//global
function getBrowserVersion()
{
    if(broswerVersion="chrome")
    {
   var broswerVersion="Edge"
   let broswerVersion1="Safari"
   console.log("Let Inside Block:",broswerVersion1)//prints safari
    }
    //console.log("Let outside Block:",broswerVersion1)//ReferenceError: broswerVersion1 is not defined
    console.log("Var outside block:",broswerVersion)//prints edge it is drawback in var
    console.log("Var inside Function:",broswerVersion)//prints edge
}
console.log("Var Outside Function:",broswerVersion)//prints chrome (global variable)
getBrowserVersion();
