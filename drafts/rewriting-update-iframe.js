//------------------------------------------------------------------------------------------/
//this script takes care of updating the iframe in tabs 1 & 3 based on the selected site name
//------------------------------------------------------------------------------------------/
(function () {

    // creating a node-list of both "select-site" option inputs
    var selectSiteInputs = document.querySelectorAll(".select-site"),

    // creating an array of all the tabs
        selectSiteInputsArr = Array.prototype.slice.call(selectSiteInputs);


    //this function renders an "open on new tab" icon with the selected url
    //once a site has been selected

    function addNewTab(div,url){
        //delete previous "new-tab" icon if it already exists
        if(div.querySelector(".new-tab")){
            div.querySelector(".new-tab").parentNode.removeChild(div.querySelector(".new-tab"))}

        //create a new "new-tab" element
        var newTab = document.createElement("a");
        newTab.className = "new-tab";
        newTab.target = "_blank";
        newTab.href = url;
        newTab.innerHTML = '<img src="img/icons/expand.png" alt="open site in new tab">'

        //and append it to the "settings-icons" div on header
        document.querySelector(".settings-icons").appendChild(newTab);
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





    //add "change" event listeners to both "select-links" option inputs (on tabs 1 & 3)

    (function(){
        selectSiteInputsArr.forEach(function(selectLinks) {
            selectLinks.addEventListener("change",
                // function which listen to a "select" (change) event on the tab and then updates its
                // iframe based on the selected value
                function (event) {
                    //finding closest <iframe> parent
                    var closestIframeParent = closestParent(this,"iframe");
                    var url = event.target.value;
                    closestIframeParent.querySelector("iframe").src = url;

                    //call addNewTab with "this" as the div and url as the url
                    addNewTab(this,url);
                })})
    }())

}())