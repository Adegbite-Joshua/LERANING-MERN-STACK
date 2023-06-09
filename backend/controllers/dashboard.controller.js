const userModel = require('../models/user.model');
const nodemailer = require('nodemailer')


const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.NAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.SECRET
  });
const startServer = ()=>{
    console.log('Server started working');
}

const getUserLandingPage = (req,res)=>{
    res.send(
        [
            {
                "id": 1,
                "name":  'Ade',
                "username": 'Adeuser'
            },
            {
                "id": 1,
                "name":  'Kola',
                "username": 'Kolauser'
            },
            {
                "id": 1,
                "name":  'Kunle',
                "username": 'Kunleuser'
            }
        ]
    )
}

const getSlashUser = (req , res)=>{
    res.send(
        [
            {
                "id": 1,
                "name":  'Ade',
                "username": 'Adeuser'
            },
            {
                "id": 1,
                "name":  'Kola',
                "username": 'Kolauser'
            },
            {
                "id": 1,
                "name":  'Kunle',
                "username": 'Kunleuser'
            }, 
            [
                {
                    "rice": 10,
                    "measurement": 'bags'
                },
                {
                    "beans": 20,
                    "measurement": 'bags'
                },
                {
                    "banana": 30,
                    "measurement": 'bunch'
                }
            ]
        ]
    )
}

const postStudentInfo =(req, res)=>{
    console.log(req.body);
    let form = userModel(req.body)
    form.save()
    .then(() => res.status(200).json('saved'))
    .catch((err)=>{
        console.log(err)
        res.status(450).json('failed')
    })
}

const saveFile =(req,res)=>{
    console.log(req.body);
    // let imago = req.body.myImage
    const resImage = cloudinary.uploader.upload(req.body.myFile, {public_id: req.body.fileName})
    resImage.then((data) => {
        console.log(data);
        console.log(data.secure_url);
        res.send({link:data.secure_url, message: 'saved'})
    }).catch((err) => {
        console.log(err);
    });
}

const getNodeMailer =(req,res)=>{
    res.send({
        message: 'successful',
        status: true
    })

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USEREMAIL,
            pass: process.env.PASSWORD
        }

    })
    let mailOptions = {
        from: process.env.USEREMAIL,
        to: ['adegbitejoshua007@gmail.com', 'adeoluamole@gmail.com', 'adeoyeadebukola07@gmail.com'],
        subject: 'Nodemailer Checker, Do you read over',
        text: 'Hope this meets you well?. From Joshua'
    }

    transporter.sendMail(mailOptions)
    .then((response)=>{
        console.log(response)
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = {startServer, getUserLandingPage, getSlashUser, postStudentInfo, saveFile, getNodeMailer}