const nodeMailer = require('nodemailer')


const sendEmail = async(options)=>{

    let transporter = nodemailer.createTransport({
            service:"gmail",
        auth: {
          user: process.env.SMPT_MAIL,

          pass:process.env.SMPT_PASSWORd,
        },
      });


      const mailOptions = ({
          from:process.env.SMPT_MAIL,
          to:options.email,
          subject:options.message,
          message:""
      })

      await transporter.sendMail(mailOptions)
}


module.exports = sendEmail