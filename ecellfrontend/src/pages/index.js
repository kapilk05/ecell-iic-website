// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1.0 maximum-scale=1,user-scalable=no"
//     />
//     <link
//       rel="stylesheet"
//       href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
//     />
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
//     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
//     <link rel="stylesheet" href="css/global.css" />
//     <link rel="stylesheet" href="css/style.css" />
//     <link rel="stylesheet" href="css/hover.css" />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700&display=swap"
//       rel="stylesheet"
//     />
//     <link
//       rel="stylesheet"
//       href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
//       integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
//       crossorigin="anonymous"
//     />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
//       integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA=="
//       crossorigin="anonymous"
//     />
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
//     />
//     <link
//       href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css"
//       rel="stylesheet"
//     />

//     <!-- For counter animation  -->
//     <link
//       href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
//       rel="stylesheet"
//       id="bootstrap-css"
//     />
//     <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
//     <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//     <!-- <script src="/Users/apple/Desktop/dj-ecell/js/counter.js"></script> -->

//     <!-- counter animation end -->

//     <script
//       src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//       integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
//       integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
//       integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
//       crossorigin="anonymous"
//     ></script>
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//     <script src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script>
//     <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
//     <script src="https://use.fontawesome.com/314c24a530.js"></script>
//     <title>DJ-Ecell</title>
//   </head>
import React, { Component } from 'react'
import '../style.css';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import $ from 'jquery';

