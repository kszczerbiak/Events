import mongoose from "mongoose";
import config from 'config'

export interface EventDocument extends mongoose.Document {
    firstName: string;
    lastName: string;
    email:string;
    date:Date;
}

const EventSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        date: {type: Date, required: true}
    }
);

const Event = mongoose.model("Event", EventSchema)

export default Event;