import * as yup from 'yup';
import { Request, Response, NextFunction } from "express" 
import log from "../logger"


let schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email(),
  date: yup.date(),
});

const validate = () => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema
        .isValid({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          date: req.body.date,

        })
        .then(function (valid) {
            return next();
        });
    } catch (e:any) {
        log.error(e)
        return res.status(400).send(e.errors);
    }
} 

export default validate;


