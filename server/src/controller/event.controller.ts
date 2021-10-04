import { Request, Response } from "express";
import { createEvent } from "../service/event.service";
import { findEvents } from "../service/event.service";
import {get} from 'lodash'

export async function createEventHandler(req:Request, res:Response) {
 try {  
    const event = await createEvent(req.body)
    res.send(event.toJSON());
} catch(e:any) {
    return res.send(e.message)
}
}
export async function getEventsHandler(req:Request, res:Response) {
    try {
        const events = await findEvents({});
        return res.send(events);
    } catch(e:any) {
        return res.send(e.message)
    }
}
