//---------------------------------------------------------------------------------
//this script controls the "custom links" toggle while the settings icon is clicked
//---------------------------------------------------------------------------------
(function () {
//creating a node list out of all the "settings" icons
    var settingsList = document.querySelectorAll(".settings");

//creating an array out of all the "settings" icons

    var settingsArray = Array.prototype.slice.call(settingsList);


//creating a node list out of all the "custom-links" tabs
    var customLinksList = document.querySelectorAll(".custom");

//creating an array out of all the "custom-links" tabs

    var customLinksArray = Array.prototype.slice.call(customLinksList);

// creating a node-list of all the "custom-links" form buttons
    var formButtons = document.querySelectorAll(".custom-links button"),

// creating an array out of all the "custom-links" form buttons

    formButtonsArray = Array.prototype.slice.call(formButtons);



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




// function which toggles the report's active state

    function toggleCustomLinks() {
        //the clicked element
        var clickedElement = this,
        //finding the first parent of the clicked element which is a parent of the "custom-links" form
            closestFormParent = closestParent(clickedElement, ".custom-links"),
        //finding the first parent of the clicked element which is a parent of the "settings" icon
            closestSettingsParent = closestParent(clickedElement, ".settings"),

            customLinksForm = closestFormParent.querySelector(".custom-links"),
            settingsIcon = closestSettingsParent.querySelector(".settings");

        if (settingsIcon.dataset.active === "active") {
            settingsIcon.dataset.active = "inactive";
            customLinksForm.dataset.active = "inactive";
        } else if
        (settingsIcon.dataset.active === "inactive") {
            settingsIcon.dataset.active = "active";
            customLinksForm.dataset.active = "active";
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


    (function () {

        //adding "click" event listeners to "settings" icons to call "toggleCustomLinks"

        settingsArray.forEach(function (settingsIcon) {
            settingsIcon.addEventListener("click", function () {
                toggleCustomLinks.call(this);
            });

        })

        //adding "click" event listeners to all "custom-links" form buttons to call "toggleCustomLinks"
        //!only if form is form is valid (hence the if condition);

        formButtonsArray.forEach(function (button) {
            button.addEventListener("click", function () {
                if(formValid.call(this)) {
                    toggleCustomLinks.call(this);
                }
            });

        })

    }())

}())