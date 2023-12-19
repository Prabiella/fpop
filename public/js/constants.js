var fpConstants = {
  customer_url: 'https://serviciospagina.gdevdish.name/',
  fp_url: 'https://kl2mdwwsba.execute-api.us-east-1.amazonaws.com/prod/',
  fp_home: 'https://dishcelular.com.mx',
  templateMailCC:
    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">' +
    '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">' +
    '<meta name="viewport" content="width=device-width, user-scalable=no">' +
    '<title>confirma_datos</title>' +
    '<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">' +
    '</head>' +
    '<body style=" font-family: "Roboto", sans-serif; text-align: center; background-color: #f9f9f9;">' +
    '<table border="0" align="center" cellpadding="0" cellspacing="1" style="max-width:600px;">' +
    '<tbody>' +
    '<tr style="background-color:#000;">' +
    '<td height="5px" colspan="4" style="text-align:center;padding:15px">' +
    '<img src="https://d1pt5ohyflo74l.cloudfront.net/img/dish-header.png" width="111px" height="auto" alt="" / style="padding:15px;">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="20px" colspan="4"></td>' +
    '</tr>' +
    '<tr>' +
    '<td width="10px">&nbsp;</td>' +
    '<td height="5px" colspan="2" style="text-align:center;font-size: 35px;font-weight: 400; margin: 5px; color: #b52228;">' +
    '<h1 class="encabezado">V_NOMBRE</h1>' +
    '<h3 style="font-size: 14px; margin: 5px; font-weight:300; color: #555;">' +
    'Ingresa este código para confirmar tu solicitud.' +
    '</h3>' +
    '</td>' +
    '<td width="10px">&nbsp;</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="5px" colspan="4">' +
    '<hr style=" max-width: 600px;' +
    'border: 0; height: 1px;' +
    'background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); ">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="10px">&nbsp;</td>' +
    '<td height="5px" colspan="2" style="text-align:center;">' +
    '<h2 style="font-size: 18px; margin: 5px; font-weight:100; color: #555;">' +
    '<b>V_CODIGO</b>' +
    '</h2>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="5px" colspan="4">' +
    '<hr style=" max-width: 600px;' +
    'border: 0; height: 1px;' +
    'background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); ">' +
    '<td width="10px">&nbsp;</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="20px" colspan="4" style="text-align:center;">' +
    '<span style="display:block;text-align:center;">' +
    '<img src="https://d58ohtx80p2sd.cloudfront.net/egov2/img/ego.png" alt="flecha" class="img_triangulo">' +
    '</span>' +
    '</td>' +
    '</tr>' +
    '<tr></tr>' +
    '<tr></tr>' +
    '<tr></tr>' +
    '<tr style="background-color:#555;">' +
    '<td colspan="5" style="background-color:#555; "style="text-align:center;">' +
    '<p style=" font-size: 11px; margin: 15px; font-weight:lighter; color: #f9f9f9; padding:0px; text-align:center;">' +
    'Este es un correo generado automáticamente. No es necesario que lo respondas.' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '</body>' +
    '</html>',
  templateMailTY:
    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">' +
    '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">' +
    '<meta name="viewport" content="width=device-width, user-scalable=no">' +
    '<title>confirma_datos</title>' +
    '<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">' +
    '</head>' +
    '<body style=" font-family: "Roboto", sans-serif; text-align: center; background-color: #f9f9f9;">' +
    '<table border="0" align="center" cellpadding="0" cellspacing="1" style="max-width:600px;">' +
    '<tbody>' +
    '<tr style="background-color:#000;">' +
    '<td height="5px" colspan="4" style="text-align:center;padding:15px">' +
    '<img src="https://d1pt5ohyflo74l.cloudfront.net/img/dish-header.png" width="111px" height="auto" alt="" / style="padding:15px;">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="20px" colspan="4"></td>' +
    '</tr>' +
    '<tr>' +
    '<td width="10px">&nbsp;</td>' +
    '<td height="5px" colspan="2" style="text-align:center;font-size: 35px;font-weight: 400; margin: 5px; color: #b52228;">' +
    '<h1>¡FELICIDADES V_NOMBRE!</h1>' +
    '</td>' +
    '<td width="10px">&nbsp;</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="5px" colspan="4">' +
    '<hr style=" max-width: 600px;' +
    'border: 0; height: 1px; ' +
    'background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); ">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="10px">&nbsp;</td>' +
    '<td height="5px" colspan="2" style="text-align: center;">' +
    '<h2 style="font-size: 18px; margin: 5px; font-weight:100; color: #555;">' +
    '<b>Recibimos tu solicitud correctamente.</b>' +
    '</h2>' +
    '<h3 style="font-size: 14px; margin: 5px; font-weight:300; color: #555;">' +
    'Enviaremos tu chip en un lapso no mayor a <b>15 DÍAS </b> a tu domicilio:' +
    '</h3>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="5px" colspan="4">' +
    '<hr style=" max-width: 600px;' +
    'border: 0; height: 1px; ' +
    'background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); ">' +
    '<td width="10px">&nbsp;</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="500px" colspan="4">' +
    '<p style="font-size: 16px; margin: 5px; font-weight:bold; color: #b52228; text-align: left;">CALLE:' +
    '<span style="font-size: 16px; margin: 5px; font-weight:300; color: #555; text-align: center;">V_CALLE</span>' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="500px" colspan="4">' +
    '<p style="font-size: 16px; margin: 5px; font-weight:bold; color: #b52228; text-align: left;">NÚMERO:' +
    '<span style="font-size: 16px; margin: 5px; font-weight:300; color: #555; text-align: center;">V_NUMEXT</span>' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="500px" colspan="4">' +
    '<p style="font-size: 16px; margin: 5px; font-weight:bold; color: #b52228; text-align: left;">NÚMERO INTERIOR:' +
    '<span style="font-size: 16px; margin: 5px; font-weight:300; color: #555; text-align: center;">V_NUMINT</span>' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="500px" colspan="4">' +
    '<p style="font-size: 16px; margin: 5px; font-weight:bold; color: #b52228; text-align: left;">COLONIA:' +
    '<span style="font-size: 16px; margin: 5px; font-weight:300; color: #555; text-align: center;">V_COLONIA</span>' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="500px" colspan="4">' +
    '<p style="font-size: 16px; margin: 5px; font-weight:bold; color: #b52228; text-align: left;">MUNICIPIO:' +
    '<span style="font-size: 16px; margin: 5px; font-weight:300; color: #555; text-align: center;">V_MUNICIPIO</span>' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="500px" colspan="4">' +
    '<p style="font-size: 16px; margin: 5px; font-weight:bold; color: #b52228; text-align: left;">CÓDIGO POSTAL:' +
    '<span style="font-size: 16px; margin: 5px; font-weight:300; color: #555; text-align: center;">V_CODPOS</span>' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="500px" colspan="4">' +
    '<p style="font-size: 16px; margin: 5px; font-weight:bold; color: #b52228; text-align: left;">ESTADO:' +
    '<span style="font-size: 16px; margin: 5px; font-weight:300; color: #555; text-align: center;">V_ESTADO</span>' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="20px" colspan="2"></td>' +
    '</tr>' +
    '<tr>' +
    '<td colspan="4" style="text-align: center;">' +
    '<h3 style="font-size: 14px; margin: 5px; font-weight:300; color: #555;">' +
    'Recuerda tener a la mano una identificación oficial del titular para la entrega de tu chip.' +
    '</h3>' +
    '<h2 style="font-size: 18px; margin: 5px; font-weight:100; color: #555;">' +
    '<b>Este es tu folio de seguimiento para el envío de tu chip:</b>' +
    '</h2>' +
    '<h2 style="font-size: 22px; margin: 5px; font-weight:100; color: #555;">' +
    '<b>V_FOLIO</b>' +
    '</h2>' +
    '<br/>' +
    '<h3 style="font-size: 14px; margin: 5px; font-weight:300; color: #555;">' +
    'Si tienes alguna duda visita <a href="https://www.dish.com.mx/egos/faq.html" target="_blank">Preguntas frecuentes</a>' +
    '</h3>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="20px" colspan="4" style="text-align:center;">' +
    '<span style="display:block;text-align:center;">' +
    '<img src="https://d58ohtx80p2sd.cloudfront.net/egov2/img/ego.png" alt="flecha" class="img_triangulo">' +
    '</span>' +
    '</td>' +
    '</tr>' +
    '<tr></tr>' +
    '<tr></tr>' +
    '<tr style="background-color:#555;">' +
    '<td colspan="5" style="background-color:#555;" style="text-align: center;">' +
    '<p style=" font-size: 11px; margin: 15px; font-weight:lighter; color: #f9f9f9; padding:0px;">' +
    'Este es un correo generado automáticamente. No es necesario que lo respondas.' +
    '</p>' +
    '<p style=" font-size: 11px; margin: 15px; font-weight:lighter; color: #f9f9f9; padding:0px;">' +
    'Términos y condiciones en' +
    '<a href="https://dishcelular.com.mx" style="color: #f9f9f9; padding:0px;">dishcelular.com.mx</a>' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '</body>' +
    '</html>',

  templateMailStep:
    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">' +
    '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">' +
    '<meta name="viewport" content="width=device-width, user-scalable=no">' +
    '<title>confirma_datos</title>' +
    '<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">' +
    '</head>' +
    '<body style=" font-family: "Roboto", sans-serif; text-align: center; background-color: #f9f9f9;">' +
    '<table border="0" align="center" cellpadding="0" cellspacing="1" style="max-width:600px;">' +
    '<tbody>' +
    '<tr style="background-color:#000">' +
    '<td height="5px" colspan="4" style="text-align:center; padding:15px">' +
    '<img src="https://d1pt5ohyflo74l.cloudfront.net/img/dish-header.png" width="111px" height="auto">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="20px" colspan="4"></td>' +
    '</tr>' +
    '<tr>' +
    '<td width="10px">&nbsp;</td>' +
    '<td height="5px" colspan="2" style="text-align:center;font-size: 35px;font-weight: 400; margin: 5px; color: #b52228;">' +
    '<h1>V_NOMBRE</h1>' +
    '</td>' +
    '<td width="10px">&nbsp;</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="5px" colspan="4"><hr style=" max-width: 600px;' +
    'border: 0; height: 1px; ' +
    'background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); ">' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="10px">&nbsp;</td>' +
    '<td height="5px" colspan="2">' +
    '<h2 style="font-size: 18px; margin: 5px; font-weight:100; color: #555;">' +
    '<b>Tenemos una consulta para conocer el estatus<br> de la entrega de tu chip en tu domicilio:</b></h2>' +
    '<h3 style="font-size: 18px; margin: 5px; font-weight:300; color: #555;">' +
    'V_DIAS' +
    '</h3>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td height="5px" colspan="4">' +
    '<hr style=" max-width: 600px;' +
    'border: 0; height: 1px; ' +
    'background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); ' +
    'background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); ' +
    'background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); ' +
    'background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); "> ' +
    '</td>' +
    '</tr>' +
    '<hr style=" max-width: 600px;' +
    'border: 0; height: 1px; ' +
    'background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);' +
    'background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); ">' +
    '<td width="10px">&nbsp;</td>' +
    '</tr>' +
    '<tr>' +
    '<td width="500px" colspan="4">' +
    'V_TEXTO' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td  height="20px" colspan="2"></td>' +
    '</tr>' +
    'V_FILA_DUDA' +
    '<tr>' +
    '<td height="20px" colspan="4" style="text-align:center;">' +
    '<span style="display:block;text-align:center;">' +
    '<img src="https://d58ohtx80p2sd.cloudfront.net/egov2/img/ego.png" alt="flecha" class="img_triangulo">' +
    '</span> ' +
    '</td>' +
    '</tr>' +
    '<tr></tr>' +
    '<tr></tr>' +
    '<tr style="background-color:#555;">' +
    '<td colspan="4" style="background-color:#555; text-align:center;">' +
    '<p style=" font-size: 11px; margin: 15px; font-weight:lighter; color: #f9f9f9; padding:0px;">' +
    'Este es un correo generado automáticamente. No es necesario que lo respondas.' +
    '</p>' +
    '<p style=" font-size: 11px; margin: 15px; font-weight:lighter; color: #f9f9f9; padding:0px;">' +
    'Términos y condiciones en <a href="https://dishcelular.com.mx" style="color: #f9f9f9; padding:0px;">dishcelular.com.mx</a>' +
    '</p>' +
    '</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '</body>' +
    '</html>'
}
