//Basics types
const str: String = 'Hello'
const bool: Boolean = true
const int: Number = 2
const arr: Array<any> = ['sd', 23]//Generic type
const tuple: [string, number] = ['', 2]
enum Directions1 {
    Up = 1, //set index for all elements
    Down = 2,
    Left = 3,
    Right = 4
}
// const msg = "hello"
// const error = (msg: string): never => {
//     throw new Error(msg);
// }//Type never
// function printMessage(): void {
//     console.log("we don't return anything");
// }
// interface Book {
//     name?: string,
//     id: number
// }

// function printBook(book: Book): object {
//     return book
// }

// console.log(printBook({name: "Good", id: 1}))
