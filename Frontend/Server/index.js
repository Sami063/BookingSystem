const express = require('express'); // import express
const mongoose = require('mongoose');
const app = express();
const cors = require("cors")

// Importing User, Reservation from Model/Schema
const User = require('./Model/Schemas'); 
// const Reservation = require('./Model/Schemas');

app.use(cors()); // Important for fetching data/blocking
app.use(express.json()); // Reseive data from frontend as a json file

const PORT = 4000; // Backend port

// MongoDb ConnectionString
mongoose.connect('mongodb://127.0.0.1:27017/BookingDb', { 
    useNewUrlParser: true
}); 

// find all users
app.get('/api/user', (req, res) => {
    User.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        consle.log(err)
    })
})

// register user
app.post('/register', async (req, res) => {

    const { fullName, email, password } = req.body
    const user = User({fullName, email, password})

    await user.save()
    res.json(user);
}); 

// Login authentication

let LoggedIn;
app.post('/api/login', async (req, res) => { 
    const {email, password} = req.body

    const user = await User.findOne({email, password}).lean();
    
    if(user.email, user.password) {
        LoggedIn = user._id  // The LoggedIn user Id
        console.log(user.fullName, 'just logged in')
        res.json({status: 'ok', data: 'kahduservbkcjha'})
    }
}) 

app.get('/', function(req, res) { 
    res.send('welcome to the app!'); 
}) 
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
}); 
 

// Tests
const courses = [
    {id: 1, name: 'co 1'},
    {id: 2, name: 'co 2'},
    {id: 3, name: 'co 3'},
    {id: 4, name: 'co 4'},
]
app.get('/api/courses', (req, res) => {
    res.send(courses)
})
app.get('/api/courses/:id', (req, res) => {
    const c = courses.find( c => c.id === parseInt(req.params.id))
    

    if(!c) {
       res.send('course not found') 
    } res.send(c)
})

app.post('/reservation', (req, res) => {
    
});



// const addUser = req.body;
// const user = new User(addUser)

// const {email} = req.body
// const exist = await User.findOne({email}).lean()

// if(exist.email) {
//     console.log('user already exist!')
    
// } else {
//     console.log('user not exist!')
// }
// // console.log(fullName) 
// await user.save()
// res.json(user);



// const Signup = (req, res) => {
//     User.findOne({where: {email: req.body.email}})
//     .then((dbUser) => {
//         if(dbUser) {
//             console.log('user already exist')
//         }
//     })
// }