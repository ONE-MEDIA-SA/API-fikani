const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

const deleteOne = async (req, res, next) => {
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

exports.updateOne = async (req, res, next) => {
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

exports.createOne = Model => async (req, res, next) => {
    try {
       // const doc = await Model.create(req.body);
       const doc = null;

        res.status(201).json({
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
    
}