// //------------------------------------------------------------------------------------------/
// //this script takes care of updating the iframe in tabs 1 & 3 based on the selected site name
// //------------------------------------------------------------------------------------------/
// (function () {
//
//
//     //add "change" event listeners to both "select-links" option inputs (on tabs 1 & 3)
//
//     (function(){
//         _DOM_ElEMENTS.elementArrays.selectSiteInputsArray.forEach(function(selectLinks) {
//             selectLinks.addEventListener("change",
//                 // function which listens to a "select" (change) event on the tab and then updates its
//                 // iframe based on the selected value
//                 function (event) {
//                     //finding closest <iframe> parent
//                     var closestIframeParent = myUTILS.closestParent(this,"iframe");
//                     var url = event.target.value;
//
//                     closestIframeParent.querySelector("iframe").src = url;
//
//                     //finding closest ".settings-icons" parent
//                     var closestIframeParent = myUTILS.closestParent(this,".settings-icons");
//
//                     //call addNewTab with "this" as the div and url as the url
//                     myUTILS.addNewTab(closestIframeParent,url);
//                 })})
//     }())
//
// }())