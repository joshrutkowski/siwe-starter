import { generateNonce } from 'siwe';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from '../../utils/ironOptions';

export default withIronSessionApiRoute(nonce, ironOptions);

async function nonce(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  req.session.nonce = generateNonce();
  await req.session.save();
  res.status(200).send(req.session.nonce);
}
