//-------------------------------------------------------------------------------
//this script takes care of getting data from local storage and rendering an
// "options" menu to tabs 1 & 3 based on this data (and in case it exists)
//-------------------------------------------------------------------------------

(function () {
    var siteStorage = localStorage,
        //creating 2 arrays of pairs of names and URLs for updating the "select" form  - one array for each tab
        customOneArray = [],
        customTwoArray = [];
    for (var i = 1; i<=6; i++){
        if (siteStorage["name"+i]!=="" && siteStorage["name"+i]!==undefined){
            var pair = [];
            pair.push(siteStorage["name"+i]);
            pair.push(siteStorage["url"+i]);
            if(i<4) {
                customOneArray.push(pair);
            } else
            { customTwoArray.push(pair);
            }
        }
    }

    console.log(customOneArray,customTwoArray);

    //function which creates a "select" element out of a given "pairs" array of names and URLs

    function createSelect(array){
        if (array.length<=0){
            return
        }else
        {var select = document.createElement("select"),
                selectInnerHTML = "";
            array.forEach(function (pair) {
                selectInnerHTML += "<option value=" + pair[0] + ">" + pair[0] + "</option>";
            })
            select.innerHTML = selectInnerHTML;
            return select;
        }
    }

    //!just for testing - should be changed later

    // document.body.querySelector(".first .section-header").appendChild(createSelect(customOneArray));
    document.body.querySelector(".second .section-header").appendChild(createSelect(customTwoArray));


}())