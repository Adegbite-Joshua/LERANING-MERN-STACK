const cloudinary = require('cloudinary').v2;

cloudinary.config({
    // cloud_name: process.env.NAME,
    // api_key: process.env.APIKEY,
    // api_secret: process.env.SECRET
    cloud_name: "dc9o9pwld",
  api_key: "379799561535484",
  api_secret: "xl2hO0suwnzdww6zf99nQ-hPeQ4"
  });
const startServer = ()=>{
    console.log('Server started');
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

module.exports = {startServer, getUserLandingPage, getSlashUser, postStudentInfo, saveFile}