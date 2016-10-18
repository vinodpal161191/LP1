<!DOCTYPE html>
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js"><!--<![endif]-->

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Locals Planet</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/main.css">

 <script src="js/vendor/min/modernizr-custom.min.22012013.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script defer async src="js/min/main.min.22012013.js"></script>
<script type="text/javascript" src="js/bootstrap-dropdown.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.dropdown-toggle').dropdown();
        });
   </script>

<script src="js/jquery.geocomplete.js"></script>
<script type='text/javascript' src='js/custom.js?ver=3.5'></script>
<style type="text/css">
.wrapper {
    background: none repeat scroll 0 0 #FFFFFF;
    box-shadow: 0 0 50px 0 #333333;
    margin: 0px;
    max-width:none;
    width: 100%;
}
.homepage .content-holder {
    margin: 0;
}
.content-holder {
    min-height: 300px;
    position: relative;
    top: 0px;
}
.flexslider {
    margin:0px;
}
.flex-control-nav { display:none;}
.flexslider .slides img {
    display: block;
    height: 800px;
    width: 100%;
}
.site-header{ display:none;}
.site-footer {
    background: none repeat scroll 0 0 #000;
    border-top: 0 none;
    margin: 0;padding:0px 30px 100px;

}
.HomeFooter {
    background-color: Black;
    height: 75px;
    opacity: 0.8;
    position: absolute;
    width: 100%;
}
.footer_left ul {
    padding-bottom: 10px;
    padding-top: 14px;
}
.footer_left ul {
    padding-top: 0 !important;
}
.footer_left ul li {
    display: inline;
}
.footer_left ul li a {
    font-size: 13px;
}
.footer_left ul li a {
    color: #A2A2A2;
    font-size: 13px;
    text-decoration: none;
}
.site-footer .footer-content {
    margin: 0 auto;
    position: relative;
    width: auto;
}
.background_layover {
    background-image: url("images/grid.png");
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
}
#header_top{ position:absolute; top:0px; height:100px; width:100%; background:#000; z-index:1; opacity:0; }
#footer_bottom{ position:absolute; bottom:0px; height:100px; width:100%; background:#000; z-index:1; opacity:1; }
</style>
</head>
<body class="homepage">
<div class="wrapper">
<div > <h1 class="logo"><a href="#" class="ir"><img src="images/logo.png" alt=""></a></h1></div>

    <a href="#" class="mobile-nav-toggle ir">Open/close navigation</a>
    <nav class="main-nav-holder">
   <ul class="main-nav">
        <li class="nav-top-item nav-course"><a href="/about"><span>Become a local host</span></a></li>
        <li class="nav-top-item"><a href="#">How it works</a></li>

                <li class="nav-top-item"><a href="{{url('register')}}">Sign up</a></li>
                <li class="nav-top-item"><a href="/users/sign_in">Log in</a></li>
      </ul>
    </nav>
    <span class="shadow"></span>
  <header class="site-header" id="header" >




   <div > <h1 class="logo"><a href="#" class="ir"><img src="images/logo.png" alt=""></a></h1></div>

    <a href="#" class="mobile-nav-toggle ir">Open/close navigation</a>
    <nav class="main-nav-holder">
      <ul class="main-nav">
        <li class="nav-top-item"><a href="#">How it works</a>

        </li>
        <li class="nav-top-item"><a href="#">Sign up</a>

        </li>
        <li class="nav-top-item"><a href="#">Log in</a>

        </li>
        <li class="nav-top-item nav-course"><a href="#"><span>Become a local host</span></a></li>

      </ul>
    </nav>
    <span class="shadow"></span> </header>


    <!--<div class="flexslider">
    <div class="background_layover"></div>
      <ul class="slides">
        <li class="dark"><img src="images/slide/home-page-images1.jpg" /></li>
        <li class="light"><img src="images/slide/home-page-images2.jpg" /></li>
        <li class="light"><img src="images/slide/home-page-images3.jpg" /></li>
        <li class="light"><img src="images/slide/home-page-images4.jpg" /></li>
      </ul>
    </div>-->
    <!-- end .flexslider -->


    <div class="search-area">


    <div class="container1">
      <h1>Discover. Connect. Travel</h1>

      <form class="custom show-search-options position-left" id="search_form" action="/s">
        <div class="input-wrapper">
          <input type="text" placeholder="Where would you want to go?" name="location" id="location" autocomplete="off" class="location">
          <p style="display:none;" class="bad" id="enter_location_error_message"> Please set location
          </p>
        </div>



        <button id="submit_location" class="large pink btn icon-and-text position-left" type="button">
          Search
        </button>
      </form>
    </div>
  </div>





  <!--<div style="min-width: 900px; top: 504px;" class="HomeFooter" id="Footer">
            <div style="width: 30%; float: left;">
                <a style="cursor: pointer; margin-left: 30%;" id="Header_ancLogo" href="/speakout">
                    <img style="margin-top: 5px;" src="/images/home/logoUpdated.png"></a></div>
            <script type="text/javascript">
                $(document).ready(function () {
                    $("#anc_story_hp").colorbox({ href: "/OurStory.aspx", width: "750px", height: "550px", scrolling: false, transition: "none" });
                    $("#anc_terms_hp").colorbox({ href: "/TermAndConditions.aspx", width: "750px", height: "550px", scrolling: false, transition: "none" });
                });

            </script>
            <div style="padding-bottom: 0px; padding-top: 0px; float: right;
                text-align: right; width: 70%; margin-top: 14px;" class="footer_left">
                <ul style="margin-top: 15px;" class="socialFooter">
                    <li style=" padding-left: 0; position: relative; border-right: none;">
                        <a href="/ourstory" class="anc_story_hp" id="" style="cursor: pointer;">
                        <span style="font-size: 14px; font-family: marvel;">Our Story &nbsp;</span></a>
                             </li>
                    <li style="border: none; position: relative;">



                    <a href="javascript:window.open('http://twitter.com/','mywindow1','width=1150,height=450,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,directories=yes'); history.forward() ">
                        <img align="absmiddle" onmouseout="remove_Hover_img(this,'HP_twitter_normal_djilep','HP_twitter_hover_gtbzum');" onmouseover="add_Hover_img(this,'HP_twitter_hover_gtbzum','HP_twitter_normal_djilep');" class="HP_twitter_normal_djilep" src="/images/img_trans.gif"></a>
                       <a href="javascript:window.open('http://facebook.com/','mywindow2','width=1150,height=450,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,directories=yes'); history.forward() ">
                            <img align="absmiddle" style="width: 22px; height: 22px; padding-left: 4px; padding-right: 4px;" onmouseout="remove_Hover_imgfb(this,'HP_facebook_normal.png');" onmouseover="add_Hover_imgfb(this,'HP_facebook_hover.png');" src="/images/HP_facebook_normal.png"></a>
                      <a href="javascript:window.open('http://.tumblr.com','mywindow3','width=1150,height=450,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,directories=yes'); history.forward()">
                            <img align="absmiddle" onmouseout="remove_Hover_img(this,'HP_rss_normal_z1ayrk','HP_rss_hover_vlhyaq');" onmouseover="add_Hover_img(this,'HP_rss_hover_vlhyaq','HP_rss_normal_z1ayrk');" class="HP_rss_normal_z1ayrk" src="/images/img_trans.gif"></a>


                    </li>
                    <li style="font-family: marvel; margin-right: 10%; border: none;
                        font-size: 14px" class="allrights"><span style="padding-left:5px;">All Rights Reserved IBRIDGE DIGITAL 2016</span></li>
                </ul>
                <p>
                </p>
            </div>
        </div>-->
  <!--<footer class="site-footer">
    <div class="footer-content cf">

       <div style="min-width: 900px; top:10px;" class="HomeFooter" id="Footer">
            <div style="width: 30%; float: left;">
                <a style="cursor: pointer; margin-left: 30%;" id="Header_ancLogo" href="">
                    <img style="margin-top: 5px; width: 163px;" src="img/logo.png"></a></div>

            <div style="padding-bottom: 0px; padding-top: 0px; float: right;  color: #414141;
                text-align: right; width: 70%; margin-top: 14px;" class="footer_left">
                <ul style="margin-top: 15px;" class="socialFooter">
                    <li style=" padding-left: 0; position: relative; border-right: none;">
                        <a href="/ourstory" class="anc_story_hp" id="" style="cursor: pointer;">
                        <span style="font-size: 14px; font-family: marvel;">Our Story &nbsp;</span></a>
                             </li>
                    <li style="border: none; position: relative;">



                    <a href="javascript:window.open('http://twitter.com/','mywindow1','width=1150,height=450,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,directories=yes'); history.forward() ">
                        <img align="absmiddle" onmouseout="remove_Hover_img(this,'HP_twitter_normal_djilep','HP_twitter_hover_gtbzum');" onmouseover="add_Hover_img(this,'HP_twitter_hover_gtbzum','HP_twitter_normal_djilep');" class="HP_twitter_normal_djilep" src="images/img_trans.gif"></a>
                       <a href="javascript:window.open('http://facebook.com/','mywindow2','width=1150,height=450,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,directories=yes'); history.forward() ">
                            <img align="absmiddle" style="width: 22px; height: 22px; padding-left: 4px; padding-right: 4px;" onmouseout="remove_Hover_imgfb(this,'HP_facebook_normal.png');" onmouseover="add_Hover_imgfb(this,'HP_facebook_hover.png');" src="images/HP_facebook_normal.png"></a>
                      <a href="javascript:window.open('#','mywindow3','width=1150,height=450,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,directories=yes'); history.forward()">
                            <img align="absmiddle" onmouseout="remove_Hover_img(this,'HP_rss_normal_z1ayrk','HP_rss_hover_vlhyaq');" onmouseover="add_Hover_img(this,'HP_rss_hover_vlhyaq','HP_rss_normal_z1ayrk');" class="HP_rss_normal_z1ayrk" src="images/img_trans.gif"></a>


                    </li>
                    <li style="font-family: marvel; margin-right: 10%; border: none;
                        font-size: 14px" class="allrights"><span style="padding-left:5px;">All Rights Reserved IBRIDGE DIGITAL 2016</span></li>
                </ul>
                <p>
                </p>
            </div>
        </div>

      <a href="#top" class="back-to-top">Back to top</a> </div>

  </footer>-->

  <div id="footer_bottom">
  <div style="min-width: 900px; top:10px;" class="HomeFooter" id="Footer">
            <div style="width: 30%; float: left;">
                <a style="cursor: pointer; margin-left: 30%;" id="Header_ancLogo" href="">
                    <img style="margin-top: 5px; width: 163px;" src="images/logo.png"></a></div>

            <div style="padding-bottom: 0px; padding-top: 0px; float: right;  color: #414141;
                text-align: right; width: 70%; margin-top: 14px;" class="footer_left">
                <ul style="margin-top: 15px;" class="socialFooter">
                    <li style=" padding-left: 0; position: relative; border-right: none;">
                        <a href="/ourstory" class="anc_story_hp" id="" style="cursor: pointer;">
                        <span style="font-size: 14px; font-family: marvel;">Our Story1 &nbsp;</span></a>
                             </li>
                    <li style="border: none; position: relative;">



                    <a href="javascript:window.open('http://twitter.com/','mywindow1','width=1150,height=450,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,directories=yes'); history.forward() ">
                        <img align="absmiddle" onmouseout="remove_Hover_img(this,'HP_twitter_normal_djilep','HP_twitter_hover_gtbzum');" onmouseover="add_Hover_img(this,'HP_twitter_hover_gtbzum','HP_twitter_normal_djilep');" class="HP_twitter_normal_djilep" src="images/img_trans.gif"></a>
                       <a href="javascript:window.open('http://facebook.com/','mywindow2','width=1150,height=450,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,directories=yes'); history.forward() ">
                            <img align="absmiddle" style="width: 22px; height: 22px; padding-left: 4px; padding-right: 4px;" onmouseout="remove_Hover_imgfb(this,'HP_facebook_normal.png');" onmouseover="add_Hover_imgfb(this,'HP_facebook_hover.png');" src="images/HP_facebook_normal.png"></a>
                      <a href="javascript:window.open('#','mywindow3','width=1150,height=450,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes,directories=yes'); history.forward()">
                            <img align="absmiddle" onmouseout="remove_Hover_img(this,'HP_rss_normal_z1ayrk','HP_rss_hover_vlhyaq');" onmouseover="add_Hover_img(this,'HP_rss_hover_vlhyaq','HP_rss_normal_z1ayrk');" class="HP_rss_normal_z1ayrk" src="images/img_trans.gif"></a>


                    </li>
                    <li style="font-family: marvel; margin-right: 10%; border: none;
                        font-size: 14px" class="allrights"><span style="padding-left:5px;">All Rights Reserved IBRIDGE DIGITAL 2016</span></li>
                </ul>
                <p>
                </p>
            </div>
        </div>

  </div>
  <a href="#" class="mobile-overlay"></a> </div>


<div class="overlay">
  <div class="overlay-content-holder"> <a href="#" class="overlay-close-btn">X</a>
    <div class="overlay-content"></div>
  </div>
</div>

</body>
</html>
 <script src="js/jquery.backstretch.js" type="text/javascript"></script>

    <script>

        $.backstretch(["/images/Movie_Color_1.jpg",

"/images/Movie_Color_2.jpg"

, "/images/Movie_Color_3.jpg"

, "/images/Movie_Color_4.jpg"

], { duration: 7000, fade: 3000 });



    </script>

 <script type="text/javascript">

          function add_Hover_img(ele, imgHover, imgnormal) {

              $(ele).removeClass(imgnormal);

              $(ele).addClass(imgHover);

              //  $(ele).attr("src", "/images/" + imgname);





          }

          function remove_Hover_img(ele, imgnormal, imgHover) {



              //   $(ele).attr("src", "/images/" + imgname);

              $(ele).removeClass(imgHover);

              $(ele).addClass(imgnormal);

          }



          function add_Hover_imgfb(ele, imgnormal) {



              $(ele).attr("src", "images/" + imgnormal);





          }

          function remove_Hover_imgfb(ele, imgnormal) {



               $(ele).attr("src", "images/" + imgnormal);



          }



        </script>


