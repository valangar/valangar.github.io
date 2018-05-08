var tab_content = Array.from(document.querySelectorAll(".tab-contents")),
    tabs = Array.from(document.querySelectorAll(".tabs")),
    logo = document.getElementById("logo"),
    contents = document.getElementById("content-area"),
    rCircles = d3.rCircles.rCirclesModule();

//Initial setup
hideAllTabs();
contents.querySelector('div[data-key=main]').classList.remove("hidden");
//creating some circles that are very confused about where they are going:
rCircles.width(screen.width - 100)
        .height(250);
d3.select("#home-pg").call(rCircles);

//Adding event listeners
tabs.forEach(tab => tab.addEventListener("click", switchTabs));
logo.addEventListener("click", switchTabs);

/************************* FUNCTIONS *****************************/
function hideAllTabs() {
    tab_content.forEach(tab => tab.classList.add("hidden"));
    tabs.forEach(tab => tab.classList.remove("active"));
}
function switchTabs (_) {
    var data_key = _.target.getAttribute("data-key");
    hideAllTabs();
    this.classList.add("active");
    contents.querySelector('div[data-key=' + data_key + ']').classList.remove("hidden");
}