import { DocumentDefinition, FilterQuery } from "mongoose";
import Event, {EventDocument} from "../model/event.model";

export async function createEvent(input:DocumentDefinition<EventDocument>) {
    try {
        return await Event.create(input);
    } catch(error:any) {
        throw new Error(error);
    }
}

export async function findEvents(query: FilterQuery<EventDocument>) {
    return Event.find(query).lean();
}
