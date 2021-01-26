// abstract class Person {
//     constructor(public name: string, public age: number) { }
//     print(): void {
//         console.log(this.name)
//     }
//     abstract getPass(): string;
// }

// const p = new Person('Jimmy', 20)//Can't create instance

// class One extends Person {
//     name = "John"
//     constructor(name: string, age: number) {
//         super(name, age)
//     }
//     getPass(): string {
//         return `${this.name} + ${this.age}`
//     }
// }

// const o = new One('Max', 35);
// o.print()
// console.log(o.getPass())