const sendCookie = (user, statusCode, res) => {
    const jwtToken = user.generateToken()

    const option = {
        expires: new Date(Date.now() + process.env.EXPIRY),
        httpOnly: true,

    };

    res.status(statusCode).cookie('jwtToken', jwtToken).json({
        success: true,
        message: "User Logined hai",
        jwtToken
    });
}

module.exports = sendCookie;