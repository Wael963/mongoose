const express = require('express')
const router = express.Router()
const User = require('../models/userSchema')


router.post("/post", async (req, res) => {
    try {
        const users = await User.create(req.body)
        res.status(201).json({ msg: "User created", users })
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong", err: error })
    }
})

router.get("/getusers", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ msg: "Get all users", users })
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong", err: error })
    }
})
// Delete One Document Using model.findByIdAndRemove
router.delete("/delete/:id", async(req, res) => {
    try {
        console.log(req.params.id)
        const userDeleted = await User.findByIdAndDelete("66017a981de4451248118c31")
        res.status(200).json({ msg: "Users deleted" })
    } catch (error) {
        res.status(500).json({ msg: "Somthing went wrong", err: error })
    }
})
router.put("/Updateperson",async(req,res)=>{

    try {
        const users= await Person.findOneAndUpdate({ name: 'John wick' },req.body,{new:true})


        res.status(200).json({msg:"Find Person and Udapte",users})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong ",err:error})
    }

    })
    
    // Use model.findById() to Search Your Database By _id***


    router.get("/getbyid/:id",async(req,res)=>{

        try {
    
            const users= await Person.findById(req.params.id)
    
            res.status(200).json({msg:"Find By Id",users})
        } catch (error) {
            res.status(500).json({msg:"Something went wrong ",err:error})
        }
    
        })

//Perform Classic Updates by Running Find, Edit, then Save






module.exports=router



