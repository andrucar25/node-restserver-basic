const { Router } = require("express");

const {
  usuriosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
} = require("../controllers/user");

const router = Router();

router.get("/", usuriosGet);

router.post("/", usuariosPost);

router.put("/:id", usuariosPut);

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;
