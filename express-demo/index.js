const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

app.get('/', (req, res) => {
   res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given Id was not found');
    res.send(course);
});

// /api/courses/1
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(Object.assign(req.params, req.query));
});

app.post('/api/courses', (req, res) => {
    const result = validateCourse(req.body);
    if(result.error){
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If it doesn't exist. return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given Id was not found');

    // validate
    // If invalid, return 400 - Bad request
    const result = validateCourse(req.body);
    if(result.error){
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // Update course
    // Return the updated course
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}


// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



