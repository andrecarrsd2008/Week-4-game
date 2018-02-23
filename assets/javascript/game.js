{
    let totalScore = 0;
    // Assign GLOBAL variables
    let scoreToBeat = 0;
    let wins = 0;
    let loses = 0;
    let randNum;
    let gemValues;
   
    //RandNum function
    function randNumber() {
        return Math.floor((Math.random() * 120) + 19);
    }
    // Start Function
    function start() {
        // Generate Random Number and assign it to a variable between 19 and 120 formula:[ () * (max - min + 1)) + min];
        randNum = randNumber()
        console.log(randNum); //sanity test: works!
        // Display random number in "#scoreToBeat" ID.
        $("#scoreToBeat").text(randNum);
        // Generate a random number for all gems that should be bwteen 1 and 12.
        let saphireNum = Math.floor((Math.random() * 12) + 1);
        console.log(saphireNum);
        let rubyNum = Math.floor((Math.random() * 12) + 1);
        console.log(rubyNum);
        let diamondNum = Math.floor((Math.random() * 12) + 1);
        console.log(diamondNum);
        let topazNum = Math.floor((Math.random() * 12) + 1);
        console.log(amethystNum);
        totalScore = 0;
        $("#panel").text(panel);
        return [saphireNum, rubyNum, diamondNum, topazNum];
        
    }
    // Create an on.click event that triggers and adds the "saphireNum" to the totalScore.
       $(".crystals").on("click", function () {
        // if .this "click" event .is(has) id "img-saphire"
        if ($(this).is("#img-saphire")) {
            //add the number gen by saphire to totalScore, rinse and repeat...
            totalScore += gemValues[0];
        } else if ($(this).is("#img-ruby")) {
            totalScore += gemValues[1];
        } else if ($(this).is("#img-diamond")) {
            totalScore += gemValues[2];
        } else if ($(this).is("#img-topaz")) {
            totalScore += gemValues[3];
        }
        $("#totalScore").text(totalScore);
        console.log(totalScore); // check: works!
        // If totalScore === scoreToBeat add +1 to "winsCount
        if (totalScore === randNum) {
            wins++;
            $("#winsCount").text(wins);
            gemValues = start();
            // else +1 to losesCount
        } else if (totalScore > randNum) {
            loses++;
            $("#losesCount").text(loses);
            gemValues = start();
        }
    });
    gemValues = start();
    console.log(gemValues);
};