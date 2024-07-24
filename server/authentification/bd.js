const mongoose=require("mongoose");
module.exports=() =>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
console.log ("connected to database succeffuly");
    }
    catch(error){
        console.log("error")
        console.log("failed to connect the databases ")

    }
}