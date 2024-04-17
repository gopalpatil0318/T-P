const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(cors());


const studentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobileNumber: String,
  birthDate: Date,
  gender: String,
  password: String,
  confirmPassword: String,
  bloodGroup: String,
  adharNumber: String,
  cast: String,
  fatherName: String,
  fatherMobileNumber: String,
  fatherOccupation: String,
  motherName: String,
  motherMobileNumber: String,
  motherOccupation: String,
  localAddress: String,
  city: String,
  district: String,
  state: String,
  pincode: String,
  prnNumber: String,
  tenthMarks: String,
  twelfthDiploma: String,
  twelfthDiplomaPercentage: String,
  admissionBasedOn: String,
  department: String,
  division: String,
  passoutYear: Number,
  lgName: String,
  sem3SGPA: Number,
  sem3CGPA: Number,
  sem3Backlog: Number,
  sem4SGPA: Number,
  sem4CGPA: Number,
  sem4Backlog: Number,
  sem5SGPA: Number,
  sem5CGPA: Number,
  sem5Backlog: Number,
  sem6SGPA: Number,
  sem6CGPA: Number,
  sem6Backlog: Number,
  overallCGPA: Number,
  anyLiveKTs: String,
  anyGapDuringEducation: String,
  gapReason: String,
  sem1SGPA: Number,
  sem1CGPA: Number,
  sem1Backlog: Number,
  sem2SGPA: Number,
  sem2CGPA: Number,
  sem2Backlog: Number,
  areaOfInterest: String,
  aboutYou: String,
  projectTitle1: String,
  projectLink1: String,
  projectDescription1: String,
  projectTitle2: String,
  projectLink2: String,
  projectDescription2: String,
  personalPortfolioLink: String,
  githubLink: String,
  linkedinLink: String,
  instagramLink: String,
  twitterLink: String,
  leetcodeLink: String,
  geeksForGeeksLink: String,
  codechefLink: String,
  hackerRankLink: String
});

const Student = mongoose.model('Student', studentSchema);






app.post('/api/submit-form', (req, res) => {
  const formData = req.body;
  res.json({ message: 'Form data received and stored successfully.' });

  const newStudent = new Student(formData);

console.log(newStudent)
  newStudent.save()
    .then(() => console.log('User saved to database'))
    .catch(err => console.error(err));

});






app.get('/students', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.put('/api/update-profile/:prn', (req, res) => {
  const  prnNumber = req.params.prn;
  const updatedData = req.body;
  
  console.log(prnNumber);
  console.log(updatedData);

  Student.findOneAndUpdate({ prnNumber }, updatedData, { new: true })
    .then(student => {
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json({ message: 'Profile updated successfully prn', student });
    })
    .catch(error => {
      console.error('Error updating student profile:', error);
      res.status(500).json({ error: 'An error occurred while updating student profile' });
    });
});



app.get('/api/get-data', (req, res) => {
  const { prn } = req.query;

  console.log(prn)
const prnNumber = prn;
  Student.findOne({ prnNumber })
    .then(student => {
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json(student);
    })
    .catch(error => {
      console.error('Error fetching student:', error);
      res.status(500).json({ error: 'An error occurred while fetching student data.' });
    });
});


app.listen(8080, () => {
  console.log('Server running on http://localhost:3000');
});
