const mango =require('mongoose');
mango.connect("mongodb://localhost:27017/coder",{useNewUrlParser:true},{useUnifiedTopology:true})
.then(()=>console.log('connection'))
.catch((err)=>console.log(err))

// to save one document we should use documentName.save()
const programmingType= new mango.Schema({
    name:String,
    programming:String,
    type:String,
    video:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const program=new mango.model('programming',programmingType);
const createDocument=async()=>{
    try {
        const chetan=new program({
            name:"chetan",
            programming:'css',
            type:"Front End",
            video:60,
            active:true
        })
        const nikhil=new program({
            name:"nikhil",
            programming:'mongo DB',
            type:"Back End",
            video:40,
            active:true
        })
        const sridhar=new program({
            name:"sridhar",
            programming:'html',
            type:"Front End",
            video:100,
            active:true
        })
        const sambhav=new program({
            name:"sambhav",
            programming:'javascript',
            type:"Front End",
            video:120,
            active:true
        })
        const result=await program.insertMany([chetan,nikhil,sridhar,sambhav]);
    } catch (error) {
        console.log(err);
    }
}

const getDocument=async()=>{
    // const result=await program.find({type:"Front End"}).limit(1).skip(1)
    // .select() give the object key
    // const result=await program.find({video:{$gt:50}})
    // const result=await program.find({video:{$gte:50}})
    // const result=await program.find({video:{$lt:50}})
    // const result=await program.find({video:{$lte:50}})
    // const result=await program.find({type:{$in :['Back End']}})
    // const result=await program.find({type:{$nin :['Back End']}})
    console.log(result);
}
getDocument()