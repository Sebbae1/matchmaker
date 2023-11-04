//  Author: 
//  Sebastian Jaculbe
console.log("Starting Matchmaker");

function calculateCompatibility() {
    console.log("Calculate Compatibility");

    const PERSONAL_RESPONSE = [
        5, //Strongly Agree
        4, //Agree
        5, //Strongly Agree
        1, //Strongly Disagree
        1  //Stronlgy Disagree
    ]

    const MAX_SCORE = [
        25 //Top Score 
    ]
    
    //Retreiving the user's responses to Statements 1 to 5.
    let statement1Response = document.getElementById("answer1").selectedOptions[0].value;
    let statement2Response = document.getElementById("answer2").selectedOptions[0].value;
    let statement3Response = document.getElementById("answer3").selectedOptions[0].value;
    let statement4Response = document.getElementById("answer4").selectedOptions[0].value;
    let statement5Response = document.getElementById("answer5").selectedOptions[0].value;

    //Logging the user's response to Question 1.
    console.log("Statement 1 Answer");
    console.log(document.getElementById("answer1").selectedOptions[0].text);
    console.log(document.getElementById("answer1").selectedOptions[0].value);
    console.log(statement1Response);

    //Logging the user's response to Statement 2.
    console.log("Statement 2 Answer");
    console.log(document.getElementById("answer2").selectedOptions[0].text);
    console.log(document.getElementById("answer2").selectedOptions[0].value);
    console.log(statement2Response);

    //Logging the user's response to Statement 3.
    console.log("Statement 3 Answer");
    console.log(document.getElementById("answer3").selectedOptions[0].text);
    console.log(document.getElementById("answer3").selectedOptions[0].value);
    console.log(statement3Response);

    //Logging the user's response to Statement 4.
    console.log("Statement 4 Answer");
    console.log(document.getElementById("answer4").selectedOptions[0].text);
    console.log(document.getElementById("answer4").selectedOptions[0].value);
    console.log(statement4Response);

    //Logging the user's response to Statement 5.
    console.log("Statement 5 Answer");
    console.log(document.getElementById("answer5").selectedOptions[0].text);
    console.log(document.getElementById("answer5").selectedOptions[0].value);
    console.log(statement5Response);

    //Calculate compatibility scores.
    let statement1Compatibility = 5 - Math.abs(statement1Response - PERSONAL_RESPONSE[0]);
    let statement2Compatibility = 5 - Math.abs(statement2Response - PERSONAL_RESPONSE[1]);
    let statement3Compatibility = 5 - Math.abs(statement3Response - PERSONAL_RESPONSE[2]);
    let statement4Compatibility = 5 - Math.abs(statement4Response - PERSONAL_RESPONSE[3]);
    let statement5Compatibility = 5 - Math.abs(statement5Response - PERSONAL_RESPONSE[4]);

    //Logging the user's compatibility scores
    console.log("Compatibility1="+statement1Compatibility);
    console.log("Copmatibility2="+statement2Compatibility);
    console.log("Compatibility3="+statement3Compatibility);
    console.log("Compatibility4="+statement4Compatibility);
    console.log("Compatibility5="+statement5Compatibility);

    let totalCompatibility = statement1Compatibility + statement2Compatibility + statement3Compatibility + statement4Compatibility + statement5Compatibility;

    totalCompatibility *= 100 / MAX_SCORE;
    totalCompatibility = Math.round(totalCompatibility);
    console.log("totalCompatbility=" + totalCompatibility);


    //Display the user their compatibility score.
    document.getElementById("compatbility").innerHTML = "Your compatibility is "  + totalCompatibility + "%";

    //App's responses to the user's compatibility score.
    let loverRelationship = "You and Sebastian are meant for each other. Or maybe you just know him so well that you agree on the same things and should be friends. Nonetheless, why be friends when your compatibility score reflects that you are his lover.";
    let friendRelationship = "You and Sebastian would make great friends. While friends agree and disagree to a certain extent, it is possible to have a synergy that would excel as friends.";
    let acquaintanceRelationship = "You and Sebastian should stay as acquaintances. You may be fit to be his friend, but based off of your compatibility score, it says otherwise.";
    
    //Display the user what kind of relationship the user should have. This is information is based off of the user's compatibility score.
    if (totalCompatibility >= 90) {
        document.getElementById("relationship").innerHTML = "Lover! " + loverRelationship ; 
    } else if (totalCompatibility < 90 && totalCompatibility >= 70) {
        document.getElementById("relationship").innerHTML = "Friends! " + friendRelationship ; 
    } else if (totalCompatibility < 70) {
        document.getElementById("relationship").innerHTML = "Acquaintances! " + acquaintanceRelationship;
    }
}   