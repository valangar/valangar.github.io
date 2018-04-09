var tab_content = Array.from(document.querySelectorAll(".tab-contents")),
    tabs = Array.from(document.querySelectorAll(".tabs")),
    logo = document.getElementById("logo"),
    contents = document.getElementById("content-area"),
    bCircles = d3.bCircles.bCirclesModule();

//Initial setup
hideAllTabs();
contents.querySelector('div[data-key=main]').classList.remove("hidden");
d3.select("#home-pg").call(bCircles);

//Adding event listeners
tabs.forEach(tab => tab.addEventListener("click", switchTabs));
logo.addEventListener("click", switchTabs);

/************************* FUNCTIONS *****************************/
function hideAllTabs() {
    tab_content.forEach(tab => tab.classList.add("hidden"));
}
function switchTabs (_) {
    var data_key = _.target.getAttribute("data-key");
    hideAllTabs();
    contents.querySelector('div[data-key=' + data_key + ']').classList.remove("hidden");
}