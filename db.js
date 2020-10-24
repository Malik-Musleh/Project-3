const mongoose= require("mongoose")

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(process.env.DB_URI_2,options,()=>{
      console.log("the database is working well!"),
      (err)=>{console.log(err);}
  })