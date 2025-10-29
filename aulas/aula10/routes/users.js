const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.post('/login',(req,res)=>{
  const { username, password } = req.body;
  if(username === 'jose@iesb.edu.br' && password === 'abcd1234'){
    const payload = {email:username,nome:'Jose'}
    try{
      return res.json({token:auth.gerarToken(payload)})
    }catch(err){
      return res.status(500).json({msg: err.message});
    }
  }
    
  return res.status(401).json({msg:"Credenciais inválidas"})
})

module.exports = router;
