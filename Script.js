const acti = (tarea, callback, duracion) =>{
    setTimeout(()=>{
        callback(tarea);
    }, duracion)
}

acti("Levantarse", (tarea)=>{
    console.log("Tarea: "+tarea);
    acti("Tender la cama", (tarea)=>{
        console.log("Tarea: "+tarea);
        acti("Bañarse", (tarea)=>{
            console.log("Tarea: "+tarea);
            acti("Tomar clase de paradigmas", (tarea)=>{
                console.log("Tarea: "+tarea);
                acti("Desayunar", (tarea)=>{
                    console.log("Tarea: "+tarea);
                    acti("Jugar videojuegos", (tarea)=>{
                        console.log("Tarea: "+tarea);
                    }, 10000)
                }, 8000)
            }, 5000)
        }, 3000)
    }, 3000)
}, 5000)