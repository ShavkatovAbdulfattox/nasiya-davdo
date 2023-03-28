

const data = {
    admin: [
        {
            login: "admin",
            pin: "root",
        }
    ],
    userInformation: [
        {
            id: 0,
            pin: 1111,
            name: "Abdulbosit",
            date: new Date(2023, 0, 25),
            phoneNumber: "991009898",
            product: {
                model: "Iphone 14 Max",
                image: "https://cdn.macbro.uz/macbro/d35cfadb-2308-42fe-b7f5-da7dd24a4b74",
                realPrice: 1420,
                givenMoney: 600,
                percent: 40,
                consumption: 14,
                term: 4,
                monthlyPay: 250,
                calcWentOutAmount() {
                    return this.realPrice - this.givenMoney + this.consumption
                },
                calcTotalAmount() {
                    let total = (this.realPrice - this.givenMoney + this.consumption)
                    return (total * this.percent / 100) + total
                },
                monthlyPay() {
                    return this.calcTotalAmount() / this.term

                },
                remPay() {
                    let remain = this.calcTotalAmount()
                    return remain
                }
            },
            responsiblePerson: {
                imei: "imei 7311",
                name: "c 49 usmonaka",
            },
        },
        {
            id: 1,
            pin: 2222,
            name: "Fazliddin",
            date: new Date(2022, 0, 22),
            phoneNumber: "931035344",
            product: {
                model: "Iphone 11 128gb",
                image: "https://cdn.macbro.uz/macbro/9f8317e9-493a-4c5b-8ccd-19e34f529212",
                realPrice: 400,
                givenMoney: 200,
                consumption: 14,
                percent: 50,
                term: 8,

                calcWentOutAmount() {
                    return this.realPrice - this.givenMoney + this.consumption
                },
                calcTotalAmount() {
                    let total = (this.realPrice - this.givenMoney + this.consumption)
                    return (total * this.percent / 100) + total
                },
                monthlyPay() {
                    return this.calcTotalAmount() / this.term
                },
                remPay() {
                    let remain = this.calcTotalAmount()
                    return remain
                }
            },
            responsiblePerson: {
                imei: "imei 3515",
                name: "99 005 53 44"
            },
        },
        {
            id: 3,
            pin: 3333,
            name: "muzap jiyan",
            date: new Date(2023, 0, 23),
            phoneNumber: "994890070",
            product: {
                model: "Iphone 12 128gb",
                realPrice: 500,
                givenMoney: 0,
                consumption: 0,
                percent: 20,
                term: 4,
                image: "https://cdn.macbro.uz/macbro/397b968b-7ae8-44e7-9336-dd04b7440bb1",
                calcWentOutAmount() {
                    return this.realPrice - this.givenMoney + this.consumption
                },
                calcTotalAmount() {
                    let total = (this.realPrice - this.givenMoney + this.consumption)
                    return (total * this.percent / 100) + total
                },
                monthlyPay() {
                    return this.calcTotalAmount() / this.term
                },
                remPay() {
                    let remain = this.calcTotalAmount()
                    return remain
                }
            },
            responsiblePerson: {
                imei: "imei 4891",
                name: "muzap jiyan "
            },
        },
        {
            id: 4,
            pin: 4444,
            name: "sirdaryo",
            date: new Date(2023, 0, 23),
            phoneNumber: "911006650",
            product: {
                model: "Iphone 13 Max",
                realPrice: 1120,
                givenMoney: 500,
                consumption: 10,
                percent: 50,
                term: 8,
                image: "https://cdn.macbro.uz/macbro/e4574dbe-73d2-4cfb-b5b2-65cd3d149021",
                calcWentOutAmount() {
                    return this.realPrice - this.givenMoney + this.consumption
                },
                calcTotalAmount() {
                    let total = (this.realPrice - this.givenMoney + this.consumption)
                    return (total * this.percent / 100) + total
                },
                monthlyPay() {
                    return this.calcTotalAmount() / this.term
                },
                remPay() {
                    let remain = this.calcTotalAmount()
                    return remain
                }
            },
            responsiblePerson: {
                imei: "imei 27913",
                name: "ozi "
            },
        },
        {
            id: 5,
            pin: 5555,
            name: "islom",
            date: new Date(2023, 0, 05),
            phoneNumber: "994585900",
            product: {
                model: "Iphone 13pro 128",
                realPrice: 940,
                givenMoney: 200,
                consumption: 3,
                percent: 40,
                term: 8,
                image: "https://cdn.macbro.uz/macbro/e4574dbe-73d2-4cfb-b5b2-65cd3d149021",
                calcWentOutAmount() {
                    return this.realPrice - this.givenMoney + this.consumption
                },
                calcTotalAmount() {
                    let total = (this.realPrice - this.givenMoney + this.consumption)
                    return (total * this.percent / 100) + total
                },
                monthlyPay() {
                    return this.calcTotalAmount() / this.term
                },
                remPay() {
                    let remain = this.calcTotalAmount()
                    return remain
                }
            },
            responsiblePerson: {
                imei: "imey 25224",
                name: "fariza ogan "
            },
        },
        {
            id: 6,
            pin: 6666,
            name: "Abdulbosit",
            date: new Date(2022, 11, 30),
            phoneNumber: "991009898",
            product: {
                model: "iphone 11 pro",
                image: "https://cdn.macbro.uz/macbro/2675312c-997d-4fcf-802c-34bc11171b1d",
                realPrice: 450,
                givenMoney: 100,
                percent: 20,
                consumption: 17,
                term: 4,
                calcWentOutAmount() {
                    return this.realPrice - this.givenMoney + this.consumption
                },
                calcTotalAmount() {
                    let total = (this.realPrice - this.givenMoney + this.consumption)
                    return (total * this.percent / 100) + total
                },
                monthlyPay() {
                    return this.calcTotalAmount() / this.term

                },
                remPay() {
                    let remain = this.calcTotalAmount()
                    return remain
                }
            },
            responsiblePerson: {
                imei: "imei 0000",
                name: "abduvahob",
            },
        },
        {
            id: 7,
            pin: 7777,
            name: "abboshon komolon",
            date: new Date(2022, 11, 22),
            phoneNumber: "900150777",
            product: {
                model: "iphone 14 pro max",
                image: "https://cdn.macbro.uz/macbro/d35cfadb-2308-42fe-b7f5-da7dd24a4b74",
                realPrice: 1470,
                givenMoney: 400,
                percent: 30,
                consumption: 5.4,
                term: 6,
                calcWentOutAmount() {
                    return this.realPrice - this.givenMoney + this.consumption
                },
                calcTotalAmount() {
                    let total = (this.realPrice - this.givenMoney + this.consumption)
                    return ((total * this.percent / 100) + total)
                },
                monthlyPay() {
                    return this.calcTotalAmount() / this.term

                },
                remPay() {
                    let remain = this.calcTotalAmount()
                    return remain
                }
            },
            responsiblePerson: {
                imei: "imey 6612222",
                name: "azimjon garant ",
            },
        },
        {
            id: 8,
            pin: 1111,
            name: "abdulbosit s 49",
            date: new Date(2022, 11, 22),
            phoneNumber: "900150777",
            product: {
                model: "iphone 14 pro max",
                image: "https://cdn.macbro.uz/macbro/d35cfadb-2308-42fe-b7f5-da7dd24a4b74",
                realPrice: 1470,
                givenMoney: 400,
                percent: 30,
                consumption: 5.4,
                term: 6,
                calcWentOutAmount() {
                    return this.realPrice - this.givenMoney + this.consumption
                },
                calcTotalAmount() {
                    let total = (this.realPrice - this.givenMoney + this.consumption)
                    return ((total * this.percent / 100) + total)
                },
                monthlyPay() {
                    return this.calcTotalAmount() / this.term

                },
                remPay() {
                    let remain = this.calcTotalAmount()
                    return remain
                }
            },
            responsiblePerson: {
                imei: "imey 00",
                name: "sardorga olindi ",
            },
        },
    ]
    // https://cdn.macbro.uz/macbro/2accc770-d5f3-4da4-9a5d-7e16423df22c 13 iphone
    // https://cdn.macbro.uz/macbro/2675312c-997d-4fcf-802c-34bc11171b1d 11 pro 
}

