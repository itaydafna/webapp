//this script controls the "custom links" toggle while the settings icon is clicked

(function(){
//creating a node list out of all the "settings" icons
    var settingsList = document.querySelectorAll(".settings");

//creating an array out of all the "settings" icons

    var settingsArray = Array.prototype.slice.call(settingsList);


//creating a node list out of all the "custom-links" forms
    var customLinksList = document.querySelectorAll(".custom-links");

//creating an array out of all the "custom-links" forms

    var customLinksArray = Array.prototype.slice.call(customLinksList);



// function which toggles the report's active state

    
    function toggleCustomeLinks(){
        var clikedIcon = this,
        //finding the index of the clicked settings-icon in the icons settings array
            clickedIconIndex = settingsArray.indexOf(clikedIcon);
        settingsArray.forEach(function(settingsIcon){
            if (clikedIcon===settingsIcon){
                var targetedForm = customLinksArray[clickedIconIndex];
                if (settingsIcon.dataset.active === "active"){
                    settingsIcon.dataset.active = "inactive";
                    targetedForm.dataset.active = "inactive";
                } else if
                (settingsIcon.dataset.active === "inactive") {
                    settingsIcon.dataset.active = "active";
                    targetedForm.dataset.active = "active";
                }
            }
        })
    }

//adding click event listeners to setting icons
    
    (function(){
        settingsArray.forEach(function (settingsIcon) {
            settingsIcon.addEventListener("click",toggleCustomeLinks);
            
        })

    }())
    
}())