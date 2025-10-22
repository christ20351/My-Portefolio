import nodemailer from "nodemailer"
import { createMailTransporter, getInviteMailOptions } from "@/utils/invit";


var transporter: nodemailer.Transporter | undefined = undefined;


export function SendInviteMail({ email , name , object , description }: { email: string , name:string , object: string ,  description: string}) {
  if (!transporter) {
    transporter = createMailTransporter();
  }
    const mailOptions = getInviteMailOptions({ email , name , object , description });
    return transporter.sendMail(mailOptions);
}