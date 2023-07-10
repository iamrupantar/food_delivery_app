const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://iamrupantar:Mohuya12345@cluster0.ehdp8ww.mongodb.net/FoodCart?retryWrites=true&w=majority'
const mongoDB =async() =>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
    if(err) console.log("---",err)
    else{
    console.log("connected");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err,data){
        if(err) console.log("err");
        else console.log();
    })
    }
});
}

module.exports = mongoDB();