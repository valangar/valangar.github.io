let gooeyModule = function module () {
    let width = 100,
        height = 100;
    function gooeyCircles(_selection) {
        _selection.each(function(_data) {
            
        });
    }
    gooeyCircles.SVGWidth = function(_num) {
        if(!arguments.length) return width;
        width = _num;
        return this;
    }

    gooeyCircles.SVGHeight = function(_num) {
        if(!arguments.length) return height;
        height = _num;
        return this;
    }
}