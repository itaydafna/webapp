//-------------------------------------------------------------------------------
//this script takes care of getting data from local storage and rendering an
// "options" menu to tabs 1 & 3 based on this data (and in case it exists)
//-------------------------------------------------------------------------------

(function () {

        //retrieving existing local storage data
        var siteStorage = JSON.parse(localStorage.getItem("form-data")),
        //creating 2 arrays of pairs of names and URLs for updating the "select" form  - one array for each tab
            customOneArray = [],
            customTwoArray = [];

    //this function should update the custom arrays on page load and on form submission
    function updateStorageArrays() {
    //checking if there is existing previous form data in local storage
        if (!localStorage.getItem("form-data")) {
            return;
        }
        //clearing the custom array so they can be "refilled" with what is in the local storage
        siteStorage = JSON.parse(localStorage.getItem("form-data"));
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

//this function renders an "open on new tab" icon with the selected url
//once a site has been selected

    function addNewTab(div, url) {
        //delete previous "new-tab" icon if it already exists
        if (div.querySelector(".new-tab")) {
            div.querySelector(".new-tab").parentNode.removeChild(div.querySelector(".new-tab"))
        }

        //create a new "new-tab" element
        var newTab = document.createElement("a");
        newTab.className = "new-tab";
        newTab.target = "_blank";
        newTab.href = url;
        newTab.innerHTML = '<img src="img/icons/expand.png" alt="open site in new tab">'

        //and append it to the "settings-icons" div on header
        div.querySelector(".settings-icons").appendChild(newTab);
    }


    //!!!REPEATED CODE - NEED TO MAKE GLOBAL
    //function which creates a "select" element out of a given "pairs" array of names and URLs

    function createSelect(array) {
        if (array.length <= 0) {
            return
        } else {
            var select = document.createElement("select"),
                selectInnerHTML = "";
            select.className = "select-site";
            array.forEach(function (pair) {
                selectInnerHTML += "<option value=" + pair[1] + ">" + pair[0] + "</option>";
            })
            select.innerHTML = selectInnerHTML;

            //adding "change" event listener to the new select element

            select.addEventListener("change",
                // function which listens to a "select" (change) event on the tab and then updates its
                // iframe based on the selected value
                function (event) {
                    //finding closest <iframe> parent
                    var closestIframeParent = myUTILS.closestParent(this, "iframe");
                    var url = event.target.value;

                    closestIframeParent.querySelector("iframe").src = url;

                    //finding closest ".settings-icons" parent
                    var closestIframeParent = myUTILS.closestParent(this, ".settings-icons");

                    //call addNewTab with "this" as the div and url as the url
                    addNewTab(closestIframeParent, url);
                })

            return select;
        }
    }


    //function which renders the select input to the content-tab header (if local storage returned data to the "pairs"
    // array)
    //takes in an array as a parameter - the array for the relevant tab is passed upon rendering

    function renderSelectInput(array) {
        if (array.length > 0) {
            var firstCustomHeader = document.body.querySelector(".first .section-header"),
                secondCutomHeader = document.body.querySelector(".second .section-header");

            if (array === customOneArray) {
                //deleting previous select field (in case it exists)
                if (firstCustomHeader.querySelector(".select-site")) {
                    firstCustomHeader.removeChild(firstCustomHeader.querySelector(".select-site"));
                }
                //and appending the updated "select" field instead
                firstCustomHeader.appendChild(createSelect(array));
            } else if
            (array === customTwoArray) {
                //deleting previous select field (in case it exists)
                if (secondCutomHeader.querySelector(".select-site")) {
                    secondCutomHeader.removeChild(secondCutomHeader.querySelector(".select-site"));
                }

                //and appending the updated "select" field instead
                secondCutomHeader.appendChild(createSelect(array));
            }
        }
    }
    


    //adding "click" event listeners to each form  button to render the "select" input


    _DOM_ElEMENTS.singleElements.saveButtonOne.addEventListener("click", function () {
        //setting the timeout here is a trick I found which allows the form to update the validity status of all the
        // input fields before it toggles the form
        setTimeout(function () {
            if (myUTILS.formValid.call(this)) {
                //update the custom arrays based on what is on the local storage
                updateStorageArrays();


                renderSelectInput(customOneArray);
            }
        }.bind(this), 50)
    });

    _DOM_ElEMENTS.singleElements.saveButtonTwo.addEventListener("click", function () {
        //setting the timeout here is a trick I found which allows the form to update the validity status of all the
        // input fields before it toggles the form
        setTimeout(function () {
            if (myUTILS.formValid.call(this)) {
                //update the custom arrays based on what is on the local storage
                updateStorageArrays();
                renderSelectInput(customTwoArray);
            }
        }.bind(this), 50)
    });

    //adding "on-load" event listeners to each form to render the "select" input to both tabs

    //update the custom arrays based on what is on the local storage
    updateStorageArrays();
    renderSelectInput(customOneArray);
    renderSelectInput(customTwoArray);


}())