const express = require('express')
const router = express.Router()

//ruta para el index
router.get('/', (req,res)=>{
    res.render('index.html')
})

//ruta para categorias
router.get('/Categorias', (req,res)=>{
    res.render('htdocs/Categorias.html')
})

//ruta para compras
router.get('/Compras', (req,res)=>{
    res.render('htdocs/Compras.html')
})

//ruta para favoritos
router.get('/Favoritos', (req,res)=>{
    res.render('htdocs/Favoritos.html')
})

//ruta para productos
router.get('/Productos', (req,res)=>{
    res.render('htdocs/Productos.html')
})

module.exports = router