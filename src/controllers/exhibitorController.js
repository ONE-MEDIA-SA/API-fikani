const Exhibitor = require('../models/exhibitorModel');
const Gallery = require('../models/galleryModel')
const AppError = require('../utils/appError');
const {uploadFile, uploadMultipleFiles} = require('../utils/upload');
const path = require('path')



exports.getAllExhibitors = async (req, res, next) => { 
 
    try {
        const exhibitors = await 
        Exhibitor.findAll();
        res.status(200).json({
            status: 'success',
            data: exhibitors
        });
    } catch (err) {
        next(err);
    }
}

exports.setExhibitor = async (req, res, next) => { 

    req.body.social_media = JSON.stringify(req.body.social_media)

    console.log(req.body)
    try {

        const myExhibitor = await 
        Exhibitor.create(req.body);
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
    const id = req.params.id

    req.files.forEach(file => { 
      paths.push(path.join(__dirname , "../../uploads/"+file.filename))
      names.push(file.filename)
    });

    const urls = await uploadMultipleFiles(paths, names);

   const returnGallery = await Gallery.create({
        id: 0,
        exhibitor_id: id,
        url: urls[0],
        mimetype: "jpg"
    })

    
    // urls.forEach(myUrl => {
       
    //     break;
    // })

    res.status(201).send(returnGallery);
}