var knownCount = 0;
var notKnownCount = 0;

var totalCount = 0; 

function knowsCount(){
    knownCount+=1;
    totalCount+=1;

    document.getElementById("knownCount").innerHTML =  knownCount;
    document.getElementById("totalCount").innerHTML =  totalCount;
}
function notKnowsCount(){
    notKnownCount+=1;
    totalCount+=1;
    document.getElementById("notKnownCount").innerHTML =  notKnownCount;
    document.getElementById("totalCount").innerHTML =  totalCount;
}
