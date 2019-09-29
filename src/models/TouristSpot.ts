import mongoose from 'mongoose';
import crypto from 'crypto';

export type TouristSpotDocument = mongoose.Document & {
    name: string;
    region: string;
    city: string;
    baranggay: string;
    shortDescription: String;
    mapLong: String;
    mapLat: String;
    gravatar: (size: number) => string;
};

const touristSpotSchema = new mongoose.Schema({
    name: { type: String, required: true },
    region: { type: String, required: true },
    city: String,
    baranggay: String,
    shortDescription: String,
    mapLong: String,
    mapLat: String,
    fullDescription: String,
    touristRating: String,
    editorRating: String,
    touristSpotType: String, // beach, theme park etc.
    pictureHighlights: { 
        type: [String], 
        required: true 
    },
    thingsTodo: { 
        type: [String], 
        required: true 
    },
    activities: [
        {
            activityName: {
                type : String,
                required: true
            },
            activityShortDesc: {
                type: String,
                required: true
            },
            activityFullDesc: {
                type: String,
                required: true
            },
        }
    ]

}, { timestamps: true });

/**
 * Helper method for getting sample tourist spot location's gravatar.
 */
touristSpotSchema.methods.gravatar = function (size: number = 200) {
    const md5 = crypto.createHash("md5").update(this.name).digest("hex");
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

export const TouristSpot = mongoose.model<TouristSpotDocument>('TouristSpot', touristSpotSchema);