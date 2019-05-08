const express = require("express")
const teams = express.Router()

const Team = require("../models/Team")


//making a new team
teams.post("/createteam",(req, res) => {
    const teamData = {
        name: req.body.name,
        game: req.body.game,
        type: req.body.type,
        memo: req.body.memo,
        player1: req.body.player1
    }

    Team.findOne({
        where:{
            name: req.body.name
        }
    })
    .then(team =>{
        if (!team) {
            
            Team.create(teamData)
            .then(function () {
                console.log("Registered Team")
             //   res.redirect(307, "/team");
             res.json("Team created");
                
        })
            .catch(err => {
                res.send("error: " + err)
            })
        }
        else {
            res.json({error: "Team already exists"})
        }
        
        })     
        .catch(err =>{
            res.send("error: " + err)
        })
    })

    module.exports = teams