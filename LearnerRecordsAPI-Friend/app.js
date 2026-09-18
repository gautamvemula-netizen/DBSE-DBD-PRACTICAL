import express from 'express';
import mongoose from 'mongoose';
import learnerRoutes from './routes/learnerRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/learner_directory';

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Learner Records API is running'
    });
});

app.use('/learners', learnerRoutes);

mongoose.connect(DATABASE_URL)
    .then(() => {
        console.log('MongoDB connected');

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
    });
