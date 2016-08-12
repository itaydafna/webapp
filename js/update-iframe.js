//------------------------------------------------------------------------------------------/
//this script takes care of updating the iframe in tabs 1 & 3 based on the selected site name
//------------------------------------------------------------------------------------------/
(function () {

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
        div.querySelector(".settings-icons").appendChild(newTab);
    }


    //add "change" event listeners to both "select-links" option inputs (on tabs 1 & 3)

    (function(){
        _DOM_ElEMENTS.elementArrays.selectSiteInputsArray.forEach(function(selectLinks) {
            selectLinks.addEventListener("change",
                // function which listens to a "select" (change) event on the tab and then updates its
                // iframe based on the selected value
                function (event) {
                    //finding closest <iframe> parent
                    var closestIframeParent = myUTILS.closestParent(this,"iframe");
                    var url = event.target.value;

                    closestIframeParent.querySelector("iframe").src = url;

                    //finding closest ".settings-icons" parent
                    var closestIframeParent = myUTILS.closestParent(this,".settings-icons");

                    //call addNewTab with "this" as the div and url as the url
                    addNewTab(closestIframeParent,url);
                })})
    }())

}())