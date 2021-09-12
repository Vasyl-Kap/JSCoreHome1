// #1

let person = {
    firstName: 'Ivan',
    secondName: 'Ivanov',
    showData() {
        console.log(`Name: ${this.firstName}, Surname: ${this.secondName}`)
    }
}

let newPerson = Object.assign({}, person);
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';
person.showData();
newPerson.showData();