var myUTILS = function () {


//function which creates an array out of elements based on a query selector string
//returns an array
// gets a "query selector string" as a parameter
    returnElementsArray = function (queryString) {
        var nodeList = document.querySelectorAll(queryString),
            elementsArray = Array.prototype.slice.call(nodeList);
        return elementsArray;
    }

//recursive function which checks if an element has a child with a given class name and if it doesn't travels
//it's parent node to check if it has this child - finds this class closest parent and returns the parent element

    function closestParent(element, classString) {
        if (element.querySelector(classString)) {
            return element;

        }
        return closestParent(element.parentNode, classString);
    }


// a function which return a boolean which checks if all the input fields in the form are valid (no "required or "url"
//restrictions)

    function formValid(){

        var submitButton  = this,
        //finding the first parent of the clicked element which is a parent of the "custom-links" form
            closestFormParent = myUTILS.closestParent(submitButton, ".custom-links");

        var allFieldsValid = true;
        for(var i = 0; i< _DOM_ElEMENTS.elementArrays.formInputFieldsArray.length; i++) {
            if (!_DOM_ElEMENTS.elementArrays.formInputFieldsArray[i].validity.valid) {
                allFieldsValid = false;
            }
        }

        return allFieldsValid;
    }




    return {
        returnElementsArray: returnElementsArray,
        closestParent : closestParent,
        formValid : formValid
    }


}();