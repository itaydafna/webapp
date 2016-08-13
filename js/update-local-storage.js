//this script takes care of retrieving data form the forms (upon submission) and updating
//local storage accordingly

(function () {


    function getFormData() {
        //recursive function that travels up from the clicked "submit" button to find its parent form (.custom-links)
        //element. auto invoked with the button passed as the formChild parameter
        var formBtn = this,
            customLinksForm = function submitedFormEl(formChild) {
                if (formChild.parentNode.className === "custom-links") {
                    return formChild.parentNode;
                } else {
                    submitedFormEl(formChild.parentNode);
                }
            }(formBtn),
        //empty object to collect keys (name values) and values from the form fields
            formDataObj = {},
        //took this method from here (https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries);
            customLinksFormData = new FormData(customLinksForm);
        for (var pair of customLinksFormData.entries()) {
            formDataObj[pair[0]] = pair[1];
        }


        //checking if formData JSON already exists in local storage
        if (!localStorage.getItem("form-data")) {
            //if it doesn't create it and save the form data as JSON on it
            localStorage.setItem("form-data", JSON.stringify(formDataObj));
        }
        else {
            //if it does parse it into a temp var (exitsting storage data);
            var existingStorageData = JSON.parse(localStorage.getItem("form-data"));
            if (formDataObj[key] !== "") {
                localStorage.setItem(key, formDataObj[key]);
            }

            //a loop updating the existing storage data object with the new form object data.
            for (var key in formDataObj) {
                //in case the new data from the form is not an empty string
                if (formDataObj[key] !== "") {
                    //replace it with the existing data on storage based on key (or create a new key if it doesn't exist);
                    existingStorageData[key] = formDataObj[key];
                }
            }
            //re-set the form data key in local storage with the updated exisitngStorageData
            localStorage.setItem("form-data", JSON.stringify(existingStorageData));
        }

        resetForm(customLinksForm);
    }

    //a function which takes a form element as a parameter and deletes the text from all of its input fields
    function resetForm(form) {
        var inputList = form.querySelectorAll("input");
        inputList.forEach(function (input) {
            input.value = "";
        })
    }





// adding click event listeners to all form buttons for "getFormData"

    _DOM_ElEMENTS.elementArrays.customLinksArray.forEach(function (form) {
        form.querySelector("button").addEventListener("click", function () {
            //setting the timeout here is a trick I found which allows the form to update the validity status of all the
            // input fields before it toggles the form
            setTimeout(function () {
                if (myUTILS.formValid.call(this)) {
                    getFormData.call(this);
                }
            }.bind(this), 20)

        });
    })

}())