const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente de la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}