let browser = "chrome"
function checkBrowserVersion(callback) {
    setTimeout(callback, 2000)// two second timeout assigned before executing the function 
}
function versionOfBrowser() {
    console.log("4.0 using callback:", browser)
}
checkBrowserVersion(versionOfBrowser)// one function calling another fuction as argument
