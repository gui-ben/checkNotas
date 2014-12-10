var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'miEmail@gmail.com',
        pass: 'miContraseña'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'checkNotasBOT', // sender address
    to: 'miEmail@gmail.com, EmailDeUnAmigo@gmail.com', // list of receivers
    subject: 'Notas subidas', // Subject line
    text: 'Ya están subidas las notas a la página. Soy un Bot :)', // plaintext body
    html: '' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
