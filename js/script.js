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
// const formattedDate = 

const date = newUser.map(user => {

    return `<h2>${new Intl.DateTimeFormat("uz", {
        day: "numeric",
        month: "long", // 2-digit
        year: "numeric", // 2-digit
        weekday: "long"
    }).format(user.date)}</h2>`
})
main.innerHTML = date 