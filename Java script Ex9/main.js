let car  ={
    make: "harreir",
    modal: "Toyota",
    year: 2024,
    start : function(){
        console.log("the car has started" + "  "  +this.make)
    }
}
console.log(car);
// console.log(car.start),
car.start();