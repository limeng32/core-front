KISSY.add('random', [], function (S, require, exports, module) {
    module.exports = function (p) {
        if(p == null){
            p = {};
        }
        var collection = p.collection == null ? ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] : p.collection;
        var size = p.size == null ? 0 : p.size;
        var useTimestamp = p.useTimestamp == null ? false : p.useTimestamp;
        this.generate = function () {
            var res = "";
            if (useTimestamp) {
                res += new Date().getTime();
            }
            for (var i = 0; i < size; i++) {
                var id = Math.ceil(Math.random() * (collection.length-1));
                res += collection[id];
            }
            return res;
        };
    }
});