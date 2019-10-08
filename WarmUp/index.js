const inputArray = [ 
    { "name": "rick", "cars": ["Corvette Z06", "Lotus Exite S"] },
    { "name": "john", "cars": ["BMW 320D"] },
    { "name": "zing", "cars": ["Honda Jazz", "Honda Click", "Honda Waves"] }
] 

function outputBuilder(inputArray) {
    let newArray = [];
    inputArray.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    inputArray.forEach(element => {
        newArray.push(formatData(element));
    });
    return newArray;
}

function formatData(data) {
    let name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    let formatedData = name + " want to buy " + data.cars + "&#10";
    return formatedData;
}

$(document).ready(function() {        
    let output = outputBuilder(inputArray);
    let element = document.getElementById('divOutput');
    element.innerHTML = output.join('');
});

