const inputArray1 = [ 1, 1, 1, 2, 1, 1 ]
const inputArray2 = [0, 0, 0.55, 0, 0]

function outputBuilder(inputArray) {
    return inputArray.filter(function(value){
        return inputArray.indexOf(value) === inputArray.lastIndexOf(value);
      })[0] || -1;
}


$(document).ready(function() {     
    let results = [];   
    let output1 = outputBuilder(inputArray1);
    results.push("Unique number in array - "+inputArray1+ " - is "+output1 +"\r\n")
    let output2 = outputBuilder(inputArray2)
    results.push("Unique number in array - "+inputArray2+ " - is "+output2 +"\r\n")

    let element = document.getElementById('divOutput');
    element.innerHTML = results.join('');
});

