// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    //このapiのqueryである'api/getSession?session_id=~'からsession_idを引っ張ってきてる！
    const sessionId = req.query.session_id as string;

    const session = await stripe.checkout.sessions.listLineItems(sessionId);

    res.status(200).json({
        session,
    });
}
