import nodemailer from "nodemailer";
export const createMailTransporter = () => {
  return nodemailer.createTransport({
    secure: true,
    service: "gmail",
    auth: {
      user: "teneledou@gmail.com",
      pass: "ftpc wxat ncwc ukpt",
    },
    port: 587,
  });
};

export const getInviteMailOptions = ({ email , name , object , description }: { email: string , name:string , object: string ,  description: string}) => {
  return {
    from: "teneledou@gmail.com",
    to: "haurushaurus48@gmail.com",
    subject: object,
    text: "Message depuis votre Portefolio",
    html: `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          Message de : <h1 styme={"font-weight:bold , text-align:center}>${name}</h1>
          <p style="font-size:40px , font-weight:bold , text-align:center">${object}</p>
          <p style="font-size:35px , text-align:center">
            ${description}
          </p>
          <p style="font-size:25px , text-align:center">
            Répondre à : ${email}
          </p>
        </body>
      </html>`,
  };
};
