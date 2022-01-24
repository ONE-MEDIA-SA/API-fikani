const User = require('../models/userModel');
const base = require('./baseController');


const getAllUsers = async (req, res, next) => {
    try {
        //const doc = await findByIdAndDelete(req.params.id);
        const doc = null;

        if (!doc) {
            return next(new AppError(404, 'fail', 'No document found with that id'), req, res, next);
        }

        res.status(204).json({
            status: 'success',
            data: []
        });
    } catch (error) {
        next(error);
    }
}

const getUser = async (req, res, next) => {
    res.json([{name: "agostinho"}])
}

const deleteUser = async (req, res, next) => {
    try {
        //const doc = await findByIdAndDelete(req.params.id);
        const doc = null;

        if (!doc) {
            return next(new AppError(404, 'fail', 'No document found with that id'), req, res, next);
        }

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        // const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true
        // });
        const doc = null;

        if (!doc) {
            return next(new AppError(404, 'fail', 'No document found with that id'), req, res, next);
        }

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });

    } catch (error) {
        next(error);
    }
};




module.exports = {
    deleteUser, updateUser, getAllUsers, getUser
}