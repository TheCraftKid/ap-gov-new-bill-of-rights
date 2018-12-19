import Vue from 'vue';
import * as fs from 'fs';
import { Request, Response } from 'express';
import * as vueRenderer from 'vue-server-renderer';
import { fetchFullAmendments } from './datasource';

const renderer = vueRenderer.createRenderer({
  template: fs.readFileSync('../templates/index.template.html', 'utf-8'),
});

export async function handleRenderRequest(req: Request, res: Response) {
  const amendmentId = req.params['amendmentId'];
  const amendments = await fetchFullAmendments();
  let amendmentIndex;
  const result = amendments.filter((amendment, index) => {
    if (amendment.id === amendmentId) {
      amendmentIndex = index;
      return true;
    }
    return false;
  });
  if (result.length < 0) {
    return;
  }
  const finalAmendment = result[0];
  const app = new Vue({
    data: {
      url: req.url,
      amendment: finalAmendment,
      amendmentTitle: `Amendment #${amendmentIndex + 1}`,
    },
  });
  try {
    const html = await renderer.renderToString(app);
    res.status(200).send(html);
  } catch (e) {
    res.status(500).send('Internal server error. Could not render page.');
  }
}