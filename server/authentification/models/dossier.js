const mongoose =require('mongoose');


const jwt =require('jsonwebtoken');
const Joi =require('joi');
const passswordComplexity=require("joi-password-complexity");


const DossierSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    statut: { type: String, enum: ['en attente', 'en cours', 'terminé'], default: 'en attente' },
    dateCreation: { type: Date, default: Date.now },
    dateModification: { type: Date, default: Date.now },
    utilisateurResponsable: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
    estExterne: { type: Boolean, default: false }
  });
  
  const Dossier = mongoose.model('Dossier', DossierSchema);