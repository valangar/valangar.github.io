/***********************BOUNCING CIRCLES MODULE *****************************/

// Declare namespace
d3.bCircles = {};

// Declare component: (this outer function acts as the closure):
d3.bCircles.bCirclesModule = function module() {
    // Defaults values:
    var margin = {top: 10, right: 10, bottom: 20, left: 20},
        width = 900,
        height = 500,
        svg,
        circles;

    function exports(_selection) { // create function to export
        _selection.each(function(_data) { 
            var num_circles = 200,
                rect = [50, 50, width - 50, height - 50],
                nodes = [];

            //configure the {num_circles} circles
            for (i in d3.range(num_circles)) {
                nodes.push({radius: 2, x: rect[0] + (Math.random() * (rect[2] - rect[0])), y: rect[1] + (Math.random() * (rect[3] - rect[1])), speedX: (Math.random() - 0.5) * 2, speedy: (Math.random() - 0.5) * 2});
            }
            /* var simulation = d3.forceSimulation().nodes(nodes),
                charge_force = d3.forceManyBody().strength(-200),
                center_force = d3.forceCenter(width / 2, height / 2);

            simulation
                .force("charge_force", charge_force)
                .force("center_force", center_force)
                .on("tick", tickActions ); */

           /*  var force = d3.forceSimulation()
                            .nodes(nodes)
                            .force("gravity", 0)
                            .force("charge", 0)
                            .force("alpha", 0.1)
                            .on("tick", tick)
                            .start(); */

            svg = d3.select(this).append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(0,0)");
            
            circles = svg.selectAll("circle")
                            .data(nodes)
                            .enter()
                            .append("circle")
                            .attr("r", function(d){ return d.radius; })
                            .attr("cx", function(d){ return d.x; })
                            .attr("cy", function(d){ return d.y; })
                            /* .call(force.drag) */;
            
            //adding a glow to circles
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
            
            circles.style("filter", "url(#glow)");
        });
    }// exports end
    function tickActions(e) {
        circles/*. each(gravity(e.alpha))
                .each(collide(0.5)) */
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; });
    }
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

    return exports;
};