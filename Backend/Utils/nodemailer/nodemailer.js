const nodemailer = require('nodemailer')


const sendEmail = async(options)=>{
console.log("3n");
    let transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      port:465,
            service:"gmail",
        auth: {
          user: process.env.SMPT_MAIL,

          pass:process.env.SMPT_PASSWORd,
        },
      });
console.log("4n")

      const mailOptions = ({
          from:process.env.SMPT_MAIL,
          to:options.email,
          subject:options.subject,
         text:options.message
      })
console.log("5n");
      await transporter.sendMail(mailOptions)
      console.log("6n");
}


module.exports = sendEmail