import * as express from 'express';
import { handleRenderRequest } from './render';
import { handleAmendmentIdsFetch } from './fetch';

export const server = express();

server.get('/amp/amendment/:amendmentId', handleRenderRequest);

server.get('/amendments', handleAmendmentIdsFetch);
