//Readonly<T>
// interface User {
//     name: string;
// }

// const customer_user: Readonly<User> = {
//     name: "John"
// }

// customer_user.name = "Max"; //Error, readonly





//Required<T>
interface Props {
    a?: number,
    b?: string
}

const obj: Props = { a: 17 };//OK
// const obj2: Required<Props> = {a: 20}//Error: property 'b' missing





//Record<T, K>

// interface PageInfo {
//     title: string
// }

// type Page = 'home' | 'about' | 'contact';

// const x: Record<Page, PageInfo> = {
//     about: { title: 'about' },
//     home: { title: 'home' },
//     contact: { title: 'contact'}
// }


//Pick<T, K>

// interface Todo {
//     title: string;
//     desc: string;
//     completed: boolean
// }

// type TodoPreview = Pick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//     title: "Good",
//     completed: true
// }