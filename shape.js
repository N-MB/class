class Shape{
calculatearea;
color;
    constructor(calculatearea,color){
        this.calculatearea = calculatearea;
        this.color = color;
}
drawshape(){
     let Shape = new mycolor();
     return Shape.getFullColor() - this.color; 
}
}
let myShape = new mycolor("square","red");
document.getElementsByClassName("demo").innerHTML = "My shape " + myshape.color() + "color";