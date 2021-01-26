enum Directions {
    Up,
    Down,
    Left,
    Right
}

// enum Directions {
//     Up = 2, //Set index for element
//     Down = 5,
//     Left = 8,
//     Right //Here index 9, because previous index = 8
// }

// console.log(Directions[0])//Up
// console.log(Directions[2]);//Left




// //Using
// enum links {
//     vk = 'https://vk.com',
//     youtube = 'https://youtube.com'
// }

// // links.vk//'https://vk.com'


//Optimizing(without using)

// const enum links {
//     youtube = 'https://youtube.com',
//     vk = 'https://vk.com'
// }

//Optimizing (with using)

// const enum links {
//     youtube = 'https://youtube.com',
//     vk = 'https://vk.com'
// }

// const array = [links.vk, links.youtube]