const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 4444

require('dotenv').config()
mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log("db connected");
})

app.listen(PORT , () => {
    console.log(`app running on ${PORT}`);
})


//Schemas

const cardSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    } ,
    price : {
        type: Number,
        required: true
    }
})

const Cards = mongoose.model("Cards" , cardSchema)


//post
app.post("/cards" , async( req, res) => {
    const newCard = new Cards({
        ...req.body
    })

    await newCard.save()
    res.send(newCard)
})

//get
app.get("/cards" , async(req ,res)=> {
    const data = await Cards.find()
    res.send(data)
})

//get by id
app.get("/cards/:id" , async(req , res)=> {
    const {id} = req.params
    const target = await Cards.findById(id)
    res.send(target)
})

//delete
app.delete("/cards/:id" , async (req , res) => {
    const {id} = req.params
    await Cards.findByIdAndDelete(id)
    res.send(`${id}'s card has been deleted`)
})