const {response} = require('express');

const usuriosGet = (req = request, res = response) => {

  const {nombre = 'No  name', numero, page = 1, limit } = req.query;
    res.json({
        msg:"get API - controlador",
        nombre,
        numero,
        page,
        limit
    })
  }

const usuariosPost = (req,  res = response) => {

  const {nombre, edad} = req.body;

    res.json({
        msg:"put API - controlador",
        nombre,
        edad
    })
  }
const usuariosPut = (req,  res = response) => {

  const {id} = req.params;
    res.json({
        msg:"post API - controlador",
        id
    })
  }
const usuariosPatch = (req,  res = response) => {
    res.status(500).json({
        msg:"delete API - controlador"
    })
  }
const usuariosDelete = (req,  res = response) => {
    res.json({
        msg:"patch API - controlador"
    })
  }

module.exports = {
    usuriosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}