var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        var Star = "*";
        var Space = " ";
        console.log("就先...强行只输5行吧");
        var Line = 5;
        hua(Line);
        function hua(Line) {
            for (var i = 1; i <= Line; i++) {
                var Drawline = "";
                for (var j = 1; j <= (Line + i - 1); j++) {
                    if ((Line - i + 1) <= j && j <= (Line + i - 1)) {
                        Drawline = Drawline + Star;
                    }
                    else {
                        Drawline = Drawline + Space;
                    }
                }
                console.log(Drawline);
            }
        }
        console.log("END");
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=main.js.map