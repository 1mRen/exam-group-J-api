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

// UPDATE /exams/:id endpoint
router.put('/exams/:id', (req, res) => {
    const { id } = req.params;
    const { name, exam } = req.body;

    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update fields if provided
    if (name) users[userIndex].name = name;
    if (exam) users[userIndex].exam = exam;

    res.json(users[userIndex]);
});

module.exports = router;
