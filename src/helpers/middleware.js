
function validateTask(req,res,next){
    console.log("Validando tarea...");
    const {title, status} = req.body;
    if(!title || !status){
        return res.status(400).json({message: "Faltan campos obligatorios"});
    }
    if(typeof title !== 'string' || typeof status !== 'string'){
        return res.status(400).json({message: "Los campos deben ser de tipo string"});
    }
    if(title.trim() === '' || status.trim() === ''){
        return res.status(400).json({message: "Los campos no pueden estar vacíos"});
    }
    next();
}

function requireBody(req,res,next){
    if(!req.body){
        return res.status(400).json({message: "El cuerpo de la solicitud está vacío"});
    }
    next();
}
module.exports = {
    validateTask,
    requireBody,
}