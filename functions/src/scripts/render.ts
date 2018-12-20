import * as fs from 'fs';
import { Request, Response } from 'express';
import { fetchFullAmendments } from './datasource';
import { Nuxt } from 'nuxt';

const NUXT_CONFIG = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/',
  },
};

const nuxt = new Nuxt(NUXT_CONFIG);

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
  // const app = new Vue({
  //   data: {
  //     url: req.url,
  //     amendment: finalAmendment,
  //     amendmentTitle: `Amendment #${amendmentIndex + 1}`,
  //   },
  // });
  res.set('Cache-Control', 'oublic, max-age=600, s-maxage=1200');
  // try {
  //   const html = await renderer.renderToString(app);
  //   res.status(200).send(html);
  // } catch (e) {
  //   res.status(500).send('Internal server error. Could not render page.');
  // }
}