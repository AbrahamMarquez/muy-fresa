<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'>    
    <style>
        body
        {
            font-family:'League Spartan'
        }
        table
        {
            width:757px;
            background-image:url('{{asset("images/redBg.svg")}}');
            border-radius:10px 10px 0 0;

        }
        .welcome
        {
            color:#9ade4a;
            font-size:72px;
            font-weight:bold;
            padding-left:100px;
        }
        .user
        {
            color:white;
            font-size:60px;
            font-weight:bold;
            padding-left:100px;
        }
        .whitesquare
        {
            width:572px;
            height:223px;
            background:white;
            border-radius:10px;
            text-align:left;
            padding:30px;
            font-size:20px;
            color:#323232;
            font-weight:700;
            
        }
        span
        {
            color:#db0032;
        }
        .container
        {
            width:100%;
            display:flex;
            justify-content:center;
           

        }
        .footer
        {
           
            width:759px;
            height:94px;
            background:#3b2b1e;
            border-radius:0px 0px 12px 12px; 
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
        .settings
        {
            padding-top:20px;
            padding-bottom:40px;
        }
        .code
        {
            color:#e5133a;
            font-size:48px;
            text-align:center;
            font-weight:bold
        }
    </style>
</head>
<body>
    <center>
    <table>
        <tr>
            <td>
                <img src="{{asset('images/LogoMuyFresaWhite.svg')}}">
            </td>
            <td colspan='2'>
                <img width='327px' align='right' src="{{asset('images/fresa.svg')}}">
            </td>
        </tr>
        <tr>
            <td class="welcome">
                Bienvenido
            </td>
        </tr>
        <tr>
            <td class="user">
                Freser@
            </td>
        </tr>
        <tr>
            <td colspan='13' align='center' class='settings'>
                <div class="whitesquare">
                    <div>Hola <span>Carlos Mauricio</span></div>
                    <div style='margin-top:15px;'>
                        Ya casi formas parte de nuestra comunidad, para completar el registro solo tienes que ingresar el siguiente código en nuestra web:
                    </div>
                    <div class='code' style='padding-top:40px;'>
                        05254
                    </div>
                </div>
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