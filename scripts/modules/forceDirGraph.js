//===================================Force Directed Graph Module=================================
//Built using Mike Bostock's Force Directed Graph: https://bl.ocks.org/mbostock/4062045
//AUTHOR of this module: Varsha Alangar
//CREATED ON: 05/07/2018
//LAST MODIFIED: 05/07/2018

let graphModule = function module(){
    let width = 200,
		height = 100,
		container,
		nodes_data = [],
		links_data = [],
		node_colors,
		data_attr_node_grp = undefined,
		data_attr_link_weight = undefined,
		data_attr_node_text = undefined,
		data_attr_node_size = undefined;
		
	let radius = 2,
		nodes,
		links,
		simulation;
    function graph(_selection) {
        _selection.each(function (_data) { 
			container = d3.select(this);
			nodes_data = _data.nodes;
			links_data = _data.links;
			let svg = container.append("svg")
					.attr("width", width)
					.attr("height", height);
			
			simulation = d3.forceSimulation()
								.force("link", d3.forceLink().id(function(d) { 
									if(data_attr_node_text !== undefined) return d[data_attr_node_text]; 
									return d.id; 
								}))
								.force("charge", d3.forceManyBody())
								.force("center", d3.forceCenter(width / 2, height / 2));
								
			links = svg.append("g")
							.attr("class", "links-g")
							.selectAll("line")
							.data(links_data).enter()
							.append("line")
							.attr("stroke-width", function(d){ 
								if(data_attr_link_weight != undefined) return Math.sqrt(d[data_attr_link_weight])/10;
								return 1.0;
							});
			
			nodes = svg.append("g")
							.attr("class", "nodes-g")
							.selectAll("circle")
							.data(nodes_data).enter()
							.append("circle")
							.attr("r", function(d){
								if(data_attr_node_size != undefined){
									return d[data_attr_node_size];
									/* if( size > 10 ) return 10;
									else if( size < 2 ) return 2;
									return size; */
								}
								return radius;
							})
							.attr("fill", function(d){
								if(data_attr_node_grp != undefined && typeof(node_colors) != undefined) return node_colors(d[data_attr_node_grp]);
								return "#e9e9fb";
							})
							.call(d3.drag()
							  .on("start", dragstarted)
							  .on("drag", dragged)
							  .on("end", dragended));
			
			simulation.nodes(nodes_data)
						.on("tick", ticked);
			simulation.force("link")
						.links(links_data);
						
			nodes.append("title")
				.text(function(d){ 
					if(data_attr_node_text !== undefined) return d[data_attr_node_text]; 
					return d.id;
				});
						
        });
    }
    function ticked() {
		links.attr("x1", function(d){ return d.source.x;  })
			.attr("y1", function(d){ return d.source.y; })
			.attr("x2", function(d){ return d.target.x; })
			.attr("y2", function(d){ return d.target.y; });
		nodes.attr("cx", function(d){ return d.x; })
			.attr("cy", function(d){ return d.y; });
	}
	function dragstarted(d) {
	  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
	  d.fx = d.x;
	  d.fy = d.y;
	}
	function dragged(d) {
	  d.fx = d3.event.x;
	  d.fy = d3.event.y;
	}
	function dragended(d) {
	  if (!d3.event.active) simulation.alphaTarget(0);
	  d.fx = null;
	  d.fy = null;
	}
    //getter/setter functions:
    graph.graphSpaceWidth = function (_num) {
        if(!arguments.length) return width;
        width = _num;
        return this;
    }
    graph.graphSpaceHeight = function (_num) {
        if(!arguments.length) return width;
        height = _num;
        return this;
    }
	graph.nodeColors = function (_fn) {
        if(!arguments.length) return node_colors;
        node_colors = _fn;
        return this;
    }
	//set the attribute name in the dataset that determines the node group. 
	//If the node colors are provided and the module is set to color nodes, then they will be colored based on the group they belong to.
	graph.dataAttrNodeGrp = function (_str) {
        if(!arguments.length) return data_attr_node_grp;
        data_attr_node_grp = _str;
        return this;
    }
	graph.dataAttrLinkWeight = function (_str) {
        if(!arguments.length) return data_attr_link_weight;
        data_attr_link_weight = _str;
        return this;
    }
    graph.dataAttrNodeText = function (_str) {
        if(!arguments.length) return data_attr_node_text;
        data_attr_node_text = _str;
        return this;
    }
	graph.dataAttrNodeSize = function (_str) {
        if(!arguments.length) return data_attr_node_size;
        data_attr_node_size = _str;
        return this;
    }
    return graph;
};