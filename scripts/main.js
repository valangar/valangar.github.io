var logo = d3.selectAll("#logo"),
	my_dp = d3.selectAll("#my-dp"),
	selected_chips = [];
	
//Initial setup



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

d3.selectAll(".chip").on("click", function(d){
	if(selected_chips.indexOf(d.attr("id") >= 0)) selected_chips.push();
});


