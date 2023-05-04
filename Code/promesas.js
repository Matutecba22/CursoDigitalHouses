//// PROMESAS

function saludar(mensaje) {

    // como crear una promesa
    return new Promise((resolve, reject) => {


        setTimeout(() => {

            if (mensaje) {
                resolve(mensaje)
            }
            reject('upssssss')
        }, 500);

    })
}


let mensaje = "";
console.log("Paso 1");
saludar("Hola, ")
    .then((respuesta) => {
        mensaje = respuesta
        return saludar(respuesta + "esto ")
    }).then((respuesta) => {
        mensaje = respuesta
        return saludar(respuesta + "es ")
    }).then((respuesta) => {
        mensaje = respuesta
        return saludar()//respuesta + "un "
    }).then((respuesta) => {
        mensaje = respuesta
        return saludar(respuesta + "mensaje ")
    }).then((respuesta) => {
        console.log(respuesta)
    }).catch((error) => {
        console.log(error);
    })

saludar("actores");

saludar("generos")

/**
 * 
 * PROMISE ALL
 */

Promise.all([

    saludar("actores"),

    saludar()
]).then(([actores, generos]) => {

    console.log({ actores });
    console.log({ generos });
}
).catch((error) => {
    console.log({ error });
});

/**
 * 
 * PROMISE ALLSETTLED
 */

Promise.allSettled([
    saludar("actores"),
    saludar("generos"),
    saludar(),
    saludar("cines")
]).then((respuesta) => {
    console.log({ respuesta });
    /////
    const fulfilled = respuesta.filter((res) => res.status == "fulfilled")
    const rejected = respuesta.filter((res) => res.status == "rejected")

    console.log({ fulfilled });
    console.log({ rejected });
    /////
}
)

////// ASYNC AWAIT

async function init() {
    try {
        let mensajeNueva = await saludar("Hola, ");
        mensajeNueva += await saludar("esto ")
        mensajeNueva += await saludar()// es
        mensajeNueva += await saludar("un ")
        mensajeNueva += await saludar("mensaje ")
        console.log(mensajeNueva);
        
    } catch (error) {
        console.log({error});
        
    }
}
init();

async function init1() {
    try {
        const [actores, generos,productoras,cines] = await Promise.all([
            saludar("actores"),
            saludar("generos"),
            saludar(),
            saludar("cines")

            
            
        ])
        console.log({actores});
        console.log({generos});
        console.log({productoras});
        console.log({cines});
        
    } catch (error) {
        console.log({error});
    }
    
}