import { Request, Response, NextFunction } from "express";
import * as postService from "../services/resourceService";
import { successResponse } from "../models/responseModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";

// Handles creating new Post
export const createPostHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const {title, type, url, description} = req.body;
        const postData = {title, type, url, description};

        const newPost = await postService.createResource(postData);

        res.status(HTTP_STATUS.CREATED).json({
            message: "Resource created",
            data: newPost
        });
    } catch (error: unknown) {
        next(error);
    }
};