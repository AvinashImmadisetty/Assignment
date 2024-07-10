import user from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();


const authController = {
  signup: (req, res) => {
    const { id, userName, password } = req.body;
    user.findById(id,(err,results)=>{
      if(err)
        return res.status(500).send("Error on the server")
      if(results.length)
        return res.status(200).send('User Already exist');
      else
      {
        user.create({ id, userName, password }, (err, result) => {
          if (err) 
            return res.status(500).send('Error on the server.');
          res.status(201).send('User registered successfully!');
        });
      }
    });
    
  },

  login: (req, res) => {
    const { id, password } = req.body;
    
    user.findById(id, (err, results) => {
      if (err) 
        return res.status(500).send('Error on the server.');
      if (!results.length) 
      {
        return res.status(404).send('No user found.');
      }

      const result = results[0];
      if(result.password!==password) 
        return res.status(401).send('Password is Incorrect');
      res.status(200).send("user found");
    });
  },
};

export default authController;
