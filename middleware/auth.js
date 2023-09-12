import jwt from 'jsonwebtoken'

// Auth 
export const adminauth = async (req, res, next) => {
    const {admintoken} = req.cookies;

    if (!admintoken){
        return res.status(401).json({
            message: 'Error: Unauthorised token deined!'
        })
    }

    const {JWT_SECRET} = process.env;
    try {
        const decodedToken = await jwt.verify(admintoken, JWT_SECRET);
        req.adminauth={...decodedToken, authenticated: true, action: "login"};
    } catch (err) {
        return res.status(401).json({
            message: 'Error: Un authorised token denied!'
        });
    }
    next();
}
export const userauth = async (req, res, next) => {
    const {usertoken} = req.cookies;
    if(!usertoken){
        return res.status(401).json({
            message: 'Error: Unsuthorised token denied!'
        })
    }
    const {JWT_SECRET} = process.env;
    try {
        const decodedToken = await jwt.verify(usertoken, JWT_SECRET);
        req.userauth={...decodedToken, authenticated: true, action: "login"};
    } catch (err) {
        return res.status(401).json({
            message: 'Error: Un authorised token denied!'
        });
    }
    next()
}

// export default auth;