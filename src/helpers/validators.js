async function isOnlyNumber(option,preguntar){
    let salir = false;
    while(salir === false){
        option = option.trim();
        if(option.length === 0 || isNaN(option)){
            console.log("Por favor ingrese un solo numero válido.");
            option = await preguntar("Ingrese una opción numérica: ");
        } else {
            salir = true;
        }
    }
    return option;
}
module.exports = {
    isOnlyNumber,
}