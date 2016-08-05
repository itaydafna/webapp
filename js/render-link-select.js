//-------------------------------------------------------------------------------
//this script takes care of getting data from local storage and rendering an
// "options" menu to tabs 1 & 3 based on this data (and in case it exists)
//-------------------------------------------------------------------------------

(function () {
    var siteStorage = localStorage,
        //creating 2 arrays of pairs of names and URLs for updating the "select" form  - one array for each tab
        customOneArray = [],
        customTwoArray = [];
        //this function should update the custom arrays on page load and on form submission

    function updateStorageArrays () {
        //clearing the custom array so they can be "refilled" with what is in the local storage
            customOneArray = [];
            customTwoArray = [];
        for (var i = 1; i <= 6; i++) {
            if (siteStorage["name" + i] !== "" && siteStorage["name" + i] !== undefined) {
                var pair = [];
                pair.push(siteStorage["name" + i]);
                pair.push(siteStorage["url" + i]);
                if (i < 4) {
                    customOneArray.push(pair);
                } else {
                    customTwoArray.push(pair);
                }
            }
        }
    }

    //function which creates a "select" element out of a given "pairs" array of names and URLs

    function createSelect(array){
        if (array.length<=0){
            return
        }else
        {var select = document.createElement("select"),
                selectInnerHTML = "";
                select.className = "select-site";
            array.forEach(function (pair) {
                selectInnerHTML += "<option value=" + pair[1] + ">" + pair[0] + "</option>";
            })
            select.innerHTML = selectInnerHTML;
            return select;
        }
    }


    //function which renders the select input to the content-tab header (if local storage returned data to the "pairs"
    // array)
    //takes in an array as a parameter - the array for the relevant tab is passed upon rendering

    function renderSelectInput(array){
        if(array.length > 0){
            var firstCustomHeader = document.body.querySelector(".first .section-header"),
                secondCutomHeader = document.body.querySelector(".second .section-header");

            if (array === customOneArray){
            //deleting previous select field (in case it exists)
                if(firstCustomHeader.querySelector(".select-site")){
                   firstCustomHeader.removeChild(firstCustomHeader.querySelector(".select-site"));
                }
            //and appending the updated "select" field instead
                firstCustomHeader.appendChild(createSelect(array));
        } else if
            (array === customTwoArray){
            //deleting previous select field (in case it exists)
                if(secondCutomHeader.querySelector(".select-site")){
                    secondCutomHeader.removeChild(secondCutomHeader.querySelector(".select-site"));
                }

            //and appending the updated "select" field instead
                secondCutomHeader.appendChild(createSelect(array));
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



    //adding "click" event listeners to each form  button to render the "select" input

    var btnOne = document.body.querySelector(".first button"),
        btnTwo = document.body.querySelector(".second button");



        btnOne.addEventListener("click",function(){
            //setting the timeout here is a trick I found which allows the form to update the validity status of all the
            // input fields before it toggles the form
            setTimeout(function () {
                if(formValid.call(this)) {
                    //update the custom arrays based on what is on the local storage
                    updateStorageArrays();
                    renderSelectInput(customOneArray);
                }}.bind(this),50)
        });

        btnTwo.addEventListener("click",function(){
            //setting the timeout here is a trick I found which allows the form to update the validity status of all the
            // input fields before it toggles the form
            setTimeout(function () {
                if(formValid.call(this)) {
                    //update the custom arrays based on what is on the local storage
                    updateStorageArrays();
                    renderSelectInput(customTwoArray);
                }}.bind(this),50)
        });

    //adding "on-load" event listeners to each form to render the "select" input to both tabs

            //update the custom arrays based on what is on the local storage
            updateStorageArrays();
            renderSelectInput(customOneArray);
            renderSelectInput(customTwoArray);


}())