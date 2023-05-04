let welcome = prompt("bienvenido! Por favor Ingrese su nombre")
console.log(`Bienvenido ${welcome}`)

const hamburguesas = [
    {name:"Hamburguesa clasica", price:1200},
    {name:"Hamburguesa cheddar", price:1200},
    {name:"Hamburguesa bacon", price:1400}
]

const lomitos = [
    {name:"lomito clasico", price:1600},
    {name:"lomito premium", price:1800},
    {name:"lomito palmito", price:1700}
]

const carrito = []
let total = 0

let hamName = hamburguesas.map(product => product.name)
let hamPrice = hamburguesas.map(product => product.price)

lomName = lomitos.map (product => product.name)
lomPrice = lomitos.map (product => product.price)

function menuHamburguesas() {
    selection = Number(prompt(`HAMBURGUESAS:
    1- ${hamName[0]}: $${hamPrice[0]}
    2- ${hamName[1]}: $${hamPrice[1]}
    3- ${hamName[2]}: $${hamPrice[2]}
    
    4- Salir`
    ))

    while (selection != "") {
    if (selection == 1) {
        carrito.push(hamburguesas[0]);
        total += hamPrice[0];
        menuHamburguesas()
        break;
    } else if(selection == 2) {
        carrito.push(hamburguesas[1]);
        total += hamPrice[1];
        menuHamburguesas()
        break;
    } else if(selection == 3) {
        carrito.push(hamburguesas[2]);
        total += hamPrice[2];
        menuHamburguesas()
        break;
    } else if(selection == 4) {
        interact();
        break;
    }else {
        alert("Elija entre las opciones que se muestran");
        continue;
    }
    }

}

function menuLomitos() {
    selection = Number(prompt(`LOMITOS:
    1- ${lomName[0]}: $${lomPrice[0]}
    2- ${lomName[1]}: $${lomPrice[1]}
    3- ${lomName[2]}: $${lomPrice[2]}
    
    4- Salir`
    ))

    while (selection != "") {
        if (selection == 1) {
            carrito.push(lomitos[0]);
            total += lomPrice[0];
            menuLomitos()
            break;
        } else if(selection == 2) {
            carrito.push(lomitos[1]);
            total += lomPrice[1];
            menuLomitos()
            break;
        } else if(selection == 3) {
            carrito.push(lomitos[2]);
            total += lomPrice[2];
            menuLomitos()
            break;
        } else if(selection == 4) {
            interact();
            break;
        }else{
            alert("Elija entre las opciones que se muestran");
            continue;
        }
    };
}

function showCarrito() {

    carrito.sort( (a, b) => {
    if(a.price < b.price) {
        return -1;
    }if(a.price > b.price) {
        return 1;
    }if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    } if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
        return 0;
    });

    console.log(`**CARRITO DE COMPRAS**`)

    for (let articles of carrito) {
        console.log(articles.name + " $" + articles.price)
    };
    console.log(`.
    Total: $${total}`);

    buy = Number(prompt(`
    1- realizar compra
    2- Volver al menu`
    ))

    if (buy === 1) {
        alert("gracias por su compra")
        console.log("COMPRA REALIZADA")
    } else {
        interact();
    }
}

function deleteCarrito() {
    borrar = Number(prompt("que elemento quieres eliminar"))

    carPrices = carrito.map (carProducts => carProducts.price);
    total -= carPrices[borrar-1];

    carrito.splice(borrar-1, 1);

    showCarrito();
}

function interact() {
    while (welcome != "") {
        let menu = Number(prompt(`Elija que va a querer hoy:
        1- Hamburguesas
        2- Lomitos

        3- Ver Carrito
        4- Eliminar del carrito
        
        5-Salir`
        ));

        if (menu === 1) {
            menuHamburguesas();
            break;
        } else if(menu === 2) {
            menuLomitos();
            break;
        } else if(menu === 3) {
            showCarrito();
            break;
        } else if(menu === 4) {
            deleteCarrito();
            break;
        } else if(menu === 5) {
            break;
        } else {
            alert("Por favor elija entre las opciones disponibles");
            continue;
        }


    }
}

interact();