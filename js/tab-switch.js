//-----------------------------------
//this script controls the tab switch
//-----------------------------------

(function () {

//-------------------------------
//dealing with tab style switching
//-------------------------------
    
    // creating a node-list of all the tabs
    var tabsList = document.querySelectorAll(".tabs li"),
    // creating an array of all the tabs
        tabsArr = Array.prototype.slice.call(tabsList);

    //function which adds an "active-tab" class to a clicked tab and removes this class from all rest of the tabs

    function setActiveTab(){
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
    
//-------------------------------------------
//dealing with active content div switching
//------------------------------------------

    // creating a node-list of all the main content divs
    var divsList = document.querySelectorAll(".content-div"),
    // creating an array of all the main content tabs
        divsArr = Array.prototype.slice.call(divsList);

    //function which adds an "active-div" class to a corresponding clicked tab and removes this class from all rest of the tabs

    function setActiveDiv(){
        var clickedTab = this;
        //finding the index of the clicked tab in the tabs array
        var clickedTabIndex = tabsArr.indexOf(clickedTab);
        for(var i = 0; i< divsArr.length; i++){
            if(i===clickedTabIndex){
                divsArr[i].dataset.active = "active";
            } else{
                divsArr[i].dataset.active = "inactive";
            }
        }
    }

//----------------------
//adding event listeners
//----------------------

//function which adds "click" event listeners to all tabs for changing to active state

    (function appendSetActive(){
        tabsArr.forEach(
            function(tab){
                tab.addEventListener("click",setActiveTab);
                tab.addEventListener("click",setActiveDiv);
            })}());


}())

