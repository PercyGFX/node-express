const express = require('express')
const names = require('./data')
const app = express()



app.get('/:id', (req, res)=>{

   const newproducts = names.products.find((product)=>product.id == req.params.id)

   if (!newproducts){

      res.status(404).send("not found")
   }

   res.json(newproducts)
})

app.get('/api/names', (req,res)=> {

   const {name , limit} = req.query
  
   let sortedproducts = [...names.products]

   if(name){
sortedproducts = sortedproducts.filter((product)=>{

   return product.name.startsWith(name)
})
   }

   if(limit){
      sortedproducts = sortedproducts.slice(0,Number(limit))
   }

   res.json(sortedproducts)
})

app.listen(5000, ()=>{

   console.log('5000')
})