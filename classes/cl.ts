//Classes

//classes types, including constructor
// class User {
//     name: string;
//     age: number;
//     nickName: string

//     constructor(name: string, age: number, nickName: string) {
//         this.name = name;
//         this.age = age;
//         this.nickName = nickName;
//     }
// }

//classes types modificators

// class User {
//     public name: string;//Free access
//     private nickName: string;//Only for this class
//     protected age: number;//Access only for extends classes and this class
//     readonly pass: number;//Only for read

//     constructor(name: string, age: number, nickName: string, pass:number) {
//         this.name = name;
//         this.age = age;
//         this.nickName = nickName;
//         this.pass = pass;
//     }
// }


//Default properties for classes
// class User {
//     name: string;
//     nickName: string;
//     age: number = 20;
//     constructor(name: string, age: number, nickName: string, pass:number) {
//         this.name = name;
//         this.age = age;
//         this.nickName = nickName;
//     }
// }




//Minimization of Class properties

// class User {
//     constructor(
//         public name: string,
//         public age: number,
//         public nickName: string,
//         public pass: number
//     )
//     {}
//     changeAge(age: number) {
//         this.age = age
//     }
//     set newPass(pass: number) {
//         this.pass = pass
//     }
// }

// const personOne = new User('John', 30, 'johny', 2)
// personOne.changeAge(20)
// console.log(personOne.age)//Change age with method changeAge
// personOne.newPass = 5
// console.log(personOne.pass)//Change pass with setter of Class(call property)

