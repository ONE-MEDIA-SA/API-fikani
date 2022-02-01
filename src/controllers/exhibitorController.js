const Exhibitor = require('../models/exhibitorModel');
const AppError = require('../utils/appError');
const database = require('../config/db.config');


exports.getAllExhibitors = async (req, res, next) => { 
 
    try {
        const exhibitors = await 
        Exhibitor(database).findAll();
        res.status(200).json({
            status: 'success',
            data: exhibitors
        });
    } catch (err) {
        next(err);
    }
}

exports.setExhibitor = async (req, res, next) => { 
    
    try {
        const myExhibitor = await 
        Exhibitor(database).create(req.body);
        myExhibitor.password = undefined;

        res.status(201).json({
            status: 'success',
            data: myExhibitor
        });
    } catch (err) {
        next(err);
    }
}

exports.getExhibitor = async (req, res, next) => { 

}
