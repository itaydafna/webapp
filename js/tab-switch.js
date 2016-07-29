//this script controls the tab switch

(function () {

    // creating a node-list of all the tabs
    var tabsList = document.querySelectorAll(".tabs li"),
    // creating an array of all the tabs
        tabsArr = Array.prototype.slice.call(tabsList);

    //function which adds an "active" class to a clicked tab and removes this class from all rest of the tabs

    function setActive(){
        var clickedTab = this;
        if(clickedTab.className !== "active-tab"){
            tabsArr.forEach(function(tab){
                if (tab !== clickedTab){
                    tab.className = "inactive";
                } else
                {
                    tab.className = "active-tab";
                }
            })
        }

    }

    //function which adds "click" event listeners to all tabs for changing to active state

    (function appendSetActive(){
        tabsArr.forEach(function(tab){tab.addEventListener("click",setActive);
    })}());

}())
