const {uploadFile} = require('../utils/upload');

exports.setGallery = (req, res, next) => {
  req.files.forEach(file => { 
    req.body.images.push(file.filename);
  });
  console.log(req.body);
  res.send(req.body);
}