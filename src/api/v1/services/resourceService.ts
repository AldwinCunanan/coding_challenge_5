import { Post } from "../models/resourceModel";
import * as firestoreRepository from "../repositories/firestoreRepository";
import { db } from "../../../config/firebaseConfig";
import { resourceSchema } from "../validations/resourceSchema";
import { validateRequest } from "../middleware/validate";

const COLLECTION = "resourceApplications";

export const createResource = async (
    resourceData : {
        title: string,
        type: string,
        url: string,
        description: string
    }
): Promise<Post> => {
    try {
    const newResourceData = {
      ...resourceData,
      createdAt: new Date(),
    };

    const id = await firestoreRepository.createResource<Post>(
      COLLECTION,
      newResourceData
    );

    return {
      id,
      ...newResourceData,
    } as Post;

  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    throw new Error(`Failed to create resource: ${errorMessage}`);
  }
}