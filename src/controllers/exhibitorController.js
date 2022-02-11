const Exhibitor = require('../models/exhibitorModel');
const AppError = require('../utils/appError');
const database = require('../config/db.config');
const {uploadFile, uploadMultipleFiles} = require('../utils/upload');
const path = require('path')



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
        const myError = new AppError(404, 'fail', err);
        next(myError, req, res, next);
        console.log(err);
    }
}

exports.getExhibitor = async (req, res, next) => { 

}

exports.setGallery = async(req, res, next) => {
    const paths = []
    const names = []
    req.files.forEach(file => { 
      paths.push(path.join(__dirname , "../../uploads/"+file.filename))
      names.push(file.filename)
    });

    const urls = await uploadMultipleFiles(paths, names);

    res.status(201).send(urls);
}