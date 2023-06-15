const nodemailer = require("nodemailer");

const handler = (req: any, res: any) => {
  if (req.method !== "POST") {
    res.json({ message: "Method is not allowed!" });
  }
  const mailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const nameTitleRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  const messageRegex = /^(.|\s)*[a-zA-Z]+(.|\s)*$/;

  const { mail, firstname, mailTitle, message } = req.body;

  if (
    !mail ||
    !firstname ||
    !mailTitle ||
    !message ||
    !mailRegex.test(mail) ||
    !nameTitleRegex.test(firstname) ||
    !nameTitleRegex.test(mailTitle) ||
    !messageRegex.test(message)
  )
    return res.status(400).json({ message: "Typed data isn't correct!" });

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SECURE_TLS,
    auth: {
      user: process.env.LOGIN,
      pass: process.env.EMAIL_PWD,
    },
  } as any);

  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    envelope: {
      to: process.env.EMAIL,
      from: process.env.EMAIL,
    },
    subject: mailTitle + " - " + mail,
    text: message,
  };

  transporter.sendMail(mailOptions, function (err: any, data: any) {
    if (err) {
      res.status(500).json({ message: "Message can't be sent!" });
    } else {
      res.status(200).json({ message: "Message was sent!" });
    }
  });
};

module.exports = handler;
