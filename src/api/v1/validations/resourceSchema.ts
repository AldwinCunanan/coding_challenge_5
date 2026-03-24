import Joi, { ObjectSchema } from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - title
 *         - type
 *         - url
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: unique identifier for the resource
 *           example: "1"
 *         title:
 *           type: string
 *           description: title of the resource
 *           example: "Example Title"
 *         type:
 *           type: string
 *           valid: ["article", "video", "tutorial", "documentation"]
 *           description: category of the resource
 *           example: "article"
 *         url:
 *           type: string
 *           description: link of the resource
 *           example: "example.com"
 *         description:
 *           type: string
 *           description: description of the resource
 *           example: "This is an example description"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the resource was created
 *           example: "2024-01-15T10:30:00Z"
 */

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