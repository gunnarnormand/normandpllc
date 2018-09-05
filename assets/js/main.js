// front page animations module
var FrontPageAnimationsModule = function () {
  var $scrollContainer = document.querySelector('.scroll-container');
  function frontPageLoadingAnimation() {
    // findShapeIndex("#", "#");
    MorphSVGPlugin.convertToPath("#polyFirst");
    MorphSVGPlugin.convertToPath("#polySecond");
    MorphSVGPlugin.convertToPath("#polyThird");
    MorphSVGPlugin.convertToPath("#polyFourth");
    var frontLoaderTl = new TimelineMax({ repeat: 0, smoothChildTiming: true });
    var frontLoaderTl1 = new TimelineMax({ repeat: -1, yoyo: true, smoothChildTiming: true });
    var frontLoaderTl2 = new TimelineMax({ repeat: -1, yoyo: true, smoothChildTiming: true });
    frontLoaderTl.to(".determinate", 1, { width: "100%", ease: Sine.easeIn }).to(".front-loader-wrap", .25, { height: "0%", opacity: 0, ease: Sine.easeOut }).to("#frontLoader", .25, { opacity: 0, display: "none", ease: Sine.easeOut });
    frontLoaderTl1.to("#polyFirst", .5, { morphSVG: { shape: "#polySecond", shapeIndex: 0 }, ease: Sine.easeInOut }).to("#polyFirst", .5, { morphSVG: { shape: "#polyFirst", shapeIndex: "auto" }, fill: "#939b5f", ease: Sine.easeInOut });
    frontLoaderTl2.to("#polyThird", .5, { morphSVG: { shape: "#polyFourth", shapeIndex: 0 }, fill: "#4c6451", ease: Sine.easeInOut }).to("#polyThird", .5, { morphSVG: { shape: "#polyThird", shapeIndex: "auto" }, ease: Sine.easeInOut });
  }
  function frontPageStartScrollingAnimation() {
    var startScrollingTextTl = new TimelineMax({ repeat: -1, repeatDelay: 0, smoothChildTiming: true });
    var startScrollSplitText = new SplitText("#scrollIndicatorText", { type: "words,chars" });
    TweenLite.set("#scrollIndicatorText", { perspective: 400 });
    startScrollingTextTl.staggerFrom(startScrollSplitText.chars, 1, { opacity: 0, scale: 0, yPercent: -100, transformOrigin: "0% 50% -50", ease: Back.easeOut }, 0.01, "+=0");
    startScrollingTextTl.staggerTo(startScrollSplitText.chars, 1, { opacity: 0, scale: 0, yPercent: 100, transformOrigin: "0% 50% -50", ease: Back.easeOut }, 0.01, "+=0");
    startScrollingTextTl.fromTo("#scrollArrow", 1, { yPercent: -100, opacity: 0, force3D: true }, { yPercent: 0, opacity: 1, force3D: true, ease: Sine.easeOut }, "+=0");
    startScrollingTextTl.to("#scrollArrow", 1, { yPercent: 100, opacity: 0, force3D: true, ease: Back.easeOut }, "+=0");

    $(window).scroll(function () {
      if ($(this).scrollTop() <= 64) {
        // console.log('show scroll indicator!');
        TweenMax.to('.scroll-indicator-wrap', .25, { opacity: 1, ease: Circ.easeOut });
      } else {
        // console.log('go away scroll indicator!');
        TweenMax.to('.scroll-indicator-wrap', .25, { opacity: 0, ease: Circ.easeOut });
      }
    });
  }
  function frontPageMainAnimation() {
    var motionPath = MorphSVGPlugin.pathDataToBezier("#path");
    var mySplitText = new SplitText("#quote", { type: "lines" });
    var mySplitText2 = new SplitText("#lead", { type: "lines" });
    TweenMax.set("#quote", { perspective: 400 });
    if (window.innerWidth >= 768) {
      TweenMax.set("#mainForestBgSmall", { display: 'none' });
      TweenMax.set("#mainForestBg", { display: 'block' });
      var tl = new TimelineMax({
        delay: 0,
        smoothChildTiming: true
      }).from("#arrow", 1, { bezier: { force3D: true, values: motionPath, type: "cubic", autoRotate: true, ease: Linear.easeNone } }, "start").staggerFrom(mySplitText.lines, 1, { force3D: true, opacity: 0, scale: 0.8, yPercent: 400, transformOrigin: "0% 50% -50", ease: Linear.easeNone }, .2, "start-=.1").from("#mainForestBg", 1, { force3D: true, opacity: 0, ease: Back.easeOut.config(1) }, "start-=.1").from("#background", 1, { force3D: true, yPercent: -100, opacity: 0, ease: Power3.easeOut }, "start-=.1").from("#hill", 1.2, { force3D: true, xPercent: 100, ease: Back.easeOut.config(1) }, "start-=.1").from("#grass", .8, { force3D: true, yPercent: 100, ease: Back.easeOut.config(2) }, "start-=.1").from("#tree1", 1, { force3D: true, yPercent: 100, ease: Back.easeOut.config(2) }, "start").from("#tree2", .5, { force3D: true, yPercent: 100, ease: Back.easeOut.config(2) }, "start").from("#tree3", 1.1, { force3D: true, yPercent: 50, ease: Back.easeOut.config(2) }, "start").staggerTo(mySplitText.lines, 1, { force3D: true, opacity: 0, scale: 0.8, yPercent: -400, transformOrigin: "0% 50% -50", ease: Power1.easeOut }, .2, "end").to("#arrow", 1, { force3D: true, opacity: 0, ease: Linear.easeNone }, "end").staggerFrom(mySplitText2.lines, 1, { force3D: true, opacity: 0, scale: 0.8, yPercent: 400, transformOrigin: "0% 50% -50", ease: Linear.easeNone }, .2, "end+=.5").staggerTo(mySplitText2.lines, 1, { force3D: true, opacity: 0, scale: 0.8, yPercent: -400, transformOrigin: "0% 50% -50", ease: Power1.easeOut }, .2, "end+=1.8").to("#hill", 0.5, { opacity: 0, ease: Back.easeOut.config(1) }, "end+=1.8").to("#grass", 0.8, { opacity: 0, ease: Back.easeOut.config(1) }, "end+=1.8").to("#tree1", 0.5, { opacity: 0, ease: Power1.easeOut }, "end+=1.8").to("#tree2", 0.8, { opacity: 0, ease: Power1.easeOut }, "end+=1.8").to("#tree3", 0.5, { opacity: 0, ease: Power1.easeOut }, "end+=1.8").to("#background", 1, { force3D: true, yPercent: 100, opacity: 0, ease: Power3.easeOut }, "end+=1.8").to(".holder", 0.5, { backgroundColor: 'transparent', ease: Power3.easeOut }, "end+=1.8").to("nav", .25, { backgroundColor: 'rgba(77, 99, 80, 0.8)', boxShadow: '0 3px 5px -1px rgba(0, 0, 0, 0.3)', ease: Sine.easeInOut }, "end+=2.5").to(".holder", 0, { opacity: 0, display: "none", ease: Circ.easeIn }).to(".scroll-container", 0, { opacity: 0, visibility: "none", ease: Circ.easeIn }).pause();
      window.addEventListener("scroll", function () {
        var distanceScrolledPercent = window.pageYOffset / ($(".scroll-container").innerHeight() - window.innerHeight);
        var seekTo = distanceScrolledPercent * tl.totalDuration() * 0.8;
        //console.log(seekTo);
        tl.seek(seekTo);
        if (tl.progress() == 0) {
          TweenMax.set('#arrow', { opacity: 0 });
        } else if (tl.progress() <= .25) {
          // console.log(tl.progress() )
          TweenMax.set('#arrow', { opacity: 1 });
        } else {
          TweenMax.set('#arrow', { opacity: 0 });
        }
      });
    } else {
      TweenMax.set("#mainForestBg", { display: 'none' });
      TweenMax.set("#mainForestBgSmall", { display: 'block' });
      TweenMax.set("#arrow", { opacity: 0 });
      var tlSmall = new TimelineMax({
        delay: 0,
        smoothChildTiming: true
      }).to("#arrow", .25, { opacity: 1, ease: Linear.easeNone }, "startSmall").to(".holder", 1, { backgroundColor: '#829184', ease: Linear.easeNone }, "startSmall").from("#arrow", 2, { bezier: { values: motionPath, type: "cubic", autoRotate: true, ease: Linear.easeNone } }, "startSmall").staggerFrom(mySplitText.lines, 1, { force3D: true, opacity: 0, scale: 0.8, yPercent: 400, transformOrigin: "0% 50% -50", ease: Linear.easeNone }, .2, "startSmall").from("#mainForestBgSmall", 1, { force3D: true, opacity: 0, ease: Linear.easeNone }, "startSmall").from("#backgroundSmall", 1, { force3D: true, yPercent: -100, opacity: 0, ease: Linear.easeNone }, "startSmall").from("#hillSmall", 1, { force3D: true, yPercent: 400, ease: Back.easeOut.config(1) }, "startSmall-=.15").from("#grassSmall", 1, { force3D: true, yPercent: 350, ease: Back.easeOut.config(1) }, "startSmall+=.15").from("#tree1Small", 1, { force3D: true, yPercent: 400, ease: Back.easeOut.config(1) }, "startSmall").from("#tree2Small", 1, { force3D: true, yPercent: 450, ease: Back.easeOut.config(1) }, "startSmall-=.15").from("#tree3Small", 1, { force3D: true, yPercent: 350, ease: Back.easeOut.config(1) }, "startSmall+=.2").staggerTo(mySplitText.lines, 0.5, { force3D: true, opacity: 0, scale: 0.8, yPercent: -400, transformOrigin: "0% 50% -50", ease: Circ.easeIn }, .15, "endSmall").to("#arrow", .25, { opacity: 0, ease: Linear.easeNone }, "endSmall").staggerFrom(mySplitText2.lines, 1.5, { force3D: true, opacity: 0, scale: 0.6, yPercent: 300, transformOrigin: "0% 50% -50", ease: Linear.easeNone }, .2, "endSmall+=1").to("#hillSmall", 1, { opacity: 0, ease: Back.easeOut.config(1) }, "endSmall+=1").to("#grassSmall", 1, { opacity: 0, ease: Back.easeOut.config(1) }, "endSmall+=1").to("#tree1Small", 1, { opacity: 0, ease: Linear.easeNone }, "endSmall+=1").to("#tree2Small", 1, { opacity: 0, ease: Linear.easeNone }, "endSmall+=1").to("#tree3Small", 1, { opacity: 0, ease: Linear.easeNone }, "endSmall+=1").to("#backgroundSmall", 1, { force3D: true, yPercent: 200, opacity: 0, ease: Linear.easeNone }, "endSmall+=1").staggerTo(mySplitText2.lines, 1, { force3D: true, opacity: 0, scale: 0.6, yPercent: -200, transformOrigin: "0% 50% -50", ease: Linear.easeNone }, .15, "endSmall+=2.5").to(".holder", 0.5, { backgroundColor: 'transparent', ease: Linear.easeNone }, "endSmall+=2.5").to("nav", .25, { backgroundColor: 'rgba(77, 99, 80, 0.8)', boxShadow: '0 3px 5px -1px rgba(0, 0, 0, 0.3)', ease: Sine.easeInOut }, "endSmall+=2.6").to(".holder", 0, { opacity: 0, display: "none", ease: Circ.easeIn }).to(".scroll-container", 0, { opacity: 0, visibility: "none", ease: Circ.easeIn }).pause();
      window.addEventListener("scroll", function () {
        var distanceScrolledPercentSm = window.pageYOffset / ($(".scroll-container").innerHeight() - window.innerHeight);
        var seekToSm = distanceScrolledPercentSm * tlSmall.totalDuration() * 0.95;
        tlSmall.seek(seekToSm);
        if (tlSmall.progress() == 0) {
          TweenMax.set('#arrow', { opacity: 0 });
        } else if (tlSmall.progress() <= .25) {
          // console.log(tl.progress() )
          TweenMax.set('#arrow', { opacity: 1 });
        } else {
          TweenMax.set('#arrow', { opacity: 0 });
        }
      });
    }
  }
  function init() {
    frontPageLoadingAnimation();
    frontPageStartScrollingAnimation();
    frontPageMainAnimation();

    if (window.innerWidth <= 992) {
      var menuButton = document.querySelector('.sidenav-trigger');
      menuButton.addEventListener('mouseenter', function () {
        TweenMax.to("a.sidenav-trigger.left", .25, { color: "rgba(146, 154, 94, 0.6)", ease: Sine.easeInOut });
        TweenMax.to("a.sidenav-trigger.left", .25, { textShadow: "1px 0px 0px rgba(255, 255, 255, 0.6)", ease: Sine.easeInOut });
      });
    }
    TweenMax.set("nav", { backgroundColor: "transparent" });
  }
  return {
    init: init
  };
}();

