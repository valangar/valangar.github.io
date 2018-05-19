let mapModule = function module () {
    let width = 100,
        height = 100;
    function map(_selection) {
        _selection.each(function(_data) {
            
        });
    }
    map.SVGWidth = function(_num) {
        if(!arguments.length) return width;
        width = _num;
        return this;
    }

    map.SVGHeight = function(_num) {
        if(!arguments.length) return height;
        height = _num;
        return this;
    }
}