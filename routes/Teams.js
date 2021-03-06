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

    teams.post("/findteam",(req, res) => {
        Team.findAll({
            where: {
              game: req.body.game,
              type: req.body.type
            }
          })
        
        .then(team =>{
            if (team) {
                res.json(team);
            }
            else {
                res.json({error: "No teams found"})
            }
        });
    })


    teams.post("/findactiveteam",(req, res) => {
        Team.findAll({
            where: {
           player1: req.body.player1
            
             
            }
          })
        
        .then(team =>{
            if (team) {
                res.json(team);
            }
            else {
                res.json({error: "No teams found"})
            }
        });
    })


    teams.post("/findteam2",(req, res) => {
        Team.findAll({
            where: {
             id:req.body.id
            }
          })
        
        .then(team =>{
            if (team) {
                res.json(team);
            }
            else {
                res.json({error: "No teams found"})
            }
        });
    })

    teams.post("/updateteam2",(req, res) => {
        Team.findAll({
            where: {
             id:req.body.id
            }
          })
        
        .then(team =>{
            if (team.player2 === null) {
                Team.update({
                    player2: req.body.player2
                  }, {
                      where: {
                        id: req.body.id
                       }
                    }).then(team =>{
                       
                            res.json(team);
                        })
                        
            }
            else {
                Team.update({
                    player3: req.body.player2
                  }, {
                      where: {
                        id: req.body.id
                       }
                    }).then(team =>{
                       
                        res.json(team);
                    })
            }
        });
    })
    

    module.exports = teams