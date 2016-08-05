//------------------------------------------------------------------------------------------/
//this script takes care of updating the iframe in tabs 1 & 3 based on the selected site name
//------------------------------------------------------------------------------------------/
(function () {

    // creating a node-list of both "custom links" content-divs
    var customLinksDivs = document.querySelectorAll(".custom"),

    // creating an array of all the tabs
        customLinksDivsArr = Array.prototype.slice.call(customLinksDivs);


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






    //add "change" event listeners to both "custom links" tabs (tabs 1 & 3)

    (function(){
        customLinksDivsArr.forEach(function(div) {
            div.addEventListener("change",
                // function which listen to a "select" (change) event on the tab and then updates its
                // iframe based on the selected value
                function (event) {
                    var url = event.target.value;
                    this.querySelector("iframe").src = url;

                    //call addNewTab with "this" as the div and url as the url
                    addNewTab(this,url);
                })})
    }())

}())