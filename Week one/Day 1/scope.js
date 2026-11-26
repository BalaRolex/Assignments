
const broswerVersion = "chrome"//global
function getBrowserVersion() {
    if (broswerVersion === "chrome") {
        var broswer = "Edge"
        let nameOfBrowser = "Safari"
        console.log("Let Inside Block:", nameOfBrowser)//prints safari 
    }
    //console.log("Let outside Block:",nameOfBrowser)//ReferenceError: nameOfBrowser is not defined
    console.log("Var outside block:", broswer)//prints edge it is drawback in var
    console.log("Var inside Function:", broswer)//prints edge
}
console.log("Var Outside Function:", broswerVersion)//prints chrome (global variable)
getBrowserVersion();
