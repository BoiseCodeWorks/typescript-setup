/**
 * Person
 */
class Person {
    public setName (name){
        this.name = name
    }
    public getName = function(){
        return this.name;
    }
    constructor(public name :string, private age :number) {
        this.name = name;
        this.age = age;
    }   
}

var jake = new Person("Jake", 30);
jake.setName("Tom");
jake.getName() === "Tom"