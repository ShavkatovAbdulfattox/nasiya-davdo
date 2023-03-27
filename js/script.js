const newUser = [{
    date: new Date(2023, 0, 25),
},
{ date: new Date(2023, 0, 25) },
{ date: new Date(2022, 0, 22) },
{ date: new Date(2023, 0, 23) },
{ date: new Date(2023, 0, 05) },
{ date: new Date(2022, 11, 30) },
{ date: new Date(2022, 11, 22) },
{ date: new Date(2022, 11, 22) }
]

const main = document.querySelector(".main--content");

const date = newUser.map(user => {

    return `<h2>${user.date}</h2>`
})
main.innerHTML = date 