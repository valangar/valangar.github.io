var tab_content = Array.from(document.querySelectorAll(".tab-contents")),
    tabs = Array.from(document.querySelectorAll(".tabs")),
    tab_width = 100,
    tab_ids = ["home-pg", "about-tab-content", "skills-tab-content", "work-pg", "blog-tab-content", "contact-tab-content"];
    logo = document.getElementById("logo"),
    logo_container = document.getElementsByClassName("logo")[0],
    split_text = Array.from(document.querySelectorAll(".split-text")),
    contents = document.getElementById("content-area"),
    rCircles = d3.rCircles.rCirclesModule()
    forceGraph = graphModule(),
	graph_data = {"nodes": nodes, "links": links };
	
//Initial setup
hideAllTabs();
splitTextIntoSpans(["hello", "my-name"]);

//creating some circles that are very confused about where they are going:
/* rCircles.width(screen.width - tab_width - 40)
        .height(screen.height - 100);
d3.select("#home-pg").call(rCircles); */

//creating network graph in the contacts page:
/* forceGraph.graphSpaceWidth((window.innerWidth / 2) - tab_width )
			.graphSpaceHeight(window.innerHeight - 100)
			.nodeColors(d3.scaleOrdinal(d3.schemeCategory20))
			.dataAttrNodeGrp("group")
			.dataAttrLinkWeight("value")
			.dataAttrNodeText("name")
			.dataAttrNodeSize("nodesize");
d3.select("#network-container").datum(graph_data).call(forceGraph); */

//Adding event listeners
tabs.forEach(tab => tab.addEventListener("click", switchTabs));
logo.addEventListener("click", switchTabs);
logo_container.addEventListener("mouseenter", toggleLogo);
logo_container.addEventListener("mouseleave", toggleLogo);
d3.selectAll(".section").on("click", function(d, i){
    $('html, body').animate({
        scrollTop: $("#"+tab_ids[i]).offset().top},
        'slow');
})
/* split_text.forEach(ele => {
    ele.addEventListener("mouseover", addTextColor(ele));
    ele.addEventListener("mouseout", removeTextColor);
}); */
d3.selectAll(".split-text").on("mouseover", function(){
								var color = "rgba("+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ")";
								d3.select(this).style("color", color);    
							})
							.on("mouseout", function(){
								d3.select(this).style("color", "#fff");    
							});

/************************* FUNCTIONS *****************************/
function hideAllTabs() {
    tabs.forEach(tab => tab.classList.remove("active"));
}
function switchTabs (_) {
    var data_key = _.target.getAttribute("data-key");
    hideAllTabs();
    this.classList.add("active");
}
function toggleLogo () {
    var logo_classes = logo.classList;
    var logo_text_classes = document.getElementById("logo-text").classList;
    if(logo.classList.contains("hidden")){
        logo_text_classes.add("hidden");
        logo_classes.remove("hidden");
    }
    else {
        logo_text_classes.remove("hidden");
        logo_classes.add("hidden");
    }
}
function addTextColor (_this) {
	_this.style.color = "rgba("+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ")";
}
function removeTextColor(_) {
	_.target.style.color = "#fff";
}
function splitTextIntoSpans(_arr) {
    var color = "rgba("+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ")";
    console.log(color);
    for(var j in _arr) {
        var ele = document.getElementById(_arr[j]);
        var text = ele.innerHTML.split('');
        var split_text = "";
        for(var i in text){
            split_text += "<span class = 'split-text' >"+ text[i] +"</span>";
        }
        ele.innerHTML = split_text;
    }
}
