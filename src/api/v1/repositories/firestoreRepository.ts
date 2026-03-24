import { db } from "../../../config/firebaseConfig";
import { FirestoreDataTypes } from "../types/firestore";


interface FieldValuePair {
    fieldName: string;
    fieldValue: FirestoreDataTypes;
}

// creating new document in firestore
export const createResource = async <T>(
  collectionName: string,
  data: Partial<T>
): Promise<string> => {
  try {
    const snapshot = await db
      .collection(collectionName)
      .orderBy("id", "desc")
      .limit(1)
      .get();

    let nextId = 1;

    if (!snapshot.empty) {
      const lastDoc = snapshot.docs[0].data() as any;
      nextId = Number(lastDoc.id) + 1;
    }

    const docRef = db.collection(collectionName).doc(nextId.toString());

    await docRef.set({
      id: nextId,
      ...data,
    });

    return nextId.toString();

  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    throw new Error(
      `Failed to create resource in ${collectionName}: ${errorMessage}`
    );
  }
};