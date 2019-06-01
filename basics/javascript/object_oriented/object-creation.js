//Way's to create object.
// Literal Notation.
var person ={
    name:"Veera",
    age:"31",
    printDetails:function (){
        console.log("Name of the person is "+this.name+" and age is "+this.age);
    }
}
//Using new Object 
var person2=new Object()
person2.name="Jhon"
person2.age=25;
person2.printDetails=function (){
    console.log("Name of the person is "+this.name+" and age is "+this.age);
};
//Using Object.create(prototype)
var person3=Object.create(null);
person3.name="Micheal"
person3.age=52;
person3.printDetails=function (){
    console.log("Name of the person is "+this.name+" and age is "+this.age);
};

//Using constructor function.
function Person(name,age){
    this.name=name;
    this.age=age;
    this.printDetails=function (){
        console.log("Name of the person is "+this.name+" and age is "+this.age);
    };
}

//Out of all approaches , constructor function is the best approach.
//it allows us to define template to create objects (by passing agruments to constructor function
// during object creation) and it has it's own prototype object.
person.printDetails();
person2.printDetails();
person3.printDetails();
new Person("Abraham",21).printDetails();


