var vowels = ["a","e","i","o","u"]; 
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
var cue = ["q", "Q"];
var you = ["u", "U"];
var piggify = function(myString){
    var incomplete = myString.split("");

    if (vowels.includes(incomplete[0].toLowerCase())) {
      return incomplete.join("") + "way";
    }

    while (consonants.includes(incomplete[0].toLowerCase())) {
      if (cue.includes(incomplete[0]) && you.includes(incomplete[1])){
        incomplete.push(incomplete[0]);
        incomplete.shift();
        incomplete.push(incomplete[0]);
        incomplete.shift();
        return incomplete.join("") + "ay";
      }
      incomplete.push(incomplete[0]);
      incomplete.shift();
    }
  return incomplete.join("") + "ay";
}


$(document).ready(function() {
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    var result = $("#phrase").val();
    $("#result").text(piggify(result));
    $("#result").show();
  });
});
