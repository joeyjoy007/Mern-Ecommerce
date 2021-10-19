const nodemailer = require('nodemailer')


const sendEmail = async(options)=>{

    let transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      port:465,
            service:"gmail",
        auth: {
          user: process.env.SMPT_MAIL,

          pass:process.env.SMPT_PASSWORd,
        },
      });


      const mailOptions = ({
          from:process.env.SMPT_MAIL,
          to:options.email,
          subject:options.subject,
         text:options.message
      })

      await transporter.sendMail(mailOptions)

}


module.exports = sendEmail