//-----------------------------------
//this script controls the tab switch
//-----------------------------------

(function () {

//-------------------------------
//dealing with tab style switching
//-------------------------------
    


    //function which adds an "active-tab" class to a clicked tab and removes this class from all rest of the tabs

    function setActiveTab(){
        var clickedTab = this;
        if(clickedTab.className !== "active-tab"){
            _DOM_ElEMENTS.elementArrays.tabsArray.forEach(function(tab){
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


    //function which adds an "active-div" class to a corresponding clicked tab and removes this class from all rest of the tabs

    function setActiveDiv(){
        var clickedTab = this;
        //finding the index of the clicked tab in the tabs array
        var clickedTabIndex = _DOM_ElEMENTS.elementArrays.tabsArray.indexOf(clickedTab);
        for(var i = 0; i<_DOM_ElEMENTS.elementArrays.contentDivsArray.length; i++){
            if(i===clickedTabIndex){
               _DOM_ElEMENTS.elementArrays.contentDivsArray[i].dataset.active = "active";
            } else{
               _DOM_ElEMENTS.elementArrays.contentDivsArray[i].dataset.active = "inactive";
            }
        }
    }

//----------------------
//adding event listeners
//----------------------

//function which adds "click" event listeners to all tabs for changing to active state

    (function appendSetActive(){
        _DOM_ElEMENTS.elementArrays.tabsArray.forEach(
            function(tab){
                tab.addEventListener("click",setActiveTab);
                tab.addEventListener("click",setActiveDiv);
            })}());
    
}())

