const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECTION OPEN');
        // const movieSchema = new mongoose.Schema({
        //     title: String,
        //     year: Number,
        //     score: Number,
        //     rating: String
        // });
        // const Movie = mongoose.model('Movie', movieSchema);

        // INSERT METHODS

        // const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.5, rating: 'R' });
        // amadeus.save();

        // Movie.insertMany([
        //     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
        //     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
        //     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
        //     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
        //     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
        // ])
        //     .then(data => {
        //         console.log('IT WORKED!');
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         console.log('ERROR!');
        //         console.log(err);
        //     })



        // SEARCH METHODS

        // Movie.find({}).then(data => { console.log(data); })
        // Movie.find({ rating: 'PG-13' }).then(data => { console.log(data); })
        // Movie.find({ title: { $in: ['Amadeus', 'Stand By Me'] } }).then(data => console.log(data))



        // UPDATE METHODS

        // Movie.updateOne({ title: 'Amadeus' }, { year: 1984 })
        //     .then(res => {
        //         console.log(res);
        //     })

        // Movie.findOneAndUpdate({ title: 'The Iron Giant' }, { score: 7.8 }, { new: true })
        //     .then(res => console.log(res))

        //DELETE METHODS

        // Movie.deleteMany({ year: { $gte: 1999 } }).then(res => console.log(res));
        // Movie.findOneAndDelete({ title: 'Alien' }).then(res => console.log(res));

        // const productSchema = new mongoose.Schema({
        //     name: {
        //         type: String,
        //         required: true,
        //         maxlength: 20
        //     },
        //     price: {
        //         type: Number,
        //         min: [0, 'Price must be positive!']
        //     },
        //     onSale: {
        //         type: Boolean,
        //         default: false
        //     },
        //     categories: {
        //         type: [String],
        //         default: ['Cycling']
        //     },
        //     qty: {
        //         online: {
        //             type: Number,
        //             default: 0
        //         },
        //         inStore: {
        //             type: Number,
        //             default: 0
        //         }
        //     },
        //     size: {
        //         type: String,
        //         enum: ['S', 'M', 'L']
        //     }
        // })

        // const Product = mongoose.model('Product', productSchema);
        // const bike = new Product({ name: 'Bike Helmet 3', price: 19.5, categories: ['Cycling', "Safety"], qty: { online: 5, inStore: 5 } });

        // const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'S' });
        // bike.save()
        //     .then(data => {
        //         console.log('IT WORKED');
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         console.log('OH NO ERROR!');
        //         // console.log(err);
        //         // console.log(err.errors.name.properties.message);
        //         // console.log(err.errors.size.message);
        //         // console.log('Valid sizes are: ' + err.errors.size.properties.enumValues);
        //     })

        // Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 15 }, { new: true, runValidators: true })
        //     .then(data => {
        //         console.log('IT WORKED');
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         console.log('OH NO ERROR!');
        //         console.log(err.errors.price.message);
        //     })

    })
    .catch(err => {
        console.log('CONNECTION ERROR');
        console.log(err);
    })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.get('*', (req, res) => {
    res.send(`<h1 style='color:tomato'>Error 404 - Page Not Found</h1>`);
})

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`);
})