const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function (req,res,next) {
    //Get the token from the header

    const token = await req.header('x-auth-token');

    //Check if tk not present
    if(!token) {
        return res.status(401).json({ msg: 'Authorisation denied' });
    }

    try{
        const decode = jwt.verify(token,config.get('jwtAAPEFP'));

        req.doctor = decode.doctor;
        next();
    }
    catch(err){
        res.status(401).json({ msg: 'Invalid token' });
    }
};