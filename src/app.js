const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});


const userRoutes = require('./routes/userRoutes');
const exhibitorRoutes = require('./routes/exhibitorRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 150000,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// Check api-key
app.use('*', (req, res, next) => {
    const api_key = req.headers['api-key'];
    if (!api_key || api_key !== process.env.API_KEY) { 
        const err = new AppError(404, 'fail', 'unauthorized authentication required');
        next(err, req, res, next);
    } 
    next();
})

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/exhibitor', exhibitorRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;