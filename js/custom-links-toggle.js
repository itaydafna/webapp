//---------------------------------------------------------------------------------
//this script controls the "custom links" toggle while the settings icon is clicked
//---------------------------------------------------------------------------------
(function () {

// function which toggles the report's active state

    function toggleCustomLinks() {
        //the clicked element
        var clickedElement = this,
        //finding the first parent of the clicked element which is a parent of the "custom-links" form
            closestFormParent = myUTILS.closestParent(clickedElement, ".custom-links"),
        //finding the first parent of the clicked element which is a parent of the "settings" icon
            closestSettingsParent = myUTILS.closestParent(clickedElement, ".settings"),

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



    (function () {

        //adding "click" event listeners to "settings" icons to call "toggleCustomLinks"

        _DOM_ElEMENTS.elementArrays.settingsArray.forEach(function (settingsIcon) {
            settingsIcon.addEventListener("click", function () {
                toggleCustomLinks.call(this);
            });

        })

        //adding "click" event listeners to all "custom-links" form buttons to call "toggleCustomLinks"
        //!only if form is form is valid (hence the if condition);

        _DOM_ElEMENTS.elementArrays.formButtonsArray.forEach(function (button) {
            button.addEventListener("click", function () {

        //setting the timeout here is a trick I found which allows the form to update the validity status of all the
        // input fields before it toggles the form
                setTimeout(function(){
                    if(myUTILS.formValid.call(this)) {
                        toggleCustomLinks.call(this);
                    }
                }.bind(this),50)

            });

        })

    }())

}())