// variables 
const adminInformation = document.querySelector(".admin--information")

const main = document.querySelector(".main--content");
const mainContainer = document.querySelector(".main")

const tabContainer = document.querySelector(".header__tabs--content");
const loginButton = document.querySelector(".nav__input--enter");

const inputLoginName = document.querySelector(".nav__input--name");
const inputLoginPin = document.querySelector(".nav__input--pin");

const navMessage = document.querySelector(".nav--message")

const labelTotalAmount = document.querySelector(".admin--information__total")
const labelTotalConsumption = document.querySelector(".admin--information__consumption")
const labelTotalBenefit = document.querySelector(".admin--information__benefit")
// ================
const colors = {
    violet: "blueviolet",
    red: "red",
    gold: "gold",
    black: "black"

}
let categoryName = "";
let currentAccount;
// ================

// ** functions **


// ** ============================
const removeTabsAndInformation = () => {
    // ! Removing tabs in order to avoid of duplication
    const tabs = document.querySelectorAll(".header--tab")
    tabs.forEach(tab => {
        tab.remove()
    })
    adminInformation.style.display = "none"
}
const removeUserInformation = () => {
    // ! Removing userInformation in order to avoid of duplication
    const user = document.querySelectorAll(".user");
    user.forEach(product => {
        product.remove()
    })
}
const numberFormatter = (num) => {
    return new Intl.NumberFormat("uz", {
        style: "currency",
        currency: "usd",
        minimumFractionDigits: 2
    }).format(num)

}
// ** ============================


