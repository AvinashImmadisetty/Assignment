import db from '../config/db.js';


const user = {
    create :(userData,callback)=>{
        const query = 'INSERT INTO users (id,username,password) VALUES (?,?,?)';
        db.query(query,[userData.id,userData.userName,userData.password],callback);
    },

    findById: (id,callback) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [id],callback);
      },
};

export default user;