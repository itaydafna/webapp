
//this script takes care of retrieving data form the forms (upon submission) and updating
//local storage accordingly

(function(){

//creating a node list out of all the "custom-links" forms
    var customLinksList = document.querySelectorAll(".custom-links");

//creating an array out of all the "custom-links" forms
    var customLinksArray = Array.prototype.slice.call(customLinksList);


    function getFormData(){
        //recursive function that travels up from the clicked "submit" button to find its parent form (.custom-links)
        //element. auto invoked with the button passed as the formChild parameter
        var formBtn = this,
            customLinksForm = function submitedFormEl(formChild){
                if (formChild.parentNode.className === "custom-links"){
                    return formChild.parentNode;
                } else {
                    submitedFormEl(formChild.parentNode);
                }
            }(formBtn),
        //empty object to collect keys (name values) and values from the form fields
            formDataObj = {},
        //took this method from here (https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries);
            customLinksFormData = new FormData(customLinksForm);
        for(var pair of customLinksFormData.entries()) {
            formDataObj[pair[0]] = pair[1];
        }


        //a loop updating local storage with the form object data.
        for (var key in formDataObj){
            if(formDataObj[key]!==""){
                localStorage.setItem(key, formDataObj[key]);
            }
        }
    }

    //ADD TO LIB!
    //recursive function which checks if an element has a child with a given class name and if it doesn't travels
    //it's parent node to check if it has this child - finds this class closest parent and returns the parent element

    function closestParent(element, classString) {
        if (element.querySelector(classString)) {
            return element;

        }
        return closestParent(element.parentNode, classString);
    }


//!!!REPEATED CODE - NEED TO MAKE GLOBAL
// a function which return a boolean which checks if all the input fields in the form are valid (no "required or "url"
//restrictions)

    function formValid(){

        var submitButton  = this,
        //finding the first parent of the clicked element which is a parent of the "custom-links" form
            closestFormParent = closestParent(submitButton, ".custom-links"),

        //getting a list of all the form input elements

            formInputFields = closestFormParent.querySelectorAll("input"),


        // creating an array out of all the "custom-links" form buttons

            formInputFieldsArray = Array.prototype.slice.call(formInputFields);

        var allFieldsValid = true;
        for(var i = 0; i<formInputFieldsArray.length; i++) {
            if (!formInputFieldsArray[i].validity.valid) {
                allFieldsValid = false;
            }
        }

        return allFieldsValid;
    }




// adding click event listeners to all form buttons for "getFormData"

    customLinksArray.forEach(function(form){
        form.querySelector("button").addEventListener("click", function () {
        //setting the timeout here is a trick I found which allows the form to update the validity status of all the
        // input fields before it toggles the form
            setTimeout(function () {
                if(formValid.call(this)) {
                    getFormData.call(this);
                }
            }.bind(this),20)

        });
    })

}())