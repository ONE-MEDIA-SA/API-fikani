const express = require('express');
const router = express.Router();
const exhibitorController = require('../controllers/exhibitorController');
const authController = require('./../controllers/authController');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// router.post('/login', authController.login);
// router.post('/signup', authController.signup);

router
    .route('/')
    .get(exhibitorController.getAllExhibitors)
    .post(exhibitorController.setExhibitor);

router.post('/:id/gallery', 
    upload.array('photos'), 
    exhibitorController.setGallery)
  
// router
//     .route('/:id/gallery', upload.array('photos', 12))
//     .post(exhibitorController.setGallery);
      

//router.get('/:id', exhibitorController.getExhibitor);
    
// Protect all routes after this middleware
router.use(authController.protect);
//router.put('/:id', exhibitorController.updateExhibitor);

// Only admin have permission to access for the below APIs 
router.use(authController.restrictTo('admin'));
//router.delete('/:id', exhibitorController.deleteExhibitor);

module.exports = router;