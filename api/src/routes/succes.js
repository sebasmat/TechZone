const express = require("express");
const succesRouter = express.Router()
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'urculluvalentin@gmail.com', // generated ethereal user
    pass: 'cmpesvwqtyltqcck', // generated ethereal password
  },
})
transporter.verify().then(() => {
  console.log('ready for send email')
})

succesRouter.post('/', async (req, res) => {

  const { user, productos } = req.body;
  
console.log("entra aca")
  const total = productos.reduce((acumulador, productos) => acumulador + productos.price, 0);
 
 
  await transporter.sendMail({
    from: `"Compra Exitosa" <urculluvalentin@gmail.com>`, // sender address
    to: `h.baldino@yahoo.com.ar`, // list of receivers
    subject: "Compra Exitosa ✔", // Subject line
    text: "Hello world?", // plain text body
    html: ` <!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        .image_block img+div {
          display: none;
        }
    
        @media (max-width:720px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .image_block img.big,
          .row-content {
            width: 100% !important;
          }
    
          .mobile_hide {
            display: none;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
    
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    
    <body style="background-color: #fbfbfb; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fbfbfb;">
        <tbody>
          <tr>
            <td>
              <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6d18b5; color: #000000; width: 700px;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                              <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                    <div class="alignment" align="center" style="line-height:10px"><img src="https://b283fc4025.imgdist.com/public/users/Integrators/BeeProAgency/1007263_992118/logo.tech.png" style="display: block; height: auto; border: 0; width: 140px; max-width: 100%;" width="140" alt="Alternate text" title="Alternate text"></div>
                                  </td>
                                </tr>
                              </table>
                              <div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #4ba7ff; color: #000000; width: 700px;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                    <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://b283fc4025.imgdist.com/public/users/Integrators/BeeProAgency/1007263_992118/compra.tecnologia.png" style="display: block; height: auto; border: 0; width: 700px; max-width: 100%;" width="700" alt="Alternate text" title="Alternate text"></div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4; color: #000000; width: 700px;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;">&#8202;</div>
                              <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:25px;padding-left:25px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:30px;">Hola ${user[0].name}</span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 27px;"><span style="font-size:18px;">Muchas gracias por comprar en Techzone. Su pago se ha realizado exitosamente!</span></p>
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 27px;"><span style="font-size:18px;">en las próximas 48 hs se estará procesando su envío a destino!</span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:25px;padding-left:35px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:22px;">Usted compro:</span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              ${productos.map(item=>{
                return (
                  `<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;" width="700">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 10px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-1" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center" style="line-height:10px"><img src=${item.image} style="display: block; height: auto; border: 0; width: 125px; max-width: 100%;" width="125" alt="Alternate text" title="Alternate text"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
                                <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #232323; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:17px;">${item.name}</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-3" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block block-1 mobile_hide" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: sans-serif">
                                        <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;">$${item.price}</p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>`
                )
              }) }
             
              <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-left:35px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #848484; line-height: 1.5;">
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><span style="font-size:14px;">Total</span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block block-1 mobile_hide" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
                            </td>
                            <td class="column column-3" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-left:35px;padding-right:25px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #666666; line-height: 1.5;">
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><span style="font-size:14px;">$${total}</span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block block-1" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                              <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                    <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://b283fc4025.imgdist.com/public/users/Integrators/BeeProAgency/1007263_992118/editor_images/cc0e98e7-7b70-427f-b85a-52ad3b706ba0.png" style="display: block; height: auto; border: 0; width: 525px; max-width: 100%;" width="525" alt="I'm an image" title="I'm an image"></div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">©TechZone Ltd. All Rights Reserved</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="empty_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div></div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                          <!--[if !vml]><!-->
                                          <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
                                            <tr>
                                              <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Designed with BEE" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                              <td style="font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" target="_blank" style="color: #9d9d9d; text-decoration: none;">Designed with BEE</a></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table><!-- End -->
    </body>
    
    </html>`, // html body
  });



})

module.exports = succesRouter;

// ESPACIO DENTRE PRODUCTOS
{/* <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                    <tbody>
                      <tr>
                        <td>
                          <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;" width="700">
                            <tbody>
                              <tr>
                                <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                    <tr>
                                      <td class="pad">
                                        <div class="alignment" align="center">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #E8E8E8;"><span>&#8202;</span></td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"></table> */}








//COMPONENTE DE PRODUCTO,PRECIO,NOMBRE

{/* <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                    <tbody>
                      <tr>
                        <td>
                          <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;" width="700">
                            <tbody>
                              <tr>
                                <td class="column column-1" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 10px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <table class="image_block block-1" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                    <tr>
                                      <td class="pad">
                                        <div class="alignment" align="center" style="line-height:10px"><img src=${productos[0].image} style="display: block; height: auto; border: 0; width: 125px; max-width: 100%;" width="125" alt="Alternate text" title="Alternate text"></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
                                  <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                    <tr>
                                      <td class="pad" style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;">
                                        <div style="font-family: sans-serif">
                                          <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #232323; line-height: 1.2;">
                                            <p dir="ltr" style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:17px;">${productos[0].name}</span></p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td class="column column-3" width="25%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                  <div class="spacer_block block-1 mobile_hide" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                  <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                    <tr>
                                      <td class="pad" style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;">
                                        <div style="font-family: sans-serif">
                                          <div class style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                            <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">$${productos[0].price}</p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}


















//pug
// head
//   title
//   meta(http-equiv='Content-Type' content='text/html; charset=utf-8')
//   meta(name='viewport' content='width=device-width, initial-scale=1.0')
//   //if mso
//     xml
//       o:officedocumentsettings
//         o:pixelsperinch 96
//         o:allowpng
//   style.
//     * {
//     box-sizing: border-box;
//     }
//     body {
//     margin: 0;
//     padding: 0;
//     }
//     a[x-apple-data-detectors] {
//     color: inherit !important;
//     text-decoration: inherit !important;
//     }
//     #MessageViewBody a {
//     color: inherit;
//     text-decoration: none;
//     }
//     p {
//     line-height: inherit
//     }
//     .desktop_hide,
//     .desktop_hide table {
//     mso-hide: all;
//     display: none;
//     max-height: 0px;
//     overflow: hidden;
//     }
//     .image_block img+div {
//     display: none;
//     }
//     @media (max-width:720px) {
//     .desktop_hide table.icons-inner {
//     display: inline-block !important;
//     }
//     .icons-inner {
//     text-align: center;
//     }
//     .icons-inner td {
//     margin: 0 auto;
//     }
//     .image_block img.big,
//     .row-content {
//     width: 100% !important;
//     }
//     .mobile_hide {
//     display: none;
//     }
//     .stack .column {
//     width: 100%;
//     display: block;
//     }
//     .mobile_hide {
//     min-height: 0;
//     max-height: 0;
//     max-width: 0;
//     overflow: hidden;
//     font-size: 0px;
//     }
//     .desktop_hide,
//     .desktop_hide table {
//     display: table !important;
//     max-height: none !important;
//     }
//     }
// table.nl-container(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fbfbfb;')
//   tbody
//     tr
//       td
//         table.row.row-1(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6d18b5; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1(style='height:20px;line-height:20px;font-size:1px;') &hairsp;
//                         table.image_block.block-2(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad(style='width:100%;padding-right:0px;padding-left:0px;')
//                               .alignment(align='center' style='line-height:10px')
//                                 img(src='https://b283fc4025.imgdist.com/public/users/Integrators/BeeProAgency/1007263_992118/logo.tech.png' style='display: block; height: auto; border: 0; width: 140px; max-width: 100%;' width='140' alt='Alternate text' title='Alternate text')
//                         .spacer_block.block-3(style='height:20px;line-height:20px;font-size:1px;') &hairsp;
//         table.row.row-2(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #4ba7ff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.image_block.block-1(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad(style='width:100%;padding-right:0px;padding-left:0px;')
//                               .alignment(align='center' style='line-height:10px')
//                                 img.big(src='https://b283fc4025.imgdist.com/public/users/Integrators/BeeProAgency/1007263_992118/compra.tecnologia.png' style='display: block; height: auto; border: 0; width: 700px; max-width: 100%;' width='700' alt='Alternate text' title='Alternate text')
//         table.row.row-3(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1(style='height:35px;line-height:35px;font-size:1px;') &hairsp;
//                         table.text_block.block-2(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:25px;padding-left:25px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;')
//                                   p(style='margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;')
//                                     span(style='font-size:28px;') Hola ${user.name}
//                         table.text_block.block-3(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;')
//                                   p(style='margin: 0; font-size: 14px; mso-line-height-alt: 27px;')
//                                     span(style='font-size:18px;') Muchas gracias por comprar en Techzone. Aqui puede ver un resumen de su compra:
//         table.row.row-4(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f4f4; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1(style='height:30px;line-height:30px;font-size:1px;') &hairsp;
//         table.row.row-5(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.text_block.block-1(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:25px;padding-left:35px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;')
//                                   p(style='margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;')
//                                     span(style='font-size:22px;') Usted compro:
//         table.row.row-6(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='25%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 10px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.image_block.block-1(width='100%' border='0' cellpadding='20' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad
//                               .alignment(align='center' style='line-height:10px')
//                                 img(src='${productos[0].image}' style='display: block; height: auto; border: 0; width: 125px; max-width: 100%;' width='125' alt='Alternate text' title='Alternate text')
//                       td.column.column-2(width='50%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1(style='height:25px;line-height:25px;font-size:1px;') &hairsp;
//                         table.text_block.block-2(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #232323; line-height: 1.2;')
//                                   p(dir='ltr' style='margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;')
//                                     span(style='font-size:17px;') ${productos[0].name}
//                       td.column.column-3(width='25%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1.mobile_hide(style='height:30px;line-height:30px;font-size:1px;') &hairsp;
//                         table.text_block.block-2(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;')
//                                   p(style='margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;') $${productos[0].price}
//         table.row.row-7(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.divider_block.block-1(width='100%' border='0' cellpadding='10' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad
//                               .alignment(align='center')
//                                 table(border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                                   tr
//                                     td.divider_inner(style='font-size: 1px; line-height: 1px; border-top: 1px solid #E8E8E8;')
//                                       span &hairsp;
//         table.row.row-8(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='25%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 10px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.image_block.block-1(width='100%' border='0' cellpadding='20' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad
//                               .alignment(align='center' style='line-height:10px')
//                                 img(src='${productos[1].image}' style='display: block; height: auto; border: 0; width: 125px; max-width: 100%;' width='125' alt='Alternate text' title='Alternate text')
//                       td.column.column-2(width='50%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1(style='height:25px;line-height:25px;font-size:1px;') &hairsp;
//                         table.text_block.block-2(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #232323; line-height: 1.2;')
//                                   p(style='margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;')
//                                     span(style='font-size:17px;') ${productos[1].name}
//                       td.column.column-3(width='25%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1.mobile_hide(style='height:30px;line-height:30px;font-size:1px;') &hairsp;
//                         table.text_block.block-2(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;')
//                                   p(style='margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;') $${productos[0].price}
//         table.row.row-9(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.divider_block.block-1(width='100%' border='0' cellpadding='10' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad
//                               .alignment(align='center')
//                                 table(border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                                   tr
//                                     td.divider_inner(style='font-size: 1px; line-height: 1px; border-top: 1px solid #E8E8E8;')
//                                       span &hairsp;
//         table.row.row-10(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='25%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 10px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.image_block.block-1(width='100%' border='0' cellpadding='20' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad
//                               .alignment(align='center' style='line-height:10px')
//                                 img(src='https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1541/Summer_hat.png' style='display: block; height: auto; border: 0; width: 125px; max-width: 100%;' width='125' alt='Alternate text' title='Alternate text')
//                       td.column.column-2(width='50%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1(style='height:25px;line-height:25px;font-size:1px;') &hairsp;
//                         table.text_block.block-2(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #232323; line-height: 1.2;')
//                                   p(style='margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;')
//                                     span(style='font-size:17px;') Summer Hat
//                       td.column.column-3(width='25%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1.mobile_hide(style='height:30px;line-height:30px;font-size:1px;') &hairsp;
//                         table.text_block.block-2(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;')
//                                   p(style='margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;') $85.90
//         table.row.row-11(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.divider_block.block-1(width='100%' border='0' cellpadding='10' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad
//                               .alignment(align='center')
//                                 table(border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                                   tr
//                                     td.divider_inner(style='font-size: 1px; line-height: 1px; border-top: 1px solid #E8E8E8;')
//                                       span &hairsp;
//         table.row.row-12(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='25%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.text_block.block-1(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-left:35px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #848484; line-height: 1.5;')
//                                   p(style='margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;')
//                                     span(style='font-size:14px;') Total
//                       td.column.column-2(width='50%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1.mobile_hide(style='height:25px;line-height:25px;font-size:1px;') &hairsp;
//                       td.column.column-3(width='25%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.text_block.block-1(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-left:35px;padding-right:25px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #666666; line-height: 1.5;')
//                                   p(style='margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;')
//                                     span(style='font-size:14px;') $401.70
//         table.row.row-13(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1(style='height:25px;line-height:25px;font-size:1px;') &hairsp;
//         table.row.row-14(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         .spacer_block.block-1(style='height:55px;line-height:55px;font-size:1px;') &hairsp;
//                         table.image_block.block-2(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad(style='width:100%;padding-right:0px;padding-left:0px;')
//                               .alignment(align='center' style='line-height:10px')
//                                 img.big(src='https://b283fc4025.imgdist.com/public/users/Integrators/BeeProAgency/1007263_992118/editor_images/cc0e98e7-7b70-427f-b85a-52ad3b706ba0.png' style='display: block; height: auto; border: 0; width: 525px; max-width: 100%;' width='525' alt="I'm an image" title="I'm an image")
//                         .spacer_block.block-3(style='height:25px;line-height:25px;font-size:1px;') &hairsp;
//                         table.text_block.block-4(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;')
//                           tr
//                             td.pad(style='padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;')
//                               div(style='font-family: sans-serif')
//                                 div(style='font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;')
//                                   p(style='margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;') &copy;TechZone Ltd. All Rights Reserved
//         table.row.row-15(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.empty_block.block-1(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad
//                               div
//         table.row.row-16(align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//           tbody
//             tr
//               td
//                 table.row-content.stack(align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;' width='700')
//                   tbody
//                     tr
//                       td.column.column-1(width='100%' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;')
//                         table.icons_block.block-1(width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                           tr
//                             td.pad(style='vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;')
//                               table(width='100%' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;')
//                                 tr
//                                   td.alignment(style='vertical-align: middle; text-align: center;')
//                                     //if vml
//                                       table(align='left' cellpadding='0' cellspacing='0' role='presentation' style='display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;')
//                                     // [if !vml] <!
//                                     table.icons-inner(style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;' cellpadding='0' cellspacing='0' role='presentation')
//                                       // <![endif]
//                                       tr
//                                         td(style='vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;')
//                                           a(href='https://www.designedwithbee.com/' target='_blank' style='text-decoration: none;')
//                                             img.icon(alt='Designed with BEE' src='https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png' height='32' width='34' align='center' style='display: block; height: auto; margin: 0 auto; border: 0;')
//                                         td(style='font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;')
//                                           a(href='https://www.designedwithbee.com/' target='_blank' style='color: #9d9d9d; text-decoration: none;'