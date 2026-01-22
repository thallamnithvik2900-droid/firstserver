const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());


let user=[
      {id:1, name:'Alice'},    
      {id:2, name:'Bob'},
      {id:3, name:'Charlie'},
      {id:4, name:'jjjjj'},
      {id:5, name:'jjjjj'},
      {id:6, name:'jjjjj'}
  ]

app.get('/getuser', (req, res) => {
      res.json(user)
});



app.post('/adduser', (req, res) => {

      let newUser = req.body
       console.log(req.body)
      user.push(newUser)
      res.json({message: 'User added successfully', user: newUser})
})


app.put('/updateuser/:id', (req, res) => {
      
      let id =req.params.id;
      
      let name = req.body.name;
      
        for(let i=0; i<user.length; i++){
            if(user[i].id == id){
                user[i].name = name;
                break;
            }   
        } 
      res.json({message: 'User updated successfully', user: user })
})

app.delete("/deleteuser/:id", (req, res) => {
      let id = req.params.id;
   
      user = user.filter(u => u.id != id);    []

      res.json({message: 'User deleted successfully', users: user})

})


app.listen(3000, () => {
      console.log('Server is running on port 3000')
});