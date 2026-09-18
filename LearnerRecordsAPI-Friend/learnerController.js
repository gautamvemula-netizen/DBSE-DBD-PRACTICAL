import Learner from '../models/Learner.js';

export const addLearner = async (req, res) => {
    try {
        const learner = await Learner.create(req.body);

        res.status(201).json({
            message: 'Learner added successfully',
            learner
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to add learner',
            error: error.message
        });
    }
};

export const listLearners = async (req, res) => {
    try {
        const learners = await Learner.find();

        res.status(200).json(learners);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to retrieve learners',
            error: error.message
        });
    }
};

export const findLearner = async (req, res) => {
    try {
        const learner = await Learner.findById(req.params.id);

        if (!learner) {
            return res.status(404).json({
                message: 'Learner not found'
            });
        }

        res.status(200).json(learner);
    } catch (error) {
        res.status(400).json({
            message: 'Invalid learner ID',
            error: error.message
        });
    }
};

export const editLearner = async (req, res) => {
    try {
        const learner = await Learner.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!learner) {
            return res.status(404).json({
                message: 'Learner not found'
            });
        }

        res.status(200).json({
            message: 'Learner updated successfully',
            learner
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to update learner',
            error: error.message
        });
    }
};

export const removeLearner = async (req, res) => {
    try {
        const learner = await Learner.findByIdAndDelete(req.params.id);

        if (!learner) {
            return res.status(404).json({
                message: 'Learner not found'
            });
        }

        res.status(200).json({
            message: 'Learner removed successfully',
            learner
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to remove learner',
            error: error.message
        });
    }
};
