String.prototype.camelCase = function () {
    return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index == 0 ? match.toUpperCase() : match.toUpperCase();
      });
};

$(document).ready(function() {        
    let output = ["camel case word".camelCase()];
    let element = document.getElementById('divOutput');
    element.innerHTML = output.join('');
});

