const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String, 
    }
   });

        // Reservation Schema
     const reservationSchema = new Schema({
        resturantId: { 
            type: Number
        },
        arrivalDate: {
            type: Date
        },
        arrivalTime: {
            type: String
        },
        partySize: { 
            type: String 
        }, 
        // user: [
        //     {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
        // ],
       })

   const User = mongoose.model('User', userSchema );
   const Reservation = mongoose.model('Reservation', reservationSchema);
 
   module.exports = User, Reservation;
  
