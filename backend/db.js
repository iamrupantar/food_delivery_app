const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://iamrupantar:Mohuya12345@cluster0.ehdp8ww.mongodb.net/FoodCart?retryWrites=true&w=majority'
// const mongoDB =async() =>{
// await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
//     if(err) console.log("---",err)
//     else{
//     console.log("connected");
//     const foodCollection = await mongoose.connection.db.collection("food_items");
//     foodCollection.find({}).toArray(function(err,data){
//         if(err) console.log("err");
//         else console.log();
//     })
//     }
// });
// }
// 
// module.exports= mongoDB;
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---" + err)
        else {
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
        }
    })
};
