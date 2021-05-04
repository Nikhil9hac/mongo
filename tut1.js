// inserting document
const mongo=require('mongoose');
mongo.connect("mongodb://localhost:27017/mongo",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connection'))
.catch((err)=>console.log(err))

const studentType=new mongo.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    learning:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
});
const model =new mongo.model('newInsert',studentType)
const createDocument=async()=>{
    try {
        const chetan=new model({
            name:"chetan",
            age:15,
            learning:"css",
            active:true
        });
        const shambhav=new model({
            name:"sambhav",
            age:15,
            learning:"javascript",
            active:true
        });
        const sridhar=new model({
            name:"sridhar",
            age:15,
            learning:"html",
            active:true
        });
        const result=await model.insertMany([chetan,shambhav,sridhar])
    } catch (error) {
        console.log(error);
    }
}
const getDocument=async()=>{
    try {
        const result=await model.find({name:"sridhar"}).select({learning:0}).limit(1);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
createDocument();
getDocument();