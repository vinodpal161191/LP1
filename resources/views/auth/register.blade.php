
<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Locals Planet</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/signup.css">
    <script src="js/vendor/min/modernizr-custom.min.22012013.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script defer async src="js/min/mobile.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;libraries=places"></script>

    <script src="js/jquery.geocomplete.js"></script>
    <script type='text/javascript' src='js/custom.js?ver=3.5'></script>
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body class="course-tutors">
<!--[if lt IE 9]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->
<div class="wrapper">
    <header class="site-header" id="header" >
        <div >
            <h1 class="logo"><a href="#" class="ir"><img src="images/logo.png" alt=""></a></h1>
        </div>
        <div style="" id="form_search">
            <form id="search-form" action="/s">
                <div id="search-bar"> <i class="icon icon-search"></i>
                    <input type="text" id="header-location" name="location" autocomplete="off" placeholder="Where are you going?">
                </div>
                <div id="header-search-settings">
                    <label class="checkin">Check in
                        <input type="text" placeholder="mm/dd/yyyy" class="checkin ui-datepicker-target" name="checkin" id="header-search-checkin">
                    </label>
                    <label class="checkout">Check out
                        <input type="text" placeholder="mm/dd/yyyy" name="checkout" class="checkout ui-datepicker-target" id="header-search-checkout">
                    </label>
                    <label class="guests">Guests
                        <select name="guests" id="header-search-guests">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                        </select>
                    </label>
                    <label>Room type</label>
                    <label for="room_type_0" class="checkbox">
                        <input type="checkbox" value="Entire home/apt" name="room_types[]" id="room_type_0">
                        Entire home/apt</label>
                    <label for="room_type_1" class="checkbox">
                        <input type="checkbox" value="Private room" name="room_types[]" id="room_type_1">
                        Private room</label>
                    <label for="room_type_2" class="checkbox">
                        <input type="checkbox" value="Shared room" name="room_types[]" id="room_type_2">
                        Shared room</label>
                    <button class="btn blue" type="submit"><i class="icon icon-search"></i>Find a place</button>
                </div>
            </form>
        </div>
        <a href="#" class="mobile-nav-toggle ir">Open/close navigation</a>
        <nav class="main-nav-holder">
            <ul class="main-nav">
                <li class="nav-top-item"><a href="#">How it works</a> </li>
                <li class="nav-top-item"><a href="#">Sign up</a> </li>
                <li class="nav-top-item"><a href="#">Log in</a> </li>
                <li class="nav-top-item nav-course"><a href="#"><span>Become a local host</span></a></li>
            </ul>
        </nav>
        <span class="shadow"></span> </header>
    <div class="content-holder cf" id="content-hldr" >



        <div id="signup">

            <div id="section_signup">
                <h1>Sign up</h1>
                <div class="clearfix fb-flow" id="signUpBox">
                    <div class="fb-button-container-centered">

                        <a data-redirect_uri="#" data-populate_uri="" class="fb-button " href="#">
                            <span class="fb-button-left"></span>
                            <span class="fb-button-center"><strong>Connect</strong> with <strong>Facebook</strong></span>
                            <span class="fb-button-right"></span>
                        </a>
                        <p class="no-autopost">
                            * We don't post anything without your permission.
                        </p>
                    </div>
                    <h3 class="or-separator signpainter">or</h3>
                    <a id="create-using-email" style="display: block; cursor:pointer;">
                        Create an account using my e-mail address
                    </a>

                    <form method="post" id="user_new" class="signup-form-fields framed" action="{{ url('/register') }}" accept-charset="UTF-8" style="display: none;">
                        {{ csrf_field() }}
                        <div id="inputFirst" class="textInput">
                            <input type="text" size="30" placeholder="First name" class="required" name="name" id="name">
                            @if ($errors->has('name'))
                            <span class="help-block">
                        <strong>{{ $errors->first('name') }}</strong>
                    </span>
                            @endif
                        </div>
                        <div id="inputEmail" class="textInput">
                            <input type="text" size="30" placeholder="Email Address" class="email required" name="email" id="email">
                            @if ($errors->has('email'))
                            <span class="help-block">
                      <strong>{{ $errors->first('email') }}</strong>
                  </span>
                            @endif
                        </div>
                        <div id="inputPassword" class="textInput">
                            <input type="password" size="30" placeholder="Password" class="password required" name="password" id="password">
                            @if ($errors->has('password'))
                            <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                            @endif
                        </div>
                        <div id="inputConfirmPassword" class="textInput">
                            <input type="password" size="30" placeholder="Confirm Password" name="password_confirmation" id="password_confirmation">
                            @if ($errors->has('password_confirmation'))
                            <span class="help-block">
                          <strong>{{ $errors->first('password_confirmation') }}</strong>
                      </span>
                            @endif
                        </div>


                        <div class="checkInput">
                            <input type="hidden" value="0" name="user_profile_info[opt_in_promotional_email]"><input type="checkbox" value="1" name="user_profile_info[opt_in_promotional_email]" id="user_profile_info_opt_in_promotional_email" checked="checked">
                            <label for="user_profile_info_opt_in_promotional_email">Tell me about inspiring travel tidbits, juicy news, and exclusive discounts!</label>
                        </div>

                        <div class="formActions clearfix">
                            <div class="pad">
                                <input type="submit" value="Click Here" class="signin" id="bCreateAccount">
                                <label for="remember_me1"><input type="checkbox" value="true" name="remember_me" id="remember_me1" class="remember_me"><span>Remember me next time</span></label>
                            </div>
                        </div>
                        <div class="formActions clearfix">
                            <div style="clear:both"><a class="forgotPassword" href="/forgot_password">Forgot password?</a>
                            </div>
                        </div>

                    </form>          </div>

                <div class="create-account-legal">
                    By clicking "Create Account" or "Connect with Facebook" you confirm that you accept the <a data-popup="true" href="#">Terms of Service</a> and <a data-popup="true" href="#">Privacy Policy</a>
                </div>

                <div class="smallBox">
                    Already Locals Planet member? <a href="#">Log In Now</a>
                </div>
            </div>
        </div>








    </div>
    <footer class="site-footer">
        <div class="footer-content cf">
            <nav class="footer-nav">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">&#187; About Us</a></li>
                    <li><a href="#">&#187; How it works</a></li>
                    <li><a href="#">&#187; Jobs</a></li>
                    <li><a href="#">&#187; Press </a></li>
                    <li><a href="#">&#187; Blog </a></li>
                    <li><a href="#">&#187; Trust & Safety</a></li>
                    <li><a href="#">&#187; Terms & Privacy</a></li>
                    <li><a href="#">&#187; Contact</a></li>
                </ul>
            </nav>
            <nav class="footer-nav">
                <h3>Connect</h3>
                <ul>
                    <li><a href="#">&#187; Twitter</a></li>
                    <li><a href="#">&#187; Facebook</a></li>
                    <li><a href="#">&#187; Youtube</a></li>
                    <li><a href="#">&#187; Pinterest</a></li>
                </ul>
            </nav>
            <nav class="footer-nav">
                <h3>Policies</h3>
                <ul>
                    <li><a href="#">&#187; Cancellation Policy</a></li>
                    <li><a href="#">&#187; Terms & Policy</a></li>
                    <li><a href="#">&#187; FAQ</a></li>
                </ul>
            </nav>
            <nav class="footer-nav">
                <h3>Local Settings</h3>
                <div class="language-curr-picker clearfix">
                    <div class="lang-selector btn-group btn-dropdown">
                        <button class="btn gray dropdown-toggle"> <i class="globe"></i> <span class="value language">English </span> <i class="icon icon-caret-down"></i> </button>
                        <ul class="dropdown-menu nav language-dropdown bottom-up">
                            <li class="nav-header">Choose language</li>
                            <li data-locale="id" class="picker-item"><a href="#">Bahasa Indonesia</a></li>
                            <li data-locale="ms" class="picker-item"><a href="#">Bahasa Melayu</a></li>
                            <li data-locale="da" class="picker-item"><a href="#">Dansk</a></li>
                            <li data-locale="de" class="picker-item"><a href="#">Deutsch</a></li>
                            <li data-locale="en" class="picker-item"><a href="#">English</a></li>
                            <li data-locale="es" class="picker-item"><a href="#">Español</a></li>
                            <li data-locale="el" class="picker-item"><a href="#">Eλληνικά</a></li>
                            <li data-locale="fr" class="picker-item"><a href="#">Français</a></li>
                            <li data-locale="it" class="picker-item"><a href="#">Italiano</a></li>
                            <li data-locale="hu" class="picker-item"><a href="#">Magyar</a></li>
                            <li data-locale="nl" class="picker-item"><a href="#">Nederlands</a></li>
                            <li data-locale="no" class="picker-item"><a href="#">Norsk</a></li>
                            <li data-locale="pl" class="picker-item"><a href="#">Polski</a></li>
                            <li data-locale="pt" class="picker-item"><a href="#">Português</a></li>
                            <li data-locale="fi" class="picker-item"><a href="#">Suomi</a></li>
                            <li data-locale="sv" class="picker-item"><a href="#">Svenska</a></li>
                            <li data-locale="tr" class="picker-item"><a href="#">Türkçe</a></li>
                            <li data-locale="is" class="picker-item"><a href="#">Íslenska</a></li>
                            <li data-locale="cs" class="picker-item"><a href="#">Čeština</a></li>
                            <li data-locale="ru" class="picker-item"><a href="#">Русский</a></li>
                            <li data-locale="th" class="picker-item"><a href="#">ภาษาไทย</a></li>
                            <li data-locale="zh" class="picker-item"><a href="#">中文</a></li>
                            <li data-locale="ja" class="picker-item"><a href="#">日本語（ベータ版</a></li>
                            <li data-locale="ko" class="picker-item"><a href="#">한국어</a></li>
                        </ul>
                    </div>
                    <div class="curr-selector btn-group btn-dropdown">
                        <button class="btn gray dropdown-toggle"> <i class="currency INR dark"></i> <span class="value currency"> INR </span> <i class="icon icon-caret-down"></i> </button>
                        <ul class="dropdown-menu nav currency-dropdown bottom-up">
                            <li class="nav-header">Choose currency</li>
                            <li data-currency="ARS" class="picker-item"><a href="#"><i class="currency ARS dark"></i> ARS</a></li>
                            <li data-currency="AUD" class="picker-item"><a href="#"><i class="currency AUD dark"></i> AUD</a></li>
                            <li data-currency="BRL" class="picker-item"><a href="#"><i class="currency BRL dark"></i> BRL</a></li>
                            <li data-currency="CAD" class="picker-item"><a href="#"><i class="currency CAD dark"></i> CAD</a></li>
                            <li data-currency="CHF" class="picker-item"><a href="#"><i class="currency CHF dark"></i> CHF</a></li>
                            <li data-currency="CNY" class="picker-item"><a href="#"><i class="currency CNY dark"></i> CNY</a></li>
                            <li data-currency="CZK" class="picker-item"><a href="#"><i class="currency CZK dark"></i> CZK</a></li>
                            <li data-currency="DKK" class="picker-item"><a href="#"><i class="currency DKK dark"></i> DKK</a></li>
                            <li data-currency="EUR" class="picker-item"><a href="#"><i class="currency EUR dark"></i> EUR</a></li>
                            <li data-currency="GBP" class="picker-item"><a href="#"><i class="currency GBP dark"></i> GBP</a></li>
                            <li data-currency="HKD" class="picker-item"><a href="#"><i class="currency HKD dark"></i> HKD</a></li>
                            <li data-currency="HUF" class="picker-item"><a href="#"><i class="currency HUF dark"></i> HUF</a></li>
                            <li data-currency="IDR" class="picker-item"><a href="#"><i class="currency IDR dark"></i> IDR</a></li>
                            <li data-currency="ILS" class="picker-item"><a href="#"><i class="currency ILS dark"></i> ILS</a></li>
                            <li data-currency="INR" class="picker-item"><a href="#"><i class="currency INR dark"></i> INR</a></li>
                            <li data-currency="JPY" class="picker-item"><a href="#"><i class="currency JPY dark"></i> JPY</a></li>
                            <li data-currency="KRW" class="picker-item"><a href="#"><i class="currency KRW dark"></i> KRW</a></li>
                            <li data-currency="MYR" class="picker-item"><a href="#"><i class="currency MYR dark"></i> MYR</a></li>
                            <li data-currency="MXN" class="picker-item"><a href="#"><i class="currency MXN dark"></i> MXN</a></li>
                            <li data-currency="NOK" class="picker-item"><a href="#"><i class="currency NOK dark"></i> NOK</a></li>
                            <li data-currency="NZD" class="picker-item"><a href="#"><i class="currency NZD dark"></i> NZD</a></li>
                            <li data-currency="PHP" class="picker-item"><a href="#"><i class="currency PHP dark"></i> PHP</a></li>
                            <li data-currency="PLN" class="picker-item"><a href="#"><i class="currency PLN dark"></i> PLN</a></li>
                            <li data-currency="RUB" class="picker-item"><a href="#"><i class="currency RUB dark"></i> RUB</a></li>
                            <li data-currency="SEK" class="picker-item"><a href="#"><i class="currency SEK dark"></i> SEK</a></li>
                            <li data-currency="SGD" class="picker-item"><a href="#"><i class="currency SGD dark"></i> SGD</a></li>
                            <li data-currency="THB" class="picker-item"><a href="#"><i class="currency THB dark"></i> THB</a></li>
                            <li data-currency="TRY" class="picker-item"><a href="#"><i class="currency TRY dark"></i> TRY</a></li>
                            <li data-currency="TWD" class="picker-item"><a href="#"><i class="currency TWD dark"></i> TWD</a></li>
                            <li data-currency="USD" class="picker-item"><a href="#"><i class="currency USD dark"></i> USD</a></li>
                            <li data-currency="VND" class="picker-item"><a href="#"><i class="currency VND dark"></i> VND</a></li>
                            <li data-currency="ZAR" class="picker-item"><a href="#"><i class="currency ZAR dark"></i> ZAR</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <a href="#top" class="back-to-top">Back to top</a> </div>
        <!-- end .footer-content -->

    </footer>
    <a href="#" class="mobile-overlay"></a> </div>


<!-- end .wrapper -->

<div class="overlay">
    <div class="overlay-content-holder"> <a href="#" class="overlay-close-btn">X</a>
        <div class="overlay-content"></div>
    </div>
</div>
<script src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/bootstrap-dropdown.js"></script>
<script type="text/javascript">

    $(document).ready(function(){
        $("#user_new").validate();
        $('.dropdown-toggle').dropdown();
        $("#create-using-email").click(function(){

            //$("#drop_home").html(rr);
            $("#user_new").slideToggle("fast");

            $("#create-using-email").hide();
        });

    });
</script>
</body>
</html>
