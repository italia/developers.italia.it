import $ from 'jquery';
import 'owl.carousel';
import Chart from 'chart.js';

$(function() {
  var $projects = $('#projects > ul > li').clone()

  $('#search-form').on('submit', function() {
    var $sel = $('#projects > ul > li.is-selected')
    if ($sel.length > 0) {
      window.location = $sel.find('a').attr('href')
      return false
    }
  })

  $('#cerca').on('keydown', function(event) {
    if (event.which === 9 && $(this).is(':focus')) {
      $(this).blur()
      return true
    }
  })

  $('#cerca').on('keyup', function(event) {
    var text = event.target.value.toLowerCase()
    $('#projects > ul').html($projects.filter(function(index, elem) {
      var project = $(elem).find('span').html().toLowerCase()

      if (project.indexOf(text) >= 0) {
        return elem
      }
    }))
    $('#projects > ul > li:first').trigger('mouseenter')
  })
})

  $(document).on('keydown', function(e) {
    if (e.keyCode === 9) {
      $('body').removeClass('hide-focus');
    } else if (e.keyCode == 191) { // slash
      $('#cerca').focus();
      e.preventDefault();
    }
  })

  $(document).on('click', function(e) {
    $('body').addClass('hide-focus');
  })

  $('*[data-activate-element]').on('click',function(e){
    e.preventDefault();
    var genid = $(this).data('activeid');
    var noscroll = $(this).data('activate-noscroll') ? true : false;
    var $targetelement = $('*[data-activatedby="'+genid+'"]');
    $targetelement.toggleClass('deactive');
    $(this).toggleClass('active');
    if (noscroll==true) {
      $('body').toggleClass('stopScrolling--vertical');
    }
  });

  $('#moreTags').on('click', function(e) {
    e.preventDefault();
    $('.home-software-tags__list').children().removeClass('deactive');
    $(this).hide();
  })

  if (document.getElementById("vitalityChart")) {
    var ctx = document.getElementById("vitalityChart").getContext("2d");
    ctx.canvas.width = 230;
    ctx.canvas.height = 38;
    var myLineChart = new Chart(ctx, {
      responsive: false,
      type: 'line',
      data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
        datasets: [{
          fill: false,
          lineTension: 0.1,
          data: $('#softwareChart').data('vitality'),
          borderWidth: 2,
          borderColor: '#06c'
          }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false,
            stacked: true
          }],
          yAxes: [{
            display: false,
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 0,
            hoverBorderWidth: 0
          }
        },
        layout: {
          padding: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
          }
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }

  $(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      margin: 4,
      loop: true,
      autoWidth:false,
      autoHeight:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        960:{
          items:4
        }
      }
    });
    owl.on('mousewheel', '.owl-stage', function(e) {
      if (e.deltaY > 0) {
        owl.trigger('next.owl');
      } else {
        owl.trigger('prev.owl');
      }
      e.preventDefault();
    });
  })

