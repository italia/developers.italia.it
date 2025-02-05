import $ from 'jquery';
import 'owl.carousel';

$('*[data-activate-element]').on('click', function (e) {
  e.preventDefault();
  const genid = $(this).data('activeid');
  const noscroll = $(this).data('activate-noscroll') ? true : false;
  const $targetelement = $('*[data-activatedby="' + genid + '"]');
  $targetelement.toggleClass('deactive');
  $(this).toggleClass('active');
  if (noscroll) {
    $('body').toggleClass('stopScrolling--vertical');
  }
});

$('#moreTags').on('click', function (e) {
  e.preventDefault();
  $('.home-software-tags__list').children().removeClass('deactive');
  $(this).hide();
});

$(document).ready(function () {
  const owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 4,
    loop: true,
    autoWidth: false,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      960: {
        items: 4,
      },
    },
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });
});
