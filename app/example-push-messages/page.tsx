'use client'

import { useEffect, useState } from "react";
import { Alert, Button, Container, FormControl, FormGroup, FormLabel, Navbar, Spinner } from "react-bootstrap";
import { saveSubscriptionOnServer, sendPushMsg } from "./server";

interface BrowserSupport {
    serviceWorker: boolean;
    push: boolean;
}

export default function Page() {
    const [browserSupport, setBrowserSupport] = useState<BrowserSupport | null>(null)
    const [serviceWorkerCount, setServiceWorkerCount] = useState<number | null>(null);
    const [exampleSubscription, setExampleSubscription] = useState('');
    const [exampleSubscription2, setExampleSubscription2] = useState('');
    const [subscriptionsEqual, setSubscriptionsEqual] = useState<boolean | null>(null);
    const [key, setKey] = useState('');
    const [exampleMsg, setExampleMsg] = useState('');
    const [msgError, setMsgError] = useState('');
    const [waitingForServiceWorker, setWaitingForServiceWorker] = useState(false);
    const [newServiceWorkerRegistered, setNewServiceWorkerRegistered] = useState(false);
    const [waitForReady, setWaitForReady] = useState(false);
    const [sendingSubscription, setSendingSubscription] = useState(false);
    const [sendingMsg, setSendingMsg] = useState(false);

    useEffect(() => {
        let serviceWorker = true;
        let push = true;

        if (!('serviceWorker' in navigator)) {
            // Service Worker isn't supported on this browser, disable or hide UI.
            serviceWorker = false;
        }

        if (!('PushManager' in window)) {
            // Push isn't supported on this browser, disable or hide UI.
            push = false;
        }

        setBrowserSupport({
            serviceWorker,
            push
        });

    }, [])

    function askPermission() {
        console.log('askPermission')
        return new Promise(function (resolve, reject) {
            const permissionResult = Notification.requestPermission(function (result) {
                resolve(result);
            });

            if (permissionResult) {
                permissionResult.then(resolve, reject);
            }
        }).then(function (permissionResult) {
            if (permissionResult !== 'granted') {
                throw new Error("We weren't granted permission.");
            }
        });
    }

    async function onRegisterClick() {
        setNewServiceWorkerRegistered(false);
        await askPermission();
        console.log('asked for permission')
        // setWaitingForServiceWorker(true);
        // const serviceWorker = await navigator.serviceWorker.ready
        // setWaitingForServiceWorker(false);
        // setServiceWorkerCount((await navigator.serviceWorker.getRegistrations()).length);

        // {
        //     // new
        //     const subscribeOptions: PushSubscriptionOptionsInit = {
        //         userVisibleOnly: true,
        //         applicationServerKey: "BDd1oHzF6UUQSPVLTFxTflz_pxeUUrkcpRDs8O4k_3UdxBhGMV-zGjhOHltp90QzjR4CWscXJ-2hig0lw0Y8EqY"
        //     }
        //     const oldSubscription = await serviceWorker.pushManager.getSubscription();
        //     if (oldSubscription != null) {
        //         const res = await oldSubscription.unsubscribe()
        //         console.log('result of unsubscribe', res);
        //     }
        //     const subscription = await serviceWorker.pushManager.subscribe(subscribeOptions);
        //     const json = subscription.toJSON();
        //     const s = JSON.stringify(json);
        //     const s2 = JSON.stringify(subscription)
        //     setExampleSubscription(s);
        //     setExampleSubscription2(s2);
        //     setSubscriptionsEqual(s === s2);

        // }

        setWaitingForServiceWorker(true);
        const regs = await navigator.serviceWorker.getRegistrations()
        console.log('service worker registrations', regs);
        setServiceWorkerCount(regs.length);
        let serviceWorker: ServiceWorkerRegistration | null = null;

        if (regs.length > 0) {
            serviceWorker = regs[0];
            console.log('use old service worker')
        } else {
            console.log('register new service worker (\'/sw.js\')');
            serviceWorker = await navigator.serviceWorker.register('/sw.js')
            setNewServiceWorkerRegistered(true);
        }

        const subscribeOptions: PushSubscriptionOptionsInit = {
            userVisibleOnly: true,
            applicationServerKey: "BDd1oHzF6UUQSPVLTFxTflz_pxeUUrkcpRDs8O4k_3UdxBhGMV-zGjhOHltp90QzjR4CWscXJ-2hig0lw0Y8EqY"
        }
        setWaitForReady(true);
        await navigator.serviceWorker.ready
        setWaitForReady(false);
        setWaitingForServiceWorker(false);
        const oldSubscription = await serviceWorker.pushManager.getSubscription();
        if (oldSubscription != null) {
            const res = await oldSubscription.unsubscribe()
            console.log('result of unsubscribe', res);
        }
        const subscription = await serviceWorker.pushManager.subscribe(subscribeOptions);
        const json = subscription.toJSON();
        const s = JSON.stringify(json);
        const s2 = JSON.stringify(subscription)
        setExampleSubscription(s);
        setExampleSubscription2(s2);
        setSubscriptionsEqual(s === s2);


    }

    async function onSendSubscriptionClick() {
        setSendingSubscription(true);
        try {
            await saveSubscriptionOnServer(key, exampleSubscription);
        } catch(reason) {
            console.error(reason);
        } finally {
            setSendingSubscription(false);
        }
    }

    async function onSendMsg() {
        setSendingMsg(true);
        try {
            setMsgError('');
            await sendPushMsg(key, exampleMsg)
        } catch (reason: unknown) {
            console.error(reason);
            setMsgError(JSON.stringify(reason));
        } finally {
            setSendingMsg(false);
        }
    }

    return (
        <Container>
            <Navbar><Navbar.Brand>example-push-messages</Navbar.Brand></Navbar>
            <hr />
            <Alert show={browserSupport == null} className='mb-3'>Prüfe Browser...</Alert>
            <Alert show={browserSupport != null && !(browserSupport.serviceWorker)} className='mb-3'>Serviceworker nicht vom Browser unterstützt!</Alert>
            <Alert show={browserSupport != null && !(browserSupport.push)} className='mb-3'>Push-Nachrichten nicht vom Browser unterstützt!</Alert>
            {browserSupport != null &&
                <Button disabled={browserSupport == null || !(browserSupport?.serviceWorker && browserSupport.push)} onClick={onRegisterClick} className='mb-3'>
                    Register for push notifications
                </Button>
            }
            <Alert show={true}>{waitingForServiceWorker ? 'Waiting for service worker ...' : '(Not yet) waiting for service worker'}</Alert>
            <Alert show={newServiceWorkerRegistered}>New service worker registered</Alert>
            <Alert show={waitForReady}>waitForReady</Alert>
            <Alert show={serviceWorkerCount != null} variant={serviceWorkerCount === 0 ? 'danger' : serviceWorkerCount != null && serviceWorkerCount > 1 ? 'warning' : 'success'} className='mb-3'>{serviceWorkerCount} Service Worker gefunden</Alert>
            <Alert show={exampleSubscription !== ''} variant="success" className='mb-3'>
                <div className='overflow-auto pb-2'>
                    {exampleSubscription}
                </div>
            </Alert>
            <Alert show={exampleSubscription2 !== ''} variant="success" className='mb-3'>
                <div className='overflow-auto pb-2'>
                    {exampleSubscription2}
                </div>
            </Alert>
            <Alert show={subscriptionsEqual != null}>{subscriptionsEqual ? 'Subscriptions equal' : 'Subscriptions not equal'}</Alert>
            {
                exampleSubscription != null && <>
                    <FormGroup>
                        <FormLabel htmlFor="userKey">User Key</FormLabel>
                        <FormControl id='userKey' type='text' value={key} onChange={(e) => setKey(e.target.value)} className='mb-3' />
                    </FormGroup>
                    <Button onClick={onSendSubscriptionClick} className='mb-3' disabled={sendingSubscription}>{sendingSubscription ? <Spinner size='sm' role='status' animation="border" /> : 'Send subscription'}</Button>
                    <FormGroup>
                        <FormLabel htmlFor='exampleMsg'>Example Message</FormLabel>
                        <FormControl id='exampleMsg' type='text' value={exampleMsg} onChange={(e) => setExampleMsg(e.target.value)} className="mb-3" />
                    </FormGroup>
                    <Button onClick={onSendMsg}>{sendingMsg ? <Spinner /> : 'Send example message'}</Button>
                    <Alert show={!!msgError} variant="danger">msgError: {msgError}</Alert>
                </>
            }
        </Container>
    )
}