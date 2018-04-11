/***********************RANDOMLY MOVING CIRCLES MODULE *****************************/

// Declare namespace
d3.rCircles = {};

// Declare component: (this outer function acts as the closure):
d3.rCircles.rCirclesModule = function module() {
    // Defaults values:
    var margin = {top: 0, right: 0, bottom: 0, left: 0},
        width = 1900,
        height = 700,
		radius = 3,
        svg,
        circles;

    function exports(_selection) { // create function to export
        _selection.each(function(_data) { 
            var num_circles = 500,
                data = d3.range(num_circles).map(function() {
					return {x: width * Math.random(), y: height * Math.random(), dx: Math.random() - 0.5, dy: Math.random() - 0.5};
				});

            svg = d3.select(this).append("svg")
                    .attr("width", width)
                    .attr("height", height);
            
            circles = svg.selectAll("circle")
                            .data(data)
                            .enter()
                            .append("circle")
                            .attr("r", radius);
            
				
			d3.timer(function() {
				circles.attr("cx", d => { 
							d.x += d.dx; 
							if(d.x > width) d.x -= width;
							else if(d.x < 0) d.x += width;
							return d.x;
						})
						.attr("cy", d => { 
							d.y += d.dy; 
							if(d.y > height) d.y -= height;
							else if(d.y < 0) d.y += height;
							return d.y;
						})
					
			});
            /*//adding a glow to circles
            //Container for the gradients
            var defs = svg.append("defs");
            //Filter for the outside glow
            var filter = defs.append("filter").attr("id","glow");
            filter.append("feGaussianBlur")
                    .attr("stdDeviation","1.0")
                    .attr("result","coloredBlur");
            var feMerge = filter.append("feMerge");
            feMerge.append("feMergeNode").attr("in","coloredBlur");
            feMerge.append("feMergeNode").attr("in","SourceGraphic");
            
            circles.style("filter", "url(#glow)");*/
        });
    }// exports end
    // Getters and Setters: 
    exports.width = function(_x) {
        if (!arguments.length) return width;
        width = parseInt(_x);
        return this;
    };
    exports.height = function(_x) {
        if (!arguments.length) return height;
        height = parseInt(_x);
        return this;
    };
	exports.radius = function(_x) {
        if (!arguments.length) return radius;
        radius = parseInt(_x);
        return this;
    };

    return exports;
};