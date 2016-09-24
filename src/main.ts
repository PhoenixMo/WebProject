class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
var Star="*";
var Space=" ";

 console.log("就先...强行只输5行吧");
var Line:number =5;
hua(Line);
function hua(Line:number):void {
    for(var i=1;i<=Line;i++) {
        var Drawline="";
        for(var j=1;j<=(Line+i-1);j++) {
          if((Line-i+1)<=j&&j<=(Line+i-1)) {
                Drawline=Drawline+Star;
           }else {
              Drawline=Drawline+Space;
           }
       }
      console.log(Drawline);
    }
}
console.log("END");

    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();


    
};