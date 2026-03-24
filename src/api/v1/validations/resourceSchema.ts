import Joi, { ObjectSchema } from "joi";

let source_type = ["article", "video", "tutorial", "documentation"]

export const resourceSchema = {
    create: {
        body: Joi.object({
            title: Joi.string().required(),
            type: Joi.string().valid(...source_type),
            url: Joi.string().required(),
            description: Joi.string().required(),
        })
    }
}