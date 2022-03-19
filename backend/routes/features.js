const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const {PythonShell} = require('python-shell');

router.get('/diet-generator', function (req, res) {
    let { weight, height, age, gender, phys_act } = req.query;

    let options = {
        mode: 'json',
        pythonPath: 'python3',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: '../python',
        args: [weight, height, age , gender, phys_act]
    };

    PythonShell.run('diet_generator.py', options, function (err, results) {
        if (err) throw err;
        
        res.send(results[0]);
    });
});

module.exports = router;
