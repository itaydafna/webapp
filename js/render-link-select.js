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
                select.className = "select-site";
            array.forEach(function (pair) {
                selectInnerHTML += "<option value=" + pair[0] + " data-url ="+pair[1]+">" + pair[0] + "</option>";
            })
            select.innerHTML = selectInnerHTML;
            return select;
        }
    }


    //function which renders the select input to the content-tab header (if local storage returned data to the "pairs"
    // array)
    //takes in an array as a parameter - the array for the relevant tab is passed upon rendering

    function renderSelectInput(array){
        if(array.length > 0){
            var firstCustomHeader = document.body.querySelector(".first .section-header"),
                secondCutomHeader = document.body.querySelector(".second .section-header");

            if (array === customOneArray){
            //deleting previous select field (in case it exists)
                if(firstCustomHeader.querySelector(".select-site")){
                   firstCustomHeader.removeChild(firstCustomHeader.querySelector(".select-site"));
                }
            //and appending the updated "select" field instead
                firstCustomHeader.appendChild(createSelect(array));
        } else if
            (array === customTwoArray){
            //deleting previous select field (in case it exists)
                if(secondCutomHeader.querySelector(".select-site")){
                    secondCutomHeader.removeChild(secondCutomHeader.querySelector(".select-site"));
                }

            //and appending the updated "select" field instead
                secondCutomHeader.appendChild(createSelect(array));
            }
        }
    }

    //adding "click" event listeners to each form  button to render the "select" input

    var btnOne = document.body.querySelector(".first button"),
        btnTwo = document.body.querySelector(".second button");

        btnOne.addEventListener("click",function(){
            renderSelectInput(customOneArray)
        });

        btnTwo.addEventListener("click",function(){
            renderSelectInput(customTwoArray)
        });

    //adding "on-load" event listeners to each form to render the "select" input to both tabs
        document.onload = renderSelectInput(customOneArray);
        document.onload = renderSelectInput(customTwoArray);


    //!just for testing - should be changed later

    // document.body.querySelector(".first .section-header").appendChild(createSelect(customOneArray));
    // document.body.querySelector(".second .section-header").appendChild(createSelect(customTwoArray));


}())