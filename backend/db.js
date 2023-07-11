const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = 'mongodb+srv://iamrupantar:Mohuya12345@cluster0.ehdp8ww.mongodb.net/FoodCart?retryWrites=true&w=majority'
// const mongoURI ='mongodb://iamrupantar:Mohuya@12345@ac-xfxbprn-shard-00-00.ehdp8ww.mongodb.net:27017,ac-xfxbprn-shard-00-01.ehdp8ww.mongodb.net:27017,ac-xfxbprn-shard-00-02.ehdp8ww.mongodb.net:27017/FoodCart?ssl=true&replicaSet=atlas-givuig-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const food_category = await mongoose.connection.db.collection("food_Category");
                food_category.find({}).toArray(function (err, catData) {
                    if (err) console.log("err");
                    else {
                        global.food_items = data;
                        global.food_category = catData;
                        // console.log(global.food_items);
                        // console.log(global.food_category);
                    }
                })

            })
        }
    });
}

module.exports = mongoDB();