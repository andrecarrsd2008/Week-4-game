var randomScore=0
var totalScore=0
var wins=0
var losses=0

function start () {
$(".panelWin").html("wins "+wins)
$(".lost").html("losses "+losses)
randomScore=randNumber(120,19)
$(".panel-randNum").html(randomScore)
totalScore=0
$("#totalScore").html(totalScore)
$("#diamond").val(randNumber(12,1))
$("#ruby").val(randNumber(12,1))
$("#saphire").val(randNumber(12,1))
$("#topaz").val(randNumber(12,1))
}

$("#diamond").on("click", function() {
  console.log("diamonds")
var diamondValue=$("#diamond").val()
totalScore=totalScore+parseInt(diamondValue)
$("#totalScore").html(totalScore)
$("#message").html("")

if (totalScore===randomScore) {
    wins=wins+1
    start() 
    $("#message").html("You Win!!!")

}
else if(totalScore > randomScore){
    losses=losses+1
    start()
    $("#message").html("You Lose :(")
  }
});

$("#ruby").on("click", function() {
    console.log("ruby")
    var rubyValue=$("#ruby").val()
    totalScore=totalScore+parseInt(rubyValue)
    $("#totalScore").html(totalScore)
    $("#message").html("")

    if (totalScore===randomScore) {
        wins=wins+1
        start()
    
    }
    else if(totalScore > randomScore){
        losses=losses+1
        start()
      }
  })

  $("#saphire").on("click", function() {
    console.log("saphire")
    var saphireValue=$("#saphire").val()
    totalScore=totalScore+parseInt(saphireValue)
    $("#totalScore").html(totalScore)
    $("#message").html("")

    if (totalScore===randomScore) {
        wins=wins+1
        start()
    
    }
    else if(totalScore > randomScore){
        losses=losses+1
        start()
      }

  })

  $("#topaz").on("click", function() {
    console.log("topaz")
    var topazValue=$("#topaz").val()
    totalScore=totalScore+parseInt(topazValue)
    $("#totalScore").html(totalScore)
    $("#message").html("")

    if (totalScore===randomScore) {
        wins=wins+1
        start()
    
    }
    else if(totalScore > randomScore){
        losses=losses+1
        start()
      }
   })



function randNumber(max, min) {
return Math.floor(Math.random()* (max - min + 1)) + min

}

start()


