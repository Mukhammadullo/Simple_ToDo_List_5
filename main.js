let box = document.querySelector(".box")
let dialogEdit = document.querySelector(".dialogEdit")
let inpName = document.querySelector(".inpName")
let inpCity = document.querySelector(".inpCity")
let btnEdit = document.querySelector(".btnEdit")
let inpAddName = document.querySelector(".inpAddName")
let inpAddCity = document.querySelector(".inpAddCity")
let btnAdd = document.querySelector(".btnAdd")
let inpSelect = document.querySelector(".select")

let data = [
    {
        id: 1,
        name: "Hasan",
        city: "Dushanbe",
        isComplete: false
    },
    {
        id: 2,
        name: "Surush",
        city: "Bokhtar",
        isComplete: false
    },

]

// search
let search = document.querySelector(".search")
search.oninput = () => {
    let data2 = data.filter((elem) => {
        return elem.name.toLowerCase().trim().includes(search.value.toLowerCase().trim())
    })
    get(data2)
}

///sleetct
inpSelect.onclick = () => {
    if (inpSelect.value == "Dushanbe") {
        let data2 = data.filter((elem) => {
            return elem.city == "Dushanbe"
        })
        get(data2)
    }
    else if (inpSelect.value == "Bokhtar") {
        let data2 = data.filter((elem) => {
            return elem.city == "Bokhtar"
        })
        get(data2)
    }
    else if (inpSelect.value == "Khujand") {
        let data2 = data.filter((elem) => {
            return elem.city == "Khujand"
        })
        get(data2)
    }
    else {
        get(data)
    }
}



// get
function get(data) {
    box.innerHTML = ""
    data.forEach((elem) => {
        let forName = document.createElement("h2")
        forName.innerHTML = elem.name

        let forCity = document.createElement("h3")
        forCity.innerHTML = elem.city

        // edit
        let editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editBtn.onclick = () => {
            editUser(elem.id)
        }

        // del
        let btnDel = document.createElement("button")
        btnDel.innerHTML = "Delete"
        btnDel.onclick = () => {
            delUser(elem.id)
        }

        //complete
        let check = document.createElement("input")
        check.type = "checkbox"
        check.checked = elem.isComplete
        check.onclick = () => {
            comlepteUser(elem.id)
        }
        if (elem.isComplete) {
            forName.style.textDecoration = "line-through"
        }


        let card = document.createElement("div")
        card.append(forName, forCity, editBtn, btnDel, check)
        card.classList.add("cards")


        box.append(card)
    })
}
get(data)

// complete
function comlepteUser(id) {
    data = data.map((elem) => {
        if (elem.id == id) {
            elem.isComplete = !elem.isComplete
        }
        return elem
    })
    get(data)
}

// delete
function delUser(id) {
    data = data.filter((elem) => {
        return elem.id != id
    })
    get(data)
}


// edit
let idx
function editUser(id) {
    dialogEdit.showModal()
    let user = data.find((elem) => elem.id == id)
    inpName.value = user.name
    inpCity.value = user.city
    idx = user.id
}
btnEdit.onclick = () => {
    data = data.map((elem) => {
        if (elem.id == idx) {
            elem.name = inpName.value
            elem.city = inpCity.value
        }
        return elem
    })
    dialogEdit.close()
    get(data)
}


// add
btnAdd.onclick = () => {
    let newUser = {
        id: 1,
        name: inpAddName.value,
        city: inpAddCity.value,
        isComplete: false
    }
    data.push(newUser)
    get(data)
    inpAddName.value = ""
    inpAddCity.value = ""
}




// recursion function
// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));


