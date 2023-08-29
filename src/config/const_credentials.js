const credentials = {
    DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/",
    DB_NAME: process.env.DB_NAME || "damble",
    APP_SHORT_NAME:process.env.SHORT_NAME || "damble",
    ROLE: {
        ADMIN: 'admin',
        USER: 'user',
    },
    BASE_URL:"http://127.0.0.1:4001/",
    STATUSCODE: {
        "OK": 200,
        "INTERNAL_SERVER_ERROR": 500,
        "UNAUTHORIZED": 401,
        "BAD_REQUEST": 400,
        "NOT_FOUND": 404
    },
};

module.exports = credentials;