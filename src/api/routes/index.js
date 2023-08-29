exports.apiRoutes = (app) => {
    app.use("/api/", require('./customerRoute'));
    app.use("/api/", require('./swagger'));
};