const database = require('../config/db.config');
const Meeting = require('../models/meetingModel');
const AppError = require('../utils/appError');

const setMeeting = async (req, res, next) => {
    const user_id = req.body.user_id
    const exhibitor_id = req.body.exhibitor_id

    if (!user_id || !exhibitor_id) { 
        const err = new AppError(404, 'fail', 'user_id & exhibitor required');
        next(err, req, res, next);
    } 

    //TODO create meeting
}

const getMeeting = async (req, res, next) => { 
    const id = req.body.id
}

const getAllExhibitorMeeting = async (req, res, next) => {
    const exhibitor_id = req.body.exhibitor_id

    try {
        const exhibitors = await Meeting(database).findAll({ 
            where: {
                id_exhibitor: exhibitor_id
            }
        });
    } catch (error) {
        const err = new AppError(404, 'fail', 'exhibitor not found');
        next(err, req, res, next);
    }
   
    res.status(200).json(exhibitors);
}

const updateMeeting = async (req, res, next) => {

}

const deleteMeeting = async (req, res, next) => { 

}
