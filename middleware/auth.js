import jwt from 'jsonwebtoken'

// Auth 
const auth = async (req, res, next) => {
    const {token} = req.cookies;

    if (!token){
        return res.status(401).json({
            message: 'Error: Un authorised token deined!'
        })
    }

    const {JWT_SECRET} = process.env;
    try {
        const decodedToken = await jwt.verify(token, JWT_SECRET);
        req.auth={...decodedToken, isAuthenticated: true, action: "login"};
    } catch (err) {
        console.log("Token verified error: ", err);
        return res.status(401).json({
            message: 'Error: Un authorised token denied!'
        });
    }

    next();
}

export default auth;