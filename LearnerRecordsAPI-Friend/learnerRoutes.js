import express from 'express';

import {
    addLearner,
    listLearners,
    findLearner,
    editLearner,
    removeLearner
} from '../controllers/learnerController.js';

const router = express.Router();

router.post('/', addLearner);

router.get('/', listLearners);

router.get('/:id', findLearner);

router.patch('/:id', editLearner);

router.delete('/:id', removeLearner);

export default router;
