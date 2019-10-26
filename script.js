// Function constructor

var John = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'theacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';
var john = new Person('John', 1990, 'teacher');
var adi = new Person('Ady', 1985, 'teacher');

john.calculateAge();
adi.calculateAge();

console.log(adi.lastName);
console.log(john.lastName);