// fetching data
const fetchData = (data) => {
    removeUserInformation()
    // fetching data, UI
    data.map(data => {

        const { id, name, date, phoneNumber, product, responsiblePerson } = data;

        // Formatting date in order to show to the user date 
        const options = {

            day: "numeric",
            month: "long", // 2-digit
            year: "numeric", // 2-digit
            weekday: "long"
        }
        const formattedDate = new Intl.DateTimeFormat("uz", options).format(date)


        // creating userInformation html elements 
        const userInformation = `
            <section class="user">
            <div class="user__left--information">
          <img
            src="${product.image}"
            alt="${product.model}"
            class="user__left--img"
          />

          <div class="user__left--desc">
            <h2 class="model-name ${setBackground(product.model)}">${product.model.toUpperCase()}</h2>
            <h3 class="model">
              Olingan narxi :
              <span class="price">${product.realPrice} $</span>
            </h3>
            <h3 class="model">
              Rasxod :
              <span class="price">${product.consumption} $</span>
            </h3>
            <h3 class="model">
              Berilgan narxi :
              <span class="given-money">${product.givenMoney} $</span>
            </h3>
            <h3 class="model">
              Ustiga qoyilgan foiz :
              <span class="price">${product.percent} %</span>
            </h3>
            <h3 class="model">
              Nechi oyga olindi :
              <span class="price">${product.term} oyga</span>
            </h3>
          </div >
        </div >
    <div class="user__right--information">
        <h2 class="model-name ${setBackground(product.model)}">Foydalanuvchini ma'lumotlari</h2>
        <div class="user--desc ">
            <div class="user--photo ${setBackground(product.model)}">ID${id}</div>
            <div class="user--desc__detail">
                <h2>
                    Foydalanuvchi ismi: <span class="user--name">${name.split(" ")[0].toUpperCase()}</span>
                </h2>
                <h2>
                    Foydalanuvchi nomeri:
                    <span class="user--phone">+${phoneNumber}</span>
                </h2 >
            </div >
        </div >

        <div class="user__responsible">
            <h3>
                <div>
                    Telefon <b class="imei"><em>imei ID :</em></b>
                </div>
                <span class="user__responsible--imei">${responsiblePerson.imei?.split(" ")[1]}</span>
            </h3>
            <h3>
                Telefonga mas'ul odam :
                <span class="user__responsible--name">${responsiblePerson.name}</span>
            </h3>
        </div>
        <div class="user--important__informations">
            <h2>muhim ma'lumotlar</h2>
            <h3>Chiqazilgan summa :<span>${numberFormatter(product?.calcWentOutAmount())}</span></h3>
            <h3>Jami summa :<span>${numberFormatter(product?.calcTotalAmount())}</span></h3>
            <h3>Oylik tolov summa :<span>${numberFormatter(product?.monthlyPay())}</span></h3>
            <h3>Qoldiq tolov summa :<span>${numberFormatter(product.remPay())}</span></h3>
        </div>
        <div class="user__date">
            <h2>Nasiyaga olingan sana 👇</h2>
            <p>${formattedDate}</p>
        </div>
    </div >
      </section >
    `
        main.insertAdjacentHTML("afterbegin", userInformation)

    });
 
}
function setBackground(productName) {
    const name = productName.slice(0, 9).toLowerCase();
    let color
    switch (name) {
        case "iphone 11":
            color = colors.black
            break;
        case "iphone 12":
            color = colors.red
            break;
        case "iphone 13":
            color = colors.gold
            break;

        default:
            color = colors.violet
            break;

    }
    return color
}


