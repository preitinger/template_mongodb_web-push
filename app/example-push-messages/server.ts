'use server'


import { PushData } from "@/worker/PushData";
import clientPromise from "../_lib/mongodb";

import webpush from 'web-push';

interface SubscriptionDoc {
    _id: string;
    subscriptionJson: string;
}


const vapidKeysStr = process.env.VAPID_KEYS;
if (!vapidKeysStr) {
    throw new Error('Invalid/Missing environment variable: "VAPID_KEYS"');
}

const vapidKeys = JSON.parse(vapidKeysStr);

webpush.setVapidDetails(
    'mailto:peter.reitinger@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)


export async function saveSubscriptionOnServer(userKey: string, subscriptionJson: string) {
    const client = await clientPromise;
    const db = client.db('test');
    const col = db.collection<SubscriptionDoc>('example-subscriptions');
    const res = await col.insertOne({
        _id: userKey,
        subscriptionJson: subscriptionJson
    })
    console.log('res of saving subscription', res);
    if (!res.acknowledged) throw new Error('insertion of subscription not acknowledged');
}

/**
 * more a documentation which function of webpush to use than a real
 * benefit because it just wraps webpush.sendNotification in the lib web-push.
 * Depends also on the initializing call to webpush.setVapidDetails (see above)
 * which depends on the env entry 'VAPID_KEYS'
 * @param subscription 
 * @param msg 
 * @returns 
 */
const sendPushMessage = async<Message>(subscription: webpush.PushSubscription, msg: Message): Promise<webpush.SendResult> => {
    try {
        const stringifiedMsg = JSON.stringify(msg);
        console.log('sendPushMessage: stringified msg', stringifiedMsg)
        const sendRes: webpush.SendResult = await webpush.sendNotification(subscription, stringifiedMsg);
        return sendRes;
    } catch (reason) {
        const e = reason as webpush.WebPushError;
        console.error(e);
        throw e;
    }
}

export async function sendPushMsg(userKey: string, exampleText: string) {
    try {

        const client = await clientPromise;
        const db = client.db('test');
        const col = db.collection<SubscriptionDoc>('example-subscriptions');
        const res = await col.findOne({
            _id: userKey
        })
        console.log('found subscription', res);
        if (res == null) {
            throw new Error('SubscriptionDoc with userKey(_id)=' + userKey + ' not found!');
        }
        try {
            const msg: PushData = {
                example: exampleText
            }
            const subscription = JSON.parse(res.subscriptionJson);
            console.log('before sendPushMessage: subscription=', subscription);
            const sendRes = await sendPushMessage(subscription, msg);
            console.log('result from sendPushMessage', sendRes);
        } catch (reason) {
            console.warn('sendPushMessage failed: ', reason);
            throw reason;
        }
    } catch (reason) {
        console.error(reason);
        throw reason;
    }

}