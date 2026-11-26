function identifyNumberType(givenNumber) {
    if (givenNumber > 0)// if number is greater than zero
    {
        console.log(givenNumber + " " + "is positive number");

    }
    else if (givenNumber < 0)// if number is less than zero
    {
        console.log(givenNumber + " " + "is negative number");
    }
    else {// if number is neutral
        console.log(givenNumber + " " + "is neutral number");
    }
}
identifyNumberType(-100000)
identifyNumberType(100000)
identifyNumberType(0)