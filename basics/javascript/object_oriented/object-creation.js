//Way's to create object.

var person ={
    name:"Veera",
    age:"31",
    printDetails:function (){
        console.log("Name of the person is "+this.name+" and age is "+this.age);
    }
}

var person2=new Object()
person2.name="Jhon"
person2.age=25;
person2.printDetails=function (){
    console.log("Name of the person is "+this.name+" and age is "+this.age);
};

var person3=Object.create(null);
person3.name="Micheal"
person3.age=52;
person3.printDetails=function (){
    console.log("Name of the person is "+this.name+" and age is "+this.age);
};

person.printDetails();
person2.printDetails();
person3.printDetails();



