var logo = d3.selectAll("#logo"),
	my_dp = d3.selectAll("#my-dp"),
    split_text = d3.selectAll(".split-text");
	
//Initial setup
splitTextIntoSpans(["hello", "my-name"]);

//Adding event listeners
d3.select("#profile-pic")
	.on("mouseover", function(){
		logo.classed("hidden", true);
		my_dp.classed("hidden", false);
	})
	.on("mouseout", function(){
		logo.classed("hidden", false);
		my_dp.classed("hidden", true);
	});
	
d3.selectAll(".split-text").on("mouseover", function(){
								var color = "rgba("+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ","+(Math.random() * (256 - 1) + 1) + ")";
								d3.select(this).style("color", color);    
							})
							.on("mouseout", function(){
								d3.select(this).style("color", "#fff");    
							});

/************************* FUNCTIONS *****************************/
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
