import * as functions from 'firebase-functions';
import { server } from './server';

export const renderAmendmentAMP = functions.https.onRequest(server);

export const fetchAmendmentIds = functions.https.onRequest(server);
