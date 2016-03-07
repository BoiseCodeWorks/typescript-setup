/**
 * Person
 */
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
            return this.name;
        };
        this.name = name;
        this.age = age;
    }
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var jake = new Person("Jake", 30);
jake.setName("Tom");
jake.getName() === "Tom";
