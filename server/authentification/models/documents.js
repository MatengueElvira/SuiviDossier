const mongoose =require('mongoose');


const jwt =require('jsonwebtoken');
const Joi =require('joi');
const passswordComplexity=require("joi-password-complexity");




const DocumentSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    type: { type: String, required: true },
    taille: { type: Number, required: true },
    dateUpload: { type: Date, default: Date.now },
    dossier: { type: mongoose.Schema.Types.ObjectId, ref: 'Dossier' }
  });

  const Document = mongoose.model('Document', DocumentSchema);