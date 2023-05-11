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


module.exports = {startServer, getUserLandingPage, getSlashUser, postStudentInfo}