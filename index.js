const express = require('express');
const sequelize = require('./config/db');
const app = express();
const port = 3000;

app.get('/libros/:id',async(req,res)=>{
    try { 
        console.log("Funciona")
        console.log(req.params.id)
        const [result] = await sequelize.query ('SELECT * FROM libros WHERE id = ?',{
            replacements:[req.params.id],
            type: sequelize.QueryTypes.SELECT
        })
        console.log(result);
        if (result == undefined){
            res.json({respuesta:true,mensaje:"No se encontro el libro",resultado:null}) 
        }
        else{
            res.json({respuesta:true,mensaje:"Se encontro el libro",resultado:result}) 
        }
       
    } catch (error) {
        console.log("No funca")
        console.log("Error"+ error)
        res.json({
            respuesta:false,
            mensaje:error,
            resultado:null
        })
    }
});  

  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`); 
  });