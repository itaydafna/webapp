//this script is for gathering together all the HTML DOM elements used in other scripts in order to
//avoid calling them repetitively

var _DOM_ElEMENTS = {
    singleElements: {
        saveButtonOne : document.body.querySelector(".first button"),
        saveButtonTwo : document.body.querySelector(".second button")
    },
   
    elementArrays: {
        //an array of all the ".new-link" field couples
        newLinkArray: myUTILS.returnElementsArray(".new-link"),
        
        //an array of all the ".custom-links" field couples
        customLinksArray: myUTILS.returnElementsArray(".custom-links"),

        //an array out of all the "custom-links" form save buttons
        formButtonsArray: myUTILS.returnElementsArray(".custom-links button"),

        //an array out of all the "settings" icons
        settingsArray : myUTILS.returnElementsArray(".settings"),

        //an array out of all the "custom-links" tabs
        customLinksArray :  myUTILS.returnElementsArray(".custom"),

        //an array of all the form input elements
        formInputFieldsArray : myUTILS.returnElementsArray("input"),
        
        //an array of all the tabs
        tabsArray : myUTILS.returnElementsArray(".tabs li"),

        //an array of all the main content divs
        contentDivsArray : myUTILS.returnElementsArray(".content-div"),

        //an array of all the "select-site" option inputs
        selectSiteInputsArray :  myUTILS.returnElementsArray(".select-site")

    }
}