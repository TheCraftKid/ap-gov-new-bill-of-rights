import { Request, Response } from "express";
import { fetchAmendments } from "./datasource";

/**
 * Retrieves all the IDs of the amendments from the data source.
 */
export async function handleAmendmentIdsFetch(req: Request, res: Response) {
  try {
    const amendments = await fetchAmendments();
    const ids: Array<String> = amendments.map(amendment => amendment.amendmentId);
    res.status(200).send({ amendmentIds: ids });
  } catch (e) {
    res.status(500).send('Internal server error. Could not fetch amendments.');
  }
}