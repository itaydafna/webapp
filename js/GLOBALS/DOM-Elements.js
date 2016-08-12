//this script is for gathering together all the HTML DOM elements used in other scripts in order to
//avoid calling them repetitively

var _DOM_ElEMENTS = {
    singleElements: {},
   
    elementArrays: {
        //an array of all the ".new-link" field couples
        newLinkArray: myUTILS.returnElementsArray(".new-link"),
        
        //an array of all the ".custom-links" field couples
        customLinksArray: myUTILS.returnElementsArray(".custom-links"),

        //an array out of all the "custom-links" form save buttons
        formButtonsArray: myUTILS.returnElementsArray(".custom-links button")

    }
}