const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/signUpModels');
var getPassCat = signUpTemplateCopy.find({}, {});

router.get('/get', (req, res, next) => {
    getPassCat.exec((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

router.post('/signup', (request, response) => {
    const signedUpUser = new signUpTemplateCopy({
        userName: request.body.userName,
        email: request.body.email,
        password: request.body.password,
        cPassword: request.body.cPassword
    })
    signedUpUser.save()
        .then(data => {
            response.json(data)
        }).catch(error => {
            response.json(error)
        })
})

router.put('/update/:id', (request, response, next) => {
    var id = request.params.id;
    var passCategory0 = request.body.user_Name;
    var passCategory1 = request.body.email_Name;
    var passCategory2 = request.body.password_Name;
    var passCategory3 = request.body.cPassword_Name;
    signUpTemplateCopy.findById(id, (err, data) => {
        data.userName = passCategory0 ? passCategory0 : data.userName;
        data.email = passCategory1 ? passCategory1 : data.email;
        data.password = passCategory2 ? passCategory2 : data.password;
        data.cPassword = passCategory3 ? passCategory3 : data.cPassword;
        data.save((err) => {
            if (err) throw err;
            else
                response.send("data updated");
        });
    });
});

router.delete('/delete/:id', (request, response, next) => {
    var id = request.params.id;
    signUpTemplateCopy.findByIdAndRemove(id, (err, data) => {
        if (err) throw err;
        response.send("data deleted");
    })

});

module.exports = router;