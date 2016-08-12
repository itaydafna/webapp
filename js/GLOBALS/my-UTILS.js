var myUTILS = function () {


//function which creates an array out of elements based on a query selector string
//returns an array
// gets a "query selector string" as a parameter
    returnElementsArray = function (queryString) {
        var nodeList = document.querySelectorAll(queryString),
            elementsArray = Array.prototype.slice.call(nodeList);
        return elementsArray;
    }





    return {
        returnElementsArray: returnElementsArray
    }


}();