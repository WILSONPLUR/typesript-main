// Using of generic type

//ES6 syntax
// const getter = <T>(data: T): T => data;


// //ES5
// function getters<T>(data: T): T {
//     return data;
// }


//Function arguments type
// const getter = <T>(data: T): T => data;

// getter<number>(10).length; //Property length does not exist in type '10'
// console.log(getter<string>('Generic type').length);// 12




//Generic class and Multiple generic

// class User<T, K> {
//     constructor(public name: T, public age: K) { }
//     public getUser(): string {
//         return `${this.name}, ${this.age}`;
//     }
// }

// const max = new User('Maxim', '2');
// // const m = new User('John', 2)//Success
// // const m = new User(3000, 2121);
// max.getUser()//Maxim, 2




//Specify generic type 'K' with keyword 'extends'
// class User<T, K extends number> {
//     constructor(public name: T, public age: K) { }
//     public getUser(): string {
//         return `${this.name}, ${this.age}`;
//     }
//     public getSecret(): number {
//         return this.age ** 2;
//     }
// }
