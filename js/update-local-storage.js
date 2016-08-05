
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



// adding click event listeners to all form buttons for "getFormData

    customLinksArray.forEach(function(form){
        form.querySelector("button").addEventListener("click", function () {
            // e.preventDefault();
                getFormData.call(this);
           
        });
    })

}())