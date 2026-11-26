function launchBrowser(browserName) {
  if (browserName === "chrome")// checks browser name is chrome
  {
    console.log("Tested in Chrome Browser")//if condition is chrome it prints chrom
  }
  else if (browserName === "Edge") {
    console.log("Tested in Edge Browser")//if condition is edge it print edge
  }
  else {
    console.log("Unknown Browser")// if both does not match it print it
  }
}
  function runTest(testType) {
    switch (testType) {// check test type provided in method parameter
      case "Smoke":
        console.log("It is Smoke Testing")// check testtype is smoke
        break;

      case "Sanity":
        console.log("It is Sanity Testing")// check testtype is sanity
        break;

      case "Regression":
        console.log("It is Regression Testing")// check testtype is regression
        break;

      default:
        console.log("Unknown Test Type")// if no test type is matched defualt comes into play
        break;
    }
  }
  launchBrowser("chrome")
  launchBrowser("Edge")
  runTest("Sanity")
  runTest("Regression")
  runTest("Smoke")
  runTest("Thinking")