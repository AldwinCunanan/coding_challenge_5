import express, { Router } from "express";
import * as resourceController from "../controllers/resourceController"
import { validateRequest } from "../middleware/validate";

const resourceRouter: Router = express.Router();

// Example 2: POST endpoint with request body
/**
 * @openapi
 * /resources:
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - title
 *               - type
 *               - url
 *               - description
 *               - createdAt
 *             properties:
 *               id:
 *                 type: number
 *                 description: Unique identifier
 *                 example: 3
 *               title:
 *                 type: string
 *                 description: The resources title
 *                 example: "book"
 *               type:
 *                 type: string
 *                 description: The type of resource
 *                 example: "video"
 *               url:
 *                 type: string
 *                 description: the link to the resource
 *                 example: "vid.com"
 *               description:
 *                  type: string
 *                  description: The description of the resource
 *                  example: "This is a Video"
 *               createdAt:
 *                  type: string
 *                  description: When this was created
 *                  example: "03-24-2026"
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/User'
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/Error'
 *       '409':
 *         description: User with this email already exists
**/
resourceRouter.post("/resources", resourceController.createPostHandler);


export default resourceRouter;