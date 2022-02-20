import { SiweMessage } from 'siwe';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from '../../utils/ironOptions';

export default withIronSessionApiRoute(verify, ironOptions);

async function verify(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  try {
    if (!req.body.message) {
      res.status(422).json({ message: 'Expected prepareMessage object as body.' });
      return;
    }
    let message = new SiweMessage(req.body.message);
    const fields = await message.validate(req.body.signature);
    if (fields.nonce !== req.session.nonce) {
      res.status(422).json({
        message: `Invalid nonce.`,
      });
      return;
    }

    req.session.siwe = fields;
    await req.session.save();
    res.send({ verified: true });
  } catch (error) {
    req.session.siwe = null;
    req.session.nonce = null;
    console.log(error);
    res.send(500, error);
  }
}
