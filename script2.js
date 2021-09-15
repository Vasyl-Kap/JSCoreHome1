// #2

'use strict'
let myMath = {
    a: 5,
    b: 2,
    get c() {
        return this.a + this.b;
    },
    sumFunction: function() {
        console.log(`${this.a} + ${this.b} = ${this.c}`)
    },
    get d() {
        return this.a * this.b;
    },
    multFunction: function() {
        console.log(`${this.a} * ${this.b} = ${this.d}`)
    },
    get e() {
        return this.a / this.b;
    },
    divFunction: function() {
        console.log(`${this.a} / ${this.b} = ${this.e}`)
    },
    get f() {
        return this.a - this.b;
    },
    subFunction: function() {
        console.log(`${this.a} - ${this.b} = ${this.f}`)
    }
}
myMath.sumFunction();
myMath.multFunction();
myMath.divFunction();
myMath.subFunction();

