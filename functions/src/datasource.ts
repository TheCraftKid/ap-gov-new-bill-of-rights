import * as functions from 'firebase-functions';
import * as airtable from 'airtable';
import { Amendment, AmendmentExplanation } from './model';

airtable.configure({
  apiKey: functions.config().keys.airtable
});

const BASE_ID = 'appGaPireQ2USQkP1';
const TABLE_AMENDMENTS = 'Amendments';
const TABLE_AMENDMENT_EXPLANATIONS = 'AmendmentExplanations';

const base: Function = airtable.base(BASE_ID);

export async function fetchAmendments(): Promise<Array<AirtableAmendment>> {
  const records = await base(TABLE_AMENDMENTS)
    .select({
      maxRecords: 10,
    })
    .firstPage();
    const amendments = records.map((record): AirtableAmendment => {
      return {
        amendmentId: record.get('Amendment ID'),
        fullText: record.get('Full Text'),
        abridgedText: record.get('Abridged Text'),
        description: record.get('Description'),
        explanationIds: record.get('Explanations'),
      };
    });
    return amendments;
}

export async function fetchExplanations(explanationIds: Array<string>): Promise<Array<AmendmentExplanation>> {
  const result: Array<AmendmentExplanation> = [];
  for (const id of explanationIds) {
    const record = await base(TABLE_AMENDMENT_EXPLANATIONS).find(id);
    result.push(record);
  }
  return result;
}

export async function fetchFullAmendments(): Promise<Array<Amendment>> {
  const result: Array<Amendment> = [];
  const amendments: Array<AirtableAmendment> = await fetchAmendments();
  for (const amendment of amendments) {
    const toFetch: Array<string> = amendment.explanationIds;
    const fetchedExplanations = await fetchExplanations(toFetch);
    const newAmendment: Amendment = {
      id: amendment.amendmentId,
      rawText: amendment.fullText,
      abridgedText: amendment.abridgedText,
      reasoning: amendment.description,
      explanations: fetchedExplanations,
    };
    result.push(newAmendment);
  }
  return result;
}

interface AirtableAmendment {
  readonly amendmentId: string;
  readonly fullText: string;
  readonly explanationIds: Array<string>;
  readonly abridgedText: string;
  readonly description: string;
}