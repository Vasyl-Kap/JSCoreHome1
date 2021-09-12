// #2

let myMath = {
    a: 5,
    b: 2,
    get c() {
        return this.a + this.b;
    },
    sum() {
        console.log(`${this.a} + ${this.b} = ${this.c}`)
    },
    get d() {
        return this.a * this.b;
    },
    mult() {
        console.log(`${this.a} * ${this.b} = ${this.d}`)
    },
    get e() {
        return this.a / this.b;
    },
    div() {
        console.log(`${this.a} / ${this.b} = ${this.e}`)
    },
    get f() {
        return this.a - this.b;
    },
    sub() {
        console.log(`${this.a} - ${this.b} = ${this.f}`)
    }
}
myMath.sum();
myMath.mult();
myMath.div();
myMath.sub();

