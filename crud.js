const mongo = require('mongoose');
mongo.connect('mongodb://localhost:27017/nikhil', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => {
        console.log('connection');
    }).catch(err => console.log(err));

// creating mongo.Schema

const studentType = new mongo.Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    learning: {
        type: String,
        uppercase: true
    },
    age: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// creating mongo.model

// const createDocument=async()=>{
//   try{
//       const chetan=new model({
//           name:"chetan",
//           learning:"js",
//           age:15,
//           active:true
//       })
//       const sridhar=new model({
//           name:"sridhar",
//           learning:"css",
//           age:15,
//           active:true
//       })
//       const nikhil=new model({
//           name:"nikhil",
//           learning:"mongoose",
//           age:14,
//           active:true
//       })
//       const result=await model.insertMany([nikhil,sridhar,chetan]);
//   }  
//   catch(err){
//       console.log(err);
//   }
// }

// createDocument();

// const getDocument = async () => {
//     const result = await model.find({age:{$lte:15}}).countDocuments()
//     console.log(result);
// }

// getDocument()

// const updateDocument = async () => {
//     const model = new mongo.model('student', studentType);
//     const result=await model.findByIdAndUpdate({_id:"609661967c3e82286047cdaf"},{
//         $set:{
//             learning:'on project',
//             age:15
//         }
//     })
// }
// updateDocument();

// const deleteDocument=async()=>{
//     const model=new mongo.model('student',studentType);
//     const result =await model.deleteMany();
// }
// deleteDocument();