export class Landing extends Component {
  componentDidMount() {

    <script>

      $(window).scroll(function () {
        $("nav").toggleclassName("scrolled", $(this).scrollTop() > 20);
          $("nav").toggleclassName("navbar-dark", $(this).scrollTop() <= 20);
          $("nav").toggleclassName("navbar-light", $(this).scrollTop() > 20);
        });

        mapboxgl.accessToken =
          "pk.eyJ1Ijoic2Fha3NoaXNoYWgiLCJhIjoiY2tjMzBhd2p2MjI1NjJybmFlazh6Y2RudCJ9.MhchJI1OMSvcS4v_N354FQ";
        var map = new mapboxgl.Map({
        container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: [72.837424, 19.108731],
          zoom: 12.5,
        });
        // disable map zoom when using scroll
        map.scrollZoom.disable();
        var marker = new mapboxgl.Marker()
          .setLngLat([72.837424, 19.108731])
          .addTo(map);

        function showForm() {
        document.getElementById("idea_submission").style.display = "block";
          $("html,body").animate(
            {
        scrollTop: $("#idea_submission").offset().top,
            },
            100
          );
        }

        function showStudent() {
        document.getElementById("studentInfo").style.display = "flex";
          document.getElementById("No").onclick = function () {
        document.getElementById("studentInfo").style.display = "none";
          };
        }

        $("#submit_idea").click(function (event) {
        event.preventDefault();
          console.log("hi");
          $(".toast").addclassName("show");
          setTimeout(() => {
        $(".toast").removeclassName("show");
          }, 5000);
          console.log("bye");
        });

        filterSelection("all"); // Execute the function and show all columns
        function filterSelection(c) {
          var x, i;
          x = document.getElementsByclassNameName("card-container");
          if (c == "all") c = "";
          // Add the "show" className (display:block) to the filtered elements, and remove the "show" className from the elements that are not selected
          for (i = 0; i < x.length; {
        w3RemoveclassName(x[i], "show_events");
            if (x[i].classNameName.indexOf(c) > -1) w3AddclassName(x[i], "show_events");
          }
        }

        // Show filtered elements
        function w3AddclassName(element, name) {
          var i, arr1, arr2;
          arr1 = element.classNameName.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; {
            if (arr1.indexOf(arr2[i]) == -1) {
        element.classNameName += " " + arr2[i];
            }
          }
        }

        // Hide elements that are not selected
        function w3RemoveclassName(element, name) {
          var i, arr1, arr2;
          arr1 = element.classNameName.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; {
            while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
          }
          element.classNameName = arr1.join(" ");
        }

        // Add active className to the current button (highlight it)
        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByclassNameName("btn");
        for (var i = 0; i < btns.length; {
        btns[i].addEventListener("click", function () {
          var current = document.getElementsByclassNameName("live");
          current[0].classNameName = current[0].classNameName.replace(" live", "");
          this.classNameName += " live";
        });
        }

      <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
    </script >

  }
  render() {
    return (
      <body data-spy="scroll" data-target="#navbar">
        <nav id="navbar" className="navbar navbar-expand-xl navbar-dark sticky-top">
          <a className="nav-link logo logo-nav navbar-brand" href="#"
          ><img src="images/logo.png" alt="" /> DJSCE E-cell
      </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto nav-pills" id="navitems">
              {/* <a className="nav-link logo logo-nav" href="#"
              ><img src="images/logo.png" alt="" />
              </a>
              <li className="nav-item brand-name">
                <a className="nav-link logo-nav" href="#">Ecell</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link hvr-underline-from-left" href="#aboutus"
                >About Us</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link hvr-underline-from-left" href="#features"
                >Get Started <span className="sr-only">(current)</span></a
                >
              </li>

              <li className="nav-item">
                <a className="nav-link hvr-underline-from-left" href="#startup"
                >Achievements</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link hvr-underline-from-left" href="#events"
                >Events</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link hvr-underline-from-left" href="partners.html"
                >Partners</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link hvr-underline-from-left" href="team.html"
                >Team</a
                >
              </li>
            </ul>
          </div>

          <a className="nav-btn hvr-icon-forward">
            Get in touch
      </a>
        </nav>

        {/* Video */}
        <div className="fullscreen-video-wrap">
          <video
            src="./video/startup.mp4"
            autoplay="true"
            loop="true"
            muted
          ></video>
        </div>
        <div className="header-overlay"></div>

        {/* Hero Section     */}
        <div className="v-header container">
          <div className="header-content text-md-center">
            <h1>
              The destination of innovation, the store house of ideas
        </h1>
            <p className="white-text">
              We are here to provide a healthy ecosystem to make your idea happen,
              to make you an entrepreneur
        </p>
            <a className="btn hvr-icon-forward">
              Launch your Startup
          <i className="zmdi zmdi-arrow-right hvr-icon"></i>
            </a>
          </div>
          <div className="arrow-symbol" style="z-index: 2;">
            <a href="#events">
              <i className="fa fa-angle-down fa-5x" style="color: #fff;"></i>
            </a>
          </div>
        </div>

        {/* Main content    */}
        <main>
          {/* About    */}
          <div id="aboutus" className="section-holder container">
            {/* Intro  */}
            <h1 className="blue-text">About us</h1>

            <div className="row intro-sec" style="justify-content: space-around;">
              <div className="col-md-5 intro" style="text-align: left;">
                <h2>We help convert ideas to startups.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                  omnis ipsa numquam inventore aperiam facere odit molestias nulla
                  non ipsam?
            </p>
                <a href="about.html" className="hvr-icon-forward">
                  Read More
              <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                </a>
              </div>
              <div className="col-md-4">
                <div className="img-container">
                  {/* <img src="./images/mission_vision.jpg" className="mission_vision" />&nbsp; */}
                </div>
              </div>
            </div>

            {/* Counter   */}
            <div className="container counter">
              <div className="b-section black bp-0">
                <div className="b-container">
                  <div className="b-3-col">
                    <div className="b-meta-container">
                      <div className="b-meta grey"></div>
                      <div className="b-meta-line grey">At DJ-ECELL</div>
                    </div>
                  </div>
                  <div className="b-8-col">
                    <h2 className="b-h1 grey counter-heading" style="font-weight: 300;">
                      We Are Growing Quickly
                </h2>
                    {/* <p className="b-large-type-block grey">
                      DJ-ECELL is for creative and passionate students to make an
                      impact and transform the world.
                      </p>  */}
                    <div className="container iconcont">
                      <div className="b-8-col numbers-container row">
                        <div className="col-md-3 home---about-stat-wrapper">
                          <div className="home---about-vertical-blue-line"></div>
                          <div className="home---about-stat-text-box">
                            <i className="fab fa-instagram" id="allicon"></i>
                            <div className="item-animate">
                              <h2 className="counteranimation2">0</h2>
                            </div>

                            <div className="home---about-stat-icon-box">
                              <p className="home---about-stat-icon-text">
                                Instagram Followers
                          </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 home---about-stat-wrapper">
                          <div className="home---about-vertical-blue-line"></div>
                          <div className="home---about-stat-text-box">
                            <i className="fab fa-facebook-f fab-lg" id="allicon"></i>
                            <div className="item-animate">
                              <h2 className="counteranimation4">0</h2>
                            </div>
                            <script>

                            </script>
                            <a
                              href="/for-deletion/videos-old"
                              className="home---about-stat-icon-box w-inline-block"
                            >
                              <p className="home---about-stat-icon-text">
                                Facebook Followers
                          </p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-3 home---about-stat-wrapper">
                          <div className="home---about-vertical-blue-line"></div>
                          <div className="home---about-stat-text-box">
                            <i className="fab fa-youtube" id="allicon"></i>
                            <div className="item-animate">
                              <h2 className="counteranimation3">0</h2>
                            </div>
                            <script>
                              $({
                                countNum: $(".counteranimation3").html(),
                          }).animate(
                            {countNum: 100 },
                            {
                                duration: 4000,
                              easing: "linear",
                              step: function () {
                                $(".counteranimation3").html(
                                  Math.floor(this.countNum) + "+"
                                );
                              },
                              complete: function () {
                                $(".counteranimation3").html(
                                  this.countNum + "+"
                                );
                              },
                            }
                          );
                        </script>
                            <a
                              href="http://academy.thefutur.com"
                              target="_blank"
                              className="home---about-stat-icon-box w-inline-block"
                            >
                              <p className="home---about-stat-icon-text">
                                YouTube Subscribers
                          </p>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-3 home---about-stat-wrapper">
                          <div className="home---about-stat-text-box">
                            <i className="fab fa-linkedin" id="allicon"></i>
                            <div className="item-animate">
                              <h2 className="counteranimation1">0</h2>
                            </div>
                            <script>
                              $({
                                countNum: $(".counteranimation1").html(),
                          }).animate(
                            {countNum: 40 },
                            {
                                duration: 4000,
                              easing: "linear",
                              step: function () {
                                $(".counteranimation1").html(
                                  Math.floor(this.countNum) + "+"
                                );
                              },
                              complete: function () {
                                $(".counteranimation1").html(
                                  this.countNum + "+"
                                );
                              },
                            }
                          );
                        </script>

                            <a
                              href="https://www.youtube.com/thefuturishere"
                              target="_blank"
                              className="home---about-stat-icon-box w-inline-block"
                            >
                              <p className="home---about-stat-icon-text">
                                LinkedIn Connection
                          </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started     */}
          <div id="features">
            <div className="container text-md-center section-holder">
              <h1 className="blue-text">Get Started</h1>
              <div className="row">
                <div className="feature col-lg-4 purple">
                  <span className="circle">
                    <ion-icon name="school-outline"></ion-icon>
                  </span>
                  <h4>Mentorship</h4>
                  <p>
                    CloudCheckr provides summary and detailed usage statistics for
                    resources.
              </p>
                </div>
                <div className="feature col-lg-4 blue">
                  <span className="circle">
                    <ion-icon name="construct-outline"></ion-icon>
                  </span>
                  <h4>Technical Assistance</h4>
                  <p>
                    CloudCheckr provides summary and detailed usage statistics for
                    resources.
              </p>
                </div>
                <div className="feature col-lg-4 green">
                  <span className="circle">
                    <span
                      className="iconify"
                      data-icon="la:piggy-bank-solid"
                      data-inline="false"
                    ></span>
                  </span>
                  <h4>VCs & Angel Network</h4>
                  <p>
                    CloudCheckr provides summary and detailed usage statistics for
                    resources.
              </p>
                </div>
                <div className="feature col-lg-4 yellow">
                  <span className="circle">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </span>
                  <h4>Accelerators & Incubator</h4>
                  <p>
                    CloudCheckr provides summary and detailed usage statistics for
                    resources.
              </p>
                </div>
                <div className="feature col-lg-4 red">
                  <span className="circle">
                    <ion-icon name="trending-up-outline"></ion-icon>
                  </span>
                  <h4>Market Advisory</h4>
                  <p>
                    CloudCheckr provides summary and detailed usage statistics for
                    resources.
              </p>
                </div>
              </div>
            </div>
            {/* Get Started */}
            <div className="wrapper">
              <div className="main container section-holder">
                <h4>Have a business idea?</h4>
                <h1 className="cta">Launch your startup!</h1>
                <button className="btn hvr-icon-forward" onclick="showForm()">
                  Get Started
              <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                </button>
                {/* Flexbox container for aligning the toasts  */}
                <div className="container">
                  <div className="toast mt-3">
                    <div className="toast-header">
                      Toast Header
                </div>
                    <div className="toast-body">
                      Some text inside the toast body
                </div>
                  </div>
                </div>

                {/* Idea Submission Form     */}
                <div className="container" id="idea_submission">
                  <div className="row">
                    <div className="col-md-2"></div>

                    <div className="col-md-8 idea_form">
                      <h1>Submit your Idea</h1>
                      <label for="name">Full Name</label>
                      <input name="name" type="text" id="name" /><br />
                      <div className="row">
                        <div className="col-md-6">
                          <label for="email">Email</label>
                          <input
                            name="email"
                            type="email"
                            id="email"
                            required
                          /><br />
                        </div>
                        <div className="col-md-6">
                          <label for="contact">Contact Number</label>
                          <input name="contact" type="tel" id="contact" /><br />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 radioStudent">
                          Are you a student?<br />
                          <div className="radioButton">
                            <input
                              type="radio"
                              id="male"
                              name="student"
                              value="Yes"
                              onclick="showStudent();"
                            />
                            <label for="Yes">Yes</label><br />
                            <input type="radio" id="No" name="student" value="No" />
                            <label for="No">No</label><br />
                          </div>
                        </div>
                        <div className="col-md-6 radioBusiness">
                          Type of business
                      <select id="business" name="business">
                            <option value="Sole Proprietorship" selected
                            >Sole Proprietorship</option
                            ><br />
                            <option value="Partnership">Partnership</option
                            ><br /> </select
                          ><br />
                        </div>
                      </div>
                      <div className="row" id="studentInfo">
                        <div className="col-md-6">
                          <select id="stream" name="stream">
                            <option value="CSE" selected>CSE</option
                            ><br />
                            <option value="Computer">Computer</option
                            ><br />
                            <option value="IT">IT </option
                            ><br />
                            <option value="EXTC">EXTC</option
                            ><br />
                            <option value="Electronics">Electronics </option
                            ><br />
                            <option value="Chemical">Chemical</option
                            ><br />
                            <option value="Mechanical">Mechanical</option
                            ><br /> </select
                          ><br />
                        </div>
                        <div className="col-md-6">
                          <select id="year" name="year">
                            <option value="FE" selected>FE</option
                            ><br />
                            <option value="SE">SE</option
                            ><br />
                            <option value="TE">TE</option
                            ><br />
                            <option value="BE">BE </option
                            ><br /> </select
                          ><br />
                        </div>
                      </div>
                      <textarea
                        rows="4"
                        cols="72"
                        name="idea"
                        form="idea"
                        placeholder="Tell us about your idea!"
                      ></textarea>
                      <button
                        className="btn"
                        type="submit"
                        id="submit_idea"
                        style="margin-top: 10px;"
                      >
                        Submit
                  </button>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Startups */}
          <div className="container section-holder" id="startup">
            <h1 className="">Startups</h1>
            <div className="row" id="card_display">
              <div className="col-md-3" id="column_startup">
                <img className="startup_holder" src="./images/clofactory.png" />

                <p>
                  The vision of Clofactory is to revolutionize the clothing
                  industry, from the traditional retail model. Clofactory stands to
                  deliver a seamless shirting experience with shirts that are
                  tailored to fit and premium fabrics to go with them.The company is
                  involved in the manufacture of other textiles.
            </p>
                <a href="#" className="peach-text startup_more">Read More</a>
              </div>
              <div className="col-md-3" id="column_startup">
                <img className="startup_holder" src="../images/wearthreads.jpg" />

                <p>
                  We are into sustainable clothing, we make t-shirts from recycled
                  plastic bottles. Our main aim is to reduce the amount of plastic
                  in the environment. So, we put it to a great use, we make garments
                  out of it which are 100% safe and hygienic to wear. One t-shirt
                  recycles 15 plastic bottles.
            </p>
                <a href="#" className="peach-text startup_more">Read More</a>
              </div>
              <div className="col-md-3" id="column_startup">
                <img className="startup_holder" src="../images/D-webbox.jpeg" />

                <p>
                  We inspire Dreams, build Designs, create Digitization and
                  celebrate success. We are an agency where success isn’t defined by
                  how much we bill or how fast we grow, but by our ability to
                  produce exceptional work and build genuine partnerships with our
                  clients. We keep things lean & simple.
            </p>
                <a href="#" className="peach-text startup_more">Read More</a>
              </div>
            </div>
          </div>

          {/* Events     */}
          <div id="events" className="section-holder">
            <h1 className="">Events</h1>
            <div className="btn-wrapper">
              <div id="myBtnContainer">
                <p className="my-btn btn-active" onclick="filterSelection('all')">
                  Show all
            </p>
                <p className="my-btn" onclick="filterSelection('2019-20')">
                  2019-20
            </p>
                <p className="my-btn" onclick="filterSelection('2018-19')">
                  2018-19
            </p>
              </div>
            </div>
            <div className="cards">
              <div className="card-container 2019-20">
                <div className="card">
                  <div
                    className="img-holder"
                    style="background-image: url(../images/Genesis/event_img.jpg);"
                  ></div>
                  <div className="content">
                    <h3>Genesis</h3>
                    <p>
                      An interactive session conducted by a well known digital
                      content creator Viraj Ghelani.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2019-20">
                <div className="card">
                  <div
                    className="img-holder"
                    style="
                  background-image: url(../images/pythonWorkshop/event_img.jpg);
                "
                  ></div>
                  <div className="content">
                    <h3>Python Workshop</h3>
                    <p>
                      Informative session addressed by Jinesh Doshi and Nimesh Bumb
                      from 'Masterbridge'.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2019-20">
                <div className="card">
                  <div
                    className="img-holder"
                    style="background-image: url(../images/DJTalks/event_img.jpg);"
                  ></div>
                  <div className="content">
                    <h3>DJ Talks</h3>
                    <p>
                      Synergistic discussion held by Gaurav Jain,Founding member of
                      XBillion Skillz Lab and Shronit Ladhani CEO of  CareerNinja.
                </p>
                    <a href="gallery.html" className="hvr-icon-forward" target="_blank">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2019-20">
                <div className="card">
                  <div
                    className="img-holder"
                    style="background-image: url(../images/bcw/event_img.png);"
                  ></div>
                  <div className="content">
                    <h3>Business Canvas Workshop</h3>
                    <p>
                      Guidance on businesss canvas model given by a PhD
                      entrepreneur, Dr.Indira Singh.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2019-20">
                <div className="card">
                  <div
                    className="img-holder"
                    style="
                  background-image: url(../images/facultyMeetup/event_img.jpg);
                "
                  ></div>
                  <div className="content">
                    <h3>Faculty Meetup</h3>
                    <p>
                      Meeting organised to convert SIH ideas and project into a full
                      fledged startup.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2019-20">
                <div className="card">
                  <div
                    className="img-holder"
                    style="
                  background-image: url(../images/financialPlanning/event_img.jpg);
                "
                  ></div>
                  <div className="content">
                    <h3>Financial Advisory</h3>
                    <p>
                      Seminar regarding financial planning for students carried out
                      by Alpa Shah,TEDxGateway speaker.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2019-20">
                <div className="card">
                  <div
                    className="img-holder"
                    style="background-image: url(../images/rushHour/event_img.jpg);"
                  ></div>
                  <div className="content">
                    <h3>Rush Hour 2020</h3>
                    <p>
                      Committee's flagship event and an awaited sales competiton of
                      the year.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2018-19">
                <div className="card">
                  <div
                    className="img-holder"
                    style="
                  background-image: url(../images/IntroductionEvent/event_img.jpg);
                "
                  ></div>
                  <div className="content">
                    <h3>Introduction Event</h3>
                    <p>
                      Gyan Dhan had organized sessions for higher education
                      aspirants and was addressed by their own CEO,Ankit Mehra.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2018-19">
                <div className="card">
                  <div
                    className="img-holder"
                    style="
                  background-image: url(../images/MentorshipEvent/event_img.png);
                "
                  ></div>
                  <div className="content">
                    <h3>Mentorship Event</h3>
                    <p>
                      The mentor for the event was our college Alumni Shantanu
                      Baviskar who is the founder of venture Instafigures.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2018-19">
                <div className="card">
                  <div
                    className="img-holder"
                    style="
                  background-image: url(../images/PanelDiscussion/event_img.png);
                "
                  ></div>
                  <div className="content">
                    <h3>Discussion Panel</h3>
                    <p>
                      The panel members for the event was Shantanu Baviskar and our
                      college visiting faculty for Biomedical Department Sreejit
                      Pillai Sir.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-container 2018-19">
                <div className="card">
                  <div
                    className="img-holder"
                    style="
                  background-image: url(../images/RedbullEvent/event_img.png);
                "
                  ></div>
                  <div className="content">
                    <h3>RedBull Event</h3>
                    <p>
                      Hacking for a Brighter Campus,Red Bull Basement connects the
                      next generation of innovators to turn forward thinking
                      solutions into reality.
                </p>
                    <a href="#" className="hvr-icon-forward">
                      Read More
                  <i className="zmdi zmdi-arrow-right hvr-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form   */}
          <div className="container-contact">
            <h1 className="" style="text-align: center;">Contact Us</h1>
            <div className="row map">
              <div className="col-md-6 col-sm-12 map">
                <div id="map"></div>
              </div>
              <div className="col-md-6 col-sm-12" style="background-color: #faf0e6;">
                <h1 className="blue-text">Contact Us</h1>

                <form name="e-cell" id="idea">
                  <div className="col-md-12">
                    <label for="name"> Full Name</label>
                    <input name="name" type="text" id="name" /><br />
                  </div>
                  <div className="col-md-12">
                    <label for="email">Email</label>
                    <input name="email" type="email" id="email" required /><br />
                  </div>
                  <div className="col-md-12">
                    <label for="message">Message</label>
                    <textarea
                      rows="4"
                      cols="100"
                      name="idea"
                      form="idea"
                      id="message"
                    ></textarea>
                  </div>
                  <div className="submit_form" style="text-align: center;">
                    <button
                      className="primary"
                      type="submit"
                      style="margin-top: 30px; margin-bottom: 30px;"
                    >
                      Send
                </button>
                  </div>
                  <div className="location">
                    <h3>Find Us</h3>
                    <h4>Location</h4>
                    <p>
                      Dwarkadas J Sanghvi,<br />
                  Gulmohar Road, J. V. P. D. Scheme,<br />
                  Vile Parle(W), Mumbai
                </p>
                    <h4>Email</h4>
                    <p>ecell.djsce@gmail.com</p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="container newfooter">
            <div id="logocomp">
              <div>
                <a href="#">
                  <img src="./images/logo.png" id="logofooter" />
                </a>
              </div>

              <div className="nav-link logo logo-nav navbar-brand">
                DJSCE E-CELL
          </div>
            </div>

            <div className="row newfooter">
              <div><i className="fab fa-youtube" id="footicon"></i></div>
              <div><i className="fab fa-facebook-f fab-lg" id="footicon"></i></div>
              <div><i className="fab fa-instagram" id="footicon"></i></div>
              <div><i className="fab fa-linkedin" id="footicon"></i></div>
            </div>
            <div id="takeup">
              <a href="#"><ion-icon name="arrow-up-outline"></ion-icon> </a>
            </div>
          </div>
          <script src="js/nav.js"></script>

          <!-- script for counter  -->

      <!-- end script for counter -->



        </main>
      </body>
    )
  }
}
export default Landing;


