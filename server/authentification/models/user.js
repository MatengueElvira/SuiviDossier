const mongoose =require('mongoose');


const jwt =require('jsonwebtoken');
const Joi =require('joi');
const passswordComplexity=require("joi-password-complexity");

const userSchema=new mongoose.Schema({
    NomUtilisateur:{type:String,required :true},
  password:{type:String,required :true},
   email:{type:String,required :false},
   matricule:{type:String,required :false,unique:true},
   role: { type: String, enum: ['utilisateur', 'directrice', 'chef','simpleStructMenber'], default: 'utilisateur' },
    type:{type:String,required :false},
});
userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this_id},process.env.JWTPRIVATEKEY,{expriresln:"7d"})
    return token
};
try{
    const User= mongoose.model("user",userSchema);
const validate=(data)=>{   
    const schema=Joi.object({
        NomUtilisateur : Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        password : passswordComplexity().required().label("password"), 
        email : Joi.string().email().required().label("email"),
        type : Joi.string().required().label("type"),
    });
    return schema.validate(data);

};
module.exports={User,validate};

} catch(error){
    console.log(error)
}
