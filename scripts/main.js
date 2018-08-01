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
	
d3.select("#skills-container").selectAll(".chip").on("click", function(d){
	console.log("clicked");
	let is_clicked = d3.select(this).classed("chip-clicked"),
		id = d3.select(this).attr("id");
	d3.select(this).classed("chip-clicked", !is_clicked);
	if(is_clicked){
		//remove skill from selected_chip array
		selected_chips.splice(selected_chips.indexOf(id), 1);
	}
	else{
		//add skill to selected_chip array
		selected_chips.push(id);
	}
	if(selected_chips.length == 0){
		resetFilter();
	}
	else{
		d3.selectAll(".work-card").classed("hidden", true);
		d3.selectAll("."+selected_chips.join(" ,.")).classed("hidden", false);
		d3.select("#reset-btn").classed("hidden", false);
		d3.selectAll("#work-pg-note").classed("hidden", true);
	}
});

d3.select("#reset-btn").on("click", function(){
	selected_chips = [];
	d3.selectAll(".chip").classed("chip-clicked", false);
	resetFilter();
});

//Functions
function resetFilter(){
	d3.selectAll(".work-card").classed("hidden", false);
	d3.select("#reset-btn").classed("hidden", true);
	d3.selectAll("#work-pg-note").classed("hidden", false);
}
	