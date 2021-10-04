import { Express, Request, Response } from "express";
import { createEventHandler, getEventsHandler} from "./controller/event.controller";
import {validateRequest} from './middleware'
import { createEventSchema} from "./schema/event.schema";
export default function(app: Express) {
    
    
    //add event
    //POST /api/event
    app.post('/api/events', validateRequest(createEventSchema), createEventHandler)
    //list all events
    //GET /api/events
    app.get("/api/events", getEventsHandler)
}