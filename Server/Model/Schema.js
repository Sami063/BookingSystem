const mongoose = require('mongoose');

const Scheme = mongoose.Schema

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: email,
        require: true,
    },
    password: {
        type: password,
    },
});
// Relationships to the table & user
const reservationSchema = mongoose.Scheme({
    reservationDate: {
        type: DateTime.now()
    },
    arrivalDate: {
        type: Date,
        require: true,
    }, 
    arrivalTime: {
        type: DateTime,
        require: true,
    },
    user: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    ],
    resturant: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Resturant'}
    ],
    table: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Table'}
    ]
});

const tableSchema = new mongoose.Schema({ 
    tableNo: {
        type: Number
    },
    partySize: {
        type: Number
    },
    reserved: {
        type: Boolean
    }
}); 

const resturantSchema = new mongoose.Schema({
    resturantName: {
        type: String,
    },
    cityId: {
        String
    }, 
    description: {
        type: String
    },
});

const citySchema = new mongoose.Schema({
    cityName: { 
        type: String,
    }
});

const User = Schema('user', userSchema);
const Resturant = Schema('resturant', resturantSchema);
const Reservation = Schema('reservation', reservationSchema);
const Table = Schema('table', tableSchema);
const City = Schema('city', citySchema); 
