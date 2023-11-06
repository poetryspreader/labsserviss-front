import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/contacts', (req, res) => {
    const { formFields } = req.body;

    // Create a transporter with your email service credentials
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'Kriptorab608@gmail.com',
            pass: 'ilgm mnbi whtp sema',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'Kriptorab608@gmail.com',
        subject: 'Form Submission',
        html: `<p>Form Fields:</p>${formFields.join('<br>')}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Email not sent.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});