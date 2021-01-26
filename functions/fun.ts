//Multiples argument types

// const createPassword = (name: string, age: number | string) => `${name}, ${age}`




//Default Arguments
// const createPassword = (name: string = "John", age: number | string = 21) => `${name}, ${age}`

// createPassword()//'John, 21'


//Function with optional argument 'age'
// const createPassword = (name: string, age?: number) => `${name}, ${age}`



//REST

// const createSkills = (name, ...skills) =>
//     `${name}, my skills were ${skills.join()}`;

//REST type
// const createSkills = (name: string, ...skills: Array<string>) =>
//     `${name}, my skills were ${skills.join()}`;

// createSkills('John', 'JS', 'Python')




//Returns type string
const createPassword = (name: string, age: number | string): string => `${name}, ${age}`

//Returns type number
const sum = (first: number, second: number): number => first + second

//Returns type object
const returnObject = (): object => ({}); 



//Describe function type

// let myFunc: () => void;
// function oldFunc(): void {
//     console.log('Hello, TS')
// }
// myFunc = oldFunc
// myFunc()
