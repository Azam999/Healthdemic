const express = require("express");
const router = express.Router();
const { spawn } = require('child_process');
const { PythonShell } = require('python-shell');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken, {
    region: "us1",
    edge: "ashburn",
});

router.get("/diet-generator", function (req, res) {
    let { weight, height, age, gender, phys_act } = req.query;

    let options = {
        mode: 'json',
        pythonPath: 'python',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: '../python',
        args: [weight, height, age, gender, phys_act],
    };

    PythonShell.run("diet_generator.py", options, function (err, results) {
        if (err) throw err;

        res.send(results[0]);
    });
});

router.get("/diet-reminders", (req, res) => {
    client.messages
        .create({
            body: "Hi there", // TODO: FILL WITH REQ
            from: "+13015757997",
            to: "+13015757997", // TODO: FILL IN WITH REQ
        })
        .then((message) => console.log(message.sid));
});

module.exports = router;
