/** Main project script */



// ensure the main object is defined
if (typeof(so) === 'undefined') {
  var so = {};
}

// main code
so.app = {
  init: function () {
      this.megaMenuTrigger();
      this.toggleNavigation();
      this.searchPopoverTrigger();
      this.megaMenuSearchTrigger();
      this.toggleSubNavigation();
      this.heroBannerSetHeight();
      this.heroBannerScroll();
      this.setupScrollHelper();
      this.heroNavColorChange();

      if ($('body.home-page').length > 0) {
          this.homeBannerSwitcher();
      }

      window.onscroll = function() { so.app.heroNavColorChange() };
      window.onresize = function() { so.app.heroBannerSetHeight() };
      $('.no-ss[href]').each(function () {
          if ($(this).attr('href') != '') {
              var link = $(this).attr('href').split('#')[1];
              $(this).attr('href', '#' + link);
          }
      });
      $('[data-href]').addClass('jslink').on('click', function (e) {
          var target = $(this).data('href');
          window.location.href = target;
      });
      $('.collapse').on('show.bs.collapse', function (e) {
    console.log($(this).data("chevron"));
          if ($(this).is(e.target)) {
              var chevron = $(this).data("chevron");
              $('.' + chevron).removeClass("chevron-down").addClass("chevron-up");
          }
      }).on('hide.bs.collapse', function (e) {
          if ($(this).is(e.target)) {
              var chevron = $(this).data("chevron");
              $('.' + chevron).removeClass("chevron-up").addClass("chevron-down");
          }
      });
  },
  setupScrollHelper: function () {
      $('[data-scrollhelper]').each(function () {
          var windowScrollTop = $(window).scrollTop();
          var elScrollTop = $(this).offset().top;
          var cssClass = $(this).attr('data-class');
          var offsetBase = $(window).height();
          var presetClass = $(this).data('preset-class');
          var offset = parseInt($(this).attr('data-offset'));

          $(this).parents('section').addClass('animation-parent');

          if (windowScrollTop > (elScrollTop + offset)) {
              return false;
          }

          if (offset) {
              offset = offsetBase - offset;
          } else {
              offset = offsetBase - 100;
          }
          if (presetClass) {
              $(this).addClass(presetClass);
          }
          if (cssClass) {
              so.app.scrollHelper(this, cssClass, offset);
              this.addEventListener('animationstart', () => {
                  $(this).removeClass(presetClass);
              });
          }
      });
  },
  scrollHelper: function (el, elClass, offset, callback) {
      /*** Based on http://ejohn.org/blog/learning-from-twitter/ ***/
      var didScroll = false;
      var this_top;
      var height;
      var top;

      if (!offset) {
          var offset = 0;
      }

      $(window).scroll(function () {
          didScroll = true;
      });

      setInterval(function () {
          if (didScroll) {
              didScroll = false;
              top = $(this).scrollTop();

              $(el).each(function (i) {
                  this_top = $(this).offset().top - offset;
                  height = $(this).height();

                  // Scrolled within current section
                  if (top >= this_top && !$(this).hasClass(elClass)) {
                      $(this).addClass(elClass);

                      if (typeof callback == "function") callback(el);
                  }
              });
          }
      }, 100);
  },
  homeBannerSwitcher: function () {
      $('.banner-switch').each(function () {
          $(this).on('mouseover', function () {
              $(this).parents('.title-banner').removeClass('engineering').removeClass('branding').removeClass('campaigns');
              $(this).parents('.title-banner').addClass($(this).data('switch-class'));
          });
      });
  },
  megaMenuTrigger() {
      $("#mega-menu-trigger").click(function(e) {
          e.preventDefault();

          so.app.closeSearchPopover();

          $("body").toggleClass('mega-menu-open');
          $(".mega-menu").toggleClass('open');
      });
  },
  megaMenuTiering() {
      $(".mega-menu-icon").click(function(e) {
          e.preventDefault();

          var targ = $(this).attr('data-menu-target');

          $(".mega-menu-item-link").removeClass("active in-section");

          $(this).parent().addClass('active in-section');
          $(this).parents(".mega-menu-col").nextAll('.mega-menu-col').find('.mega-menu-sub').removeClass('open');
          $(".mega-menu-sub[data-menu='" + targ + "']").addClass('open');
          $(".mega-menu-sub[data-menu='" + targ + "']").parents(".mega-menu-col").toggleClass('open').siblings().removeClass('open');
      });

      $(".mega-menu-back").click(function(e) {
          e.preventDefault();

          $(this).parents(".mega-menu-col").removeClass('open').prev().addClass('open');
      });
  },
  toggleNavigation() {
      $(".nav-main-trigger").click(function(e) {
          e.preventDefault();

          so.app.closeSearchPopover();

          $(".nav-main").toggleClass('nav-main-open');
      });
  },
  toggleSubNavigation() {
      $(".nav-main-sub-menu-trigger").click(function() {
          var target = $(this).attr('data-target');

          if ($(this).attr('aria-expanded') === 'true') {
              $(this).attr('aria-expanded', 'false');
          } else {
              $(this).attr('aria-expanded', 'true');
          }

          $(target).toggleClass('nav-main-sub-menu-open');
      });
  },
  closeMegaMenu() {
      $(".nav-main").removeClass('nav-main-open');
      $(".nav-main").removeClass('mega-menu-open');
      $(".mega-menu").removeClass('open');
  },
  closeSearchPopover() {
      $(".nav-main").removeClass('search-popover-open');
      $(".search-popover").removeClass('open');
  },
  megaMenuSearchTrigger() {
      $(".search-popover-trigger").click(function(e) {
          e.preventDefault();

          so.app.closeMegaMenu();

          $(".nav-main").toggleClass('search-popover-open');
      });
  },
  searchPopoverTrigger() {
      $(".search-popover-trigger").click(function(e) {
          e.preventDefault();

          so.app.closeMegaMenu();

          $(".nav-main").toggleClass('search-popover-open');
          $(".search-popover, .suggestive-search-popover").toggleClass('open');

          //$(".search-popover form").toggle();
      });
  },
  heroBannerScroll: function () {
      $('.hero-banner-scroll-icon').on('click', function () {
          var windowHeight = window.innerHeight;
          var navHeight = $('#full-screen-hero-menu').height()
          var position = (windowHeight - navHeight);
          $("html, body").animate({ scrollTop: position }, {duration: 500, easing: "linear" });
      });
  },
  heroNavColorChange: function () {

      var header = document.getElementById("header-main");
      var transitionPoint = 44;

      if (window.pageYOffset > transitionPoint) {
          header.classList.remove("transparent");
          header.classList.add("pine");
      } else {
          header.classList.remove("pine");
          header.classList.add("transparent");
      }
  },
  heroBannerSetHeight: function () {
      //workout the  the height
      var windowHeight = window.innerHeight;
      //set the height
      $("#full-screen-hero-banner,#full-screen-hero-banner:before").css("height", windowHeight);
      $(".hero-banner-text").css("height", windowHeight);
  }
};

$(document).ready(function () {
  so.app.init();
});
