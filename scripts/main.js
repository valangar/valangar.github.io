var tab_content = d3.selectAll(".tab-contents"),
    tabs = d3.selectAll(".tabs"),
    section = d3.selectAll(".section"),
    logo = d3.selectAll("#logo"),
    logo_container = d3.selectAll(".logo"),
    split_text = d3.selectAll(".split-text"),
    contents = d3.selectAll("#content-area"),
    fireflies = document.getElementById("fireflies"),

    tab_width = 100,
    tab_ids = ["home-pg", "about-tab-content", "skills-tab-content", "work-pg", "blog-tab-content", "contact-tab-content"];
    
    rCircles = d3.rCircles.rCirclesModule(),
    forceGraph = graphModule(),
	graph_data = {"nodes": nodes, "links": links };
	
//Initial setup
hideAllTabs();
splitTextIntoSpans(["hello", "my-name"]);
//creating some circles that are very confused about where they are going:
rCircles.width(fireflies.clientWidth)
        .height(fireflies.clientHeight);
d3.select("#fireflies").call(rCircles);

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
tabs.on("mouseover", showTabTexts)
    .on("mouseout", hideTabTexts);
section.on("click", function(d, i){
            switchTabs(this);
            $('html, body').animate({
                scrollTop: $("#"+tab_ids[i]).offset().top},
                'slow');
        });
d3.selectAll(".split-text").on("mouseover", function(){
								var color = "rgba("+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ")";
								d3.select(this).style("color", color);    
							})
							.on("mouseout", function(){
								d3.select(this).style("color", "#fff");    
							});

/************************* FUNCTIONS *****************************/
function hideAllTabs() {
    tabs.classed("active", false);
}
function switchTabs (_this) {
    hideAllTabs();
    d3.select(_this).classed("active", true);
}
function showTabTexts() {
    tabs.selectAll(".tab-text").classed("invisible", false);
}
function hideTabTexts(_) {
    tabs.selectAll(".tab-text").classed("invisible", true);
}
function splitTextIntoSpans(_arr) {
    var color = "rgba("+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ")";
    for(var j in _arr) {
        var ele = d3.select("#"+_arr[j]);
        var text = ele.html().split('');
        var split_text = "";
        for(var i in text){
            split_text += "<span class = 'split-text' >"+ text[i] +"</span>";
        }
        ele.html(split_text);
    }
}
