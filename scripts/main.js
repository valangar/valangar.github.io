var tab_content = Array.from(document.querySelectorAll(".tab-contents")),
    tabs = Array.from(document.querySelectorAll(".tabs")),
    tab_width = 100,
    tab_ids = ["about-pg", "skills-pg", "work-pg", "contact-pg"];
    logo = document.getElementById("logo"),
    contents = document.getElementById("content-area"),
    rCircles = d3.rCircles.rCirclesModule()
    forceGraph = graphModule(),
	graph_data = {"nodes": nodes, "links": links };
	
//Initial setup
hideAllTabs();
splitTextIntoSpans(["hello", "my-name"]);
d3.select(".logo").on("mouseover", function(){
                        d3.select("#logo-text").classed("hidden", false);
                        d3.select("#logo").classed("hidden", true);
                    })
                    .on("mouseout", function(){
                        d3.select("#logo-text").classed("hidden", true);
                        d3.select("#logo").classed("hidden", false);
                    });
d3.selectAll(".tabs").on("click", function(d, i){
    $('html, body').animate({
        scrollTop: $("#"+tab_ids[i]).offset().top},
        'slow');
})
d3.selectAll(".split-text").on("mouseover", function(){
    var color = "rgba("+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ")";
    d3.select(this).style("color", color);    
})
.on("mouseout", function(){
    d3.select(this).style("color", "#333");    
});
//creating some circles that are very confused about where they are going:
/* rCircles.width(screen.width - tab_width - 40)
        .height(screen.height - 100);
d3.select("#home-pg").call(rCircles); */

//creating network graph in the contacts page:
forceGraph.graphSpaceWidth((window.innerWidth / 2) - tab_width )
			.graphSpaceHeight(window.innerHeight - 100)
			.nodeColors(d3.scaleOrdinal(d3.schemeCategory20))
			.dataAttrNodeGrp("group")
			.dataAttrLinkWeight("value")
			.dataAttrNodeText("name")
			.dataAttrNodeSize("nodesize");
d3.select("#network-container").datum(graph_data).call(forceGraph);

//Adding event listeners
tabs.forEach(tab => tab.addEventListener("click", switchTabs));
logo.addEventListener("click", switchTabs);

/************************* FUNCTIONS *****************************/
function hideAllTabs() {
    tabs.forEach(tab => tab.classList.remove("active"));
}
function switchTabs (_) {
    var data_key = _.target.getAttribute("data-key");
    hideAllTabs();
    this.classList.add("active");
}
function splitTextIntoSpans(_arr) {
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