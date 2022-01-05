class circle{
    color;
        constructor(color){
            this.color = color;
    }
    drawshape(){
         let circle = new mycolor();
         return circle.getFullColor() - this.color; 
    }
    }
    let mycircle = new mycolor("yellow");
    document.getElementsByClassName("demo").innerHTML = "My color " + mycircle.color() + "color";