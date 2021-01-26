//Object type using any
// let user: any = {
//     name: '',
//     age: 30
// }

// user = 'test'// My advice: not use any. You should describe type.




//Define object type
// let user: { name: string, age: number, nickName: string} = {
//     name: 'Michael',
//     age: 20,
//     nickName: 'MLOUT'
// }
//Error, principle DRY
// let admin: { name: string, age: number, nickName: string} = {
//     name: 'Michael',
//     age: 20,
//     nickName: 'MLOUT'
// }


//Good

//Type using for objects structure
type Person = { name: string, age: number, nickName?: string, getPass?: () => string }

let user: Person = {
    name: 'Michael',
    age: 20,
    nickName: 'MLOUT'
}

let admin: Person = {
    name: 'Donald',
    age: 23,
    nickName: 'DMIN',
    getPass(): string {
        return 'Admin'
    }
}


