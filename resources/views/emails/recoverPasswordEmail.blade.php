<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'>
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,900&display=swap');
        body
        {
            font-family:'League Spartan';
        }
        table
        {
            width:755px;
        }
        .header
        {   
            background-image:url('{{asset("images/animationChocolate.png")}}');
            background-size: auto 152%;
            background-repeat: no-repeat;
            background-position-x: -213px;
            height: 218px;
        }
        .logo-container
        {
            width:157px;
            height:157px;
            background:white;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:50%;
            margin-left:37px;
            
        }
        .body
        {
            margin-top:130px
        }
        .title
        {
            height: 25px;
            font-size:28px;
            color:#db0032;
            font-family:'League Spartan';
            font-weight:bold;
            margin-bottom:10px;
            
        }
        .info
        {
            font-size:20px;
            width:388px;
            
        }
        .code
        {
            text-align:center;
            font-size:48px;
            color:#cd113b;
            margin-top:30px;
            font-weight:bold;
        }
        .footer
        {
           
            height:94px;
            background:#3b2b1e;
            border-radius:12px;
            margin-top: 133px;
        }
        .footer-title
        {
            font-size:16px;
            color:white;
            padding-left:40px;
        }
        .images
        {
            padding-right:20px;
        }
        .email
        {
            font-size:14px;
            color:white;
            padding-left:40px;
        }
    </style>
</head>
<body>
    <center>
    <table>
        <tr>
            <td class='header' colspan='2'>
                <div class='logo-container'>
                    <img src='{{asset("images/logoMuyFresa.svg")}}'/>
                <div>
            </td>
        </tr>
        <tr class='body'>
            
            <td  >
                <div class='title'>¡Recupera tu cuenta!</div>
                <div class='info'>Para recuperar tu contraseña es necesario ingresar el siguiente código de verificación de correo:</div>
               <div class='code'>05254</div>
            </td>
            <td >
                <img width='267px' src="{{asset('images/candado.png')}}">
            </td>
        </tr>
    </table>
    <table class='footer'>
        <tr>
            <td class='footer-title'>Departamento comercial</td>
            <td rowspan='2' align='right' class='images'>
                <div>
                    <img width='50' src="{{asset('images/facebook.svg')}}">
                    <img src="{{asset('images/instagram.svg')}}">
                    <img src="{{asset('images/whatsapp.svg')}}">
                </div>
            </td>
        </tr>
        <tr>
            <td class='email'>muy.fresa@mail.com</td>
        </tr>
    </table>
    </center>
</body>
</html>