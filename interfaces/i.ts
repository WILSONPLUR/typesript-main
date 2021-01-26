// interface Person {
//     name: string,
//     age: number,
//     nickName?: string // <-- Optional type
// }

// const user: Person = {
//     name: "Kelly",
//     age: 20,
//     nickName: "Kj"
// }



//Interface with 'readonly' modifier

// interface User {
//     readonly name: string,
//     age: number
// }

// const bob: User = {
//     name: 'Bob',
//     age: 25
// }

// bob.age = 26//26, we can change age
// bob.name = "Bobby"//but with readonly, we cannot(Error)




//Interface extension

// interface User {
//     name: string,
//     age: number,
//     [propName: string]: any;
// }

// //Расширяем интерфейс
// const customer: User = {
//     name: "Rick",
//     age: 27,
//     nickName: "Rickyr", //Interface don't control this propert
//     id: 1  //Interface don't control this propert
// }





//Class interface

// interface User {
//     name: string,
//     subname: string,
//     age: number,
//     getProfile(): string
// }

// class Charley implements User {
//     name: string = "Charley";
//     readonly subname: string = "AJOK";
//     age: number = 29;
//     getProfile(): string {
//         return `Your name: ${this.name}\nYour subname and age: ${this.subname}, ${this.age}`
//     }
// }

// const c = new Charley()
// // c.subname = ""
// console.log(c.getProfile());
