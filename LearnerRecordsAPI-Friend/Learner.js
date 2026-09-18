import mongoose from 'mongoose';

const learnerSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },

        age: {
            type: Number,
            required: true,
            min: 16,
            max: 100
        },

        program: {
            type: String,
            required: true,
            trim: true
        },

        emailAddress: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        }
    },
    {
        timestamps: true
    }
);

const Learner = mongoose.model('Learner', learnerSchema);

export default Learner;
