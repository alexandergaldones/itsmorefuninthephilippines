import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export type ThingsTodoDocument = mongoose.Document & {
    name: string;
    description: string;
}

const ThingsToDoSchema = new Schema({
    touristSpot: {
        type: Schema.Types.ObjectId,
        ref: 'touristSpots'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const ThingsToDo = mongoose.model<ThingsTodoDocument>('thingsToDo', ThingsToDoSchema);

