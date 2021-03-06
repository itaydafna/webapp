//this script takes care of making sure that if a URL field has text the name field has to be "required"
//and vise versa

(function () {

//creating an array of couple fields - each couple is a sub-array in the main array

    var fieldCouplesArray = [];

    _DOM_ElEMENTS.elementArrays.newLinkArray.forEach(function (newLink) {
            var newLinkInputs = newLink.querySelectorAll("input"),
                newLinkInputsArray = Array.prototype.slice.call(newLinkInputs);
            fieldCouplesArray.push(newLinkInputsArray);
        }
    )

//function which adds "required" to an input's couple if it is not empty
//(please note that this validation will run on both forms - tab 1 and 3 a "clear fields" procedure,
// should be add to the tab-switch functionality)

    function validateRequired() {
        fieldCouplesArray.forEach(function (inputCouple) {
            if (inputCouple[0].value === "" && inputCouple[1].value !== "") {
                inputCouple[0].required = true;
            } else if
            (inputCouple[0].value !== "" && inputCouple[1].value === "") {
                inputCouple[1].required = true;
            } else {
                inputCouple[0].required = false;
                inputCouple[1].required = false;
            }
        })
    }

    // adding prevent default to form submit so page wouldn't refresh

    _DOM_ElEMENTS.elementArrays.customLinksArray.forEach(function (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
            })
        }
    )

    //???????????????????????????????????????????????????????????????????????????
    // figure out why I didn't manage to add buttons array to DOM-Elements global
    //???????????????????????????????????????????????????????????????????????????
    // creating an array out of all the "custom-links" form save buttons



    var formButtonsArray = myUTILS.returnElementsArray(".custom-links button");

    //add click event listener to form buttons to run validateRequired

    (function () {
        formButtonsArray.forEach(function (btn) {
            btn.addEventListener("click", function () {
                validateRequired();

            })

        })
    }())


}())
