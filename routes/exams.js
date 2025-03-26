const express = require('express');
const router = express.Router();

// Hardcoded list of users
const users = [
    { id: 1, name: 'John Doe', exam: 'Math' },
    { id: 2, name: 'Jane Smith', exam: 'Science' },
    { id: 3, name: 'Alice Johnson', exam: 'History' }
];

// GET /exams endpoint
router.get('/exams', (req, res) => {
    res.json(users);
});

// POST /exams endpoint
router.post('/exams', (req, res) => {
    const { name, exam } = req.body;

    if (!name || !exam) {
        return res.status(400).json({ message: 'Name and exam are required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        exam
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

module.exports = router;
