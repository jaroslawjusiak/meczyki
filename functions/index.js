const functions = require('firebase-functions');
const { debug } = require('firebase-functions/lib/logger');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.scheduleTestAt15H30 = functions.pubsub.schedule('30 15 * * *')
    .timeZone('Europe/Warsaw') //  timezone can be found at https://time.is
    .onRun((context) => {
        console.log('This will be run every day at 15:30 Warsaw time!');
    });

exports.logModificationTime = functions.database.ref('/clicks')
    .onWrite((change, context) => {
        console.log('/meczyki/clicks triggered!');
        const original = change.after.val();
        console.log('Original value', original);
        const rnd = Math.random() * 100;
        console.log('Random value', rnd);
        return change.after.ref.parent.child('logs/log').set(rnd);
    });