const createTabs = (data) => {

    // Slicing the model name in order to take only name + num
    const tabsName = data.map(data => {
        const { product } = data
        const model = product.model.slice(0, 9);
        return model.toLowerCase()
    })
    // Iterating tabsName in order to add button to the UI
    for (const [key, tab] of Object.entries(['Hammasi', ...new Set(tabsName)])) {
        tabContainer.insertAdjacentHTML("beforeend", `<button class="btn-primary header--tab ${+key === 0 ? "active" : ""
            }" data-id="${key}">${tab.toUpperCase()}</button>`)
    }
    const buttons = document.querySelectorAll(".header--tab")
    // ! Checking for active class , and representing data to the UI
    buttons.forEach(btn => {
        const isActive = btn.classList.contains("active")
        if (!isActive) return
        data.filter(data => data.product.model.toLowerCase().includes(btn.textContent.toLowerCase()));

    })
}


const activeButton = (e) => {
    const buttons = document.querySelectorAll(".header--tab");
    let target = e.target.textContent.toLowerCase()
    // guard 
    if (!e.target.classList.contains("header--tab")) return
    // remove active class
    buttons.forEach(btn => {
        btn.classList.remove("active")
    })
    // add active class
    e.target.classList.add("active")
    // ! Assigning the active text to the categoryName
    categoryName = target
}

const categoryFunc = (e) => {
    if (!e.target.classList.contains("header--tab")) return
    // Filtering data in order to get the data which has exact name as the global variable categoryName  
    const filteredData = data.userInformation.filter(dat => dat.product.model.toLowerCase().includes(categoryName));
    if (filteredData.length === 0) {
        // checking for length if it is equal to 0 fetch just a data
        fetchData(data.userInformation)
        return
    }
    fetchData(filteredData)
}

const showMessage = (parent, className, message) => {
    const text = `<h3 class="nav--message__${className}">${message}</h3>`
    parent.innerHTML = text;
    setTimeout(() => {
        parent.innerHTML = ""
    }, 2000)
}
const updateUi = () => {
    adminInformation.style.display = "block"
    createTabs(data.userInformation)
    fetchData(data.userInformation)
}
const calcTotalPrice = () => {

    const movements = data.userInformation.reduce((obj, { product }) => {
        const { realPrice } = product
        const { consumption } = product
        obj.totalBetAmount += realPrice
        obj.consumption += consumption
        return obj
    }, {
        totalBetAmount: 0,
        consumption: 0,
        benefit: 0
    })

    const { totalBetAmount: total, consumption: cons, benefit: ben } = movements
    labelTotalAmount.textContent = `${numberFormatter(total)} `
    labelTotalConsumption.textContent = `${numberFormatter(cons)} `
    labelTotalBenefit.textContent = `${numberFormatter(ben)} `

}
// Events 

tabContainer.addEventListener("click", (e) => {
    activeButton(e)
    categoryFunc(e)
})

loginButton.addEventListener("click", (e) => {

    e.preventDefault()
    // ! Removing tabs from admin in order to do not show to the users
    removeTabsAndInformation()
    // find the user , and assign it to the currentAccount
    currentAccount = data.userInformation.find(user => user.name.toLowerCase() === inputLoginName.value.toLowerCase())

    if (currentAccount?.pin === +inputLoginPin.value) {
        // display ui
        fetchData([currentAccount])
        showMessage(navMessage, "success", "You are entered successfully !")
    } else if (data.admin[0].login === inputLoginName.value && data.admin[0].pin === inputLoginPin.value) {
        // show message
        showMessage(navMessage, "success", "You are entered successfully !")
        // Creating the money Information for admin
        calcTotalPrice()
        // update UI
        updateUi()
    }
    else {
        // if all coed above is false , then show error message  
        showMessage(navMessage, "danger", "Please enter correct password !")
        removeUserInformation()
    }

})



