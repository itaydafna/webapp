
//this script takes care of retrieving data form the forms (upon submission) and updating the
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

            customLinksFormData = new FormData(customLinksForm);
            console.dir(customLinksFormData.getAll("name"))
    }



// adding click event listeners to all form buttons for "getFormData

    customLinksArray.forEach(function(form){
        form.querySelector("button").addEventListener("click", function (e) {
            e.preventDefault();
                getFormData.call(this);
        });
    })

}())