// google chart module
var GoogleChartModule = function () {
  function init() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawPieChart);
    function drawPieChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Lawyer Specialties');
      data.addColumn('number', 'Percentage');
      data.addRows([['Car Accidents', .25], ['Motorcycle Accident', .05], ['Medical Malpractice', .15], ['Personal Injury', .25], ['Wrongful Death', .15], ['Slip and Fall Accident', .15]]);
      // Set options
      var options = {
        title: 'Lawyer Specialties',
        width: 500,
        height: 300,
        colors: ['#08599B', '#0A6FC2', '#0C85E9', '#2196F3', '#51ABF6', '#77BEF8'],
        is3D: true
      };
      var chart = new google.visualization.PieChart(document.getElementById('pieChartDiv'));
      chart.draw(data, options);
    }
  }
  return {
    init: init
  };
}();

jQuery(document).ready(function($) {
  $('.sidenav').sidenav();
  $('.modal-trigger').leanModal();
  $('#privacy-modal').modal();
  $('#disclaimer-modal').modal();
  $('.parallax').parallax();
});

document.addEventListener('DOMContentLoaded', function() {
  // ScrollTo
  $('.cta-btn').on('click', function(e) {
    e.preventDefault();
    TweenLite.to(window, 1.25, {scrollTo:{y:'#contactForm', offsetY:54, x:0}, ease: Circ.easeOut});
  });
  if (window.innerWidth > 768) {
    $('#teamMore').on('click', function(e) {
      e.preventDefault();
      TweenLite.to(window, 1.25, {scrollTo:{y:'#team', offsetY:64, x:0}, ease: Circ.easeOut});
    });
    $('#nav-logo').on('mouseenter', function() {
      TweenMax.to(this, .5, {scale: .9, force3D:true, ease: Circ.easeOut});
    });
    $('#nav-logo').on('mouseleave', function() {
      TweenMax.to(this, .5, {scale: 1, force3D:true, ease: Circ.easeOut});
    });
    $('#nav-logo').on('click', function(e) {
      e.preventDefault();
      TweenLite.to(window, 1.25, {scrollTo:{y:0, x:0}, ease: Circ.easeOut});
    });
    $('.our-team-nav').on('click', function(e) {
      e.preventDefault();
      TweenLite.to(window, 1.25, {scrollTo:{y:'#team', offsetY:64, x:0}, ease: Circ.easeOut});
    });
  } else {
    $('#sidenavLogo').on('click', function(e) {
      e.preventDefault();
      TweenLite.to(window, 1.25, {scrollTo:{y:0, x:0}, ease: Circ.easeOut});
    });
    $('#teamMore').on('click', function(e) {
      e.preventDefault();
      TweenLite.to(window, 1.25, {scrollTo:{y:'#team', offsetY:54, x:0}, ease: Circ.easeOut});
    });
    TweenMax.set('#nav-logo', {autoAlpha:0, visibility:"hidden"});
    $('.side-nav-logo').on('click', function(e) {
      e.preventDefault();
      TweenLite.to(window, 1.25, {scrollTo:{y:0, x:0}, ease: Circ.easeOut});
    });
    $('.our-team-nav').on('click', function(e) {
      e.preventDefault();
      TweenLite.to(window, 1.25, {scrollTo:{y:'#team', offsetY:54, x:0}, ease: Circ.easeOut});
    });
  }
  FrontPageAnimationsModule.init();
  GoogleChartModule.init();
  var facebook = document.querySelectorAll('.facebook');
  var twitter = document.querySelectorAll('.twitter');
  var linkedin = document.querySelectorAll('.linkedin');
  facebook.forEach(function (icon) {
    return icon.addEventListener('mouseenter', function (e) {
      TweenMax.to('.facebook', .25, { scale: 1.3, opacity: 1, ease: Back.easeOut.config(2) });
    });
  });
  facebook.forEach(function (icon) {
    return icon.addEventListener('mouseleave', function (e) {
      TweenMax.to('.facebook', .25, { scale: 1, opacity: 0.6, ease: Back.easeOut.config(2) });
    });
  });
  twitter.forEach(function (icon) {
    return icon.addEventListener('mouseenter', function (e) {
      TweenMax.to('.twitter', .25, { scale: 1.3, opacity: 1, ease: Back.easeOut.config(2) });
    });
  });
  twitter.forEach(function (icon) {
    return icon.addEventListener('mouseleave', function (e) {
      TweenMax.to('.twitter', .25, { scale: 1, opacity: 0.6, ease: Back.easeOut.config(2) });
    });
  });
  linkedin.forEach(function (icon) {
    return icon.addEventListener('mouseenter', function (e) {
      TweenMax.to('.linkedin', .25, { scale: 1.3, opacity: 1, ease: Back.easeOut.config(2) });
    });
  });
  linkedin.forEach(function (icon) {
    return icon.addEventListener('mouseleave', function (e) {
      TweenMax.to('.linkedin', .25, { scale: 1, opacity: 0.6, ease: Back.easeOut.config(2) });
    });
  });
  //fade in targets
  var $fadeInTarget = document.querySelectorAll(".fade-in-target");
  for (var i = 0; i < $fadeInTarget.length; i++) {
    new Waypoint({
      element: $fadeInTarget[i],
      handler: function handler(direction) {
        if (direction == "down") {
          TweenMax.to(this.element, 1, { opacity: 1, ease: Circ.easeOut });
          TweenMax.from(this.element, 1, { yPercent: 25, ease: Circ.easeOut });
        } else if (direction == "up") {
          TweenMax.to(this.element, 0.5, { opacity: 0, ease: Circ.easeOut });
        }
      },
      offset: "80%"
    });
  }
  var avvoCardLoader = document.querySelector('#avvoCardLoader');
  new Waypoint({
    element: avvoCardLoader,
    handler: function handler(direction) {
      if (direction == "down") {
        setTimeout(function () {
          avvoCardLoader.classList.add('displaynone');
        }, 1000);
      }
    },
    offset: "80%"
  });
});
