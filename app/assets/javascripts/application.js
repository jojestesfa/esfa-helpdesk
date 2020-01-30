/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
});

// $('#ILR').click(function() {
//     if ($(this).is(':checked')) {
//     $('#submissions tr').hide();
//     $('.ilr-row').show();
//   } else {
//     $('#submissions tr').show();
//   }
// });
//
// $('#ESF').click(function() {
//     if ($(this).is(':checked')) {
//     $('#submissions tr').hide();
//     $('.esf-row').show();
//   } else {
//     $('#submissions tr').show();
//   }
// });

$("#backlink").click(function(event) {
    event.preventDefault();
    history.back(1);
});

$("#typeFilter :checkbox").click(function() {
    $("#submissions tr").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $("#submissions tr").show();
    }
});

$("#yearFilter :checkbox").click(function() {
    $(".year-groups").hide();
    $("#yearFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#yearFilter :checkbox").is(':checked')) {
      $(".year-groups").show();
    }
});


$(".autocomplete__menu").click(function() {
  $("#searchProviders").trigger("click");
  
});

// if ($("li.autocomplete__option.autocomplete__option--no-resutls").is(':visible')) {
//   alert('is visible');
// }

$(document).ready(function () {

  if(window.location.href.indexOf("provider-record") > -1) {
     $('.left-navigation-2 li #1').addClass('active');
     $('.left-navigation-2 li #1').addClass('govuk-!-font-weight-bold');     
  }

  if(window.location.href.indexOf("historical-in-period") > -1) {
     $('.left-navigation-2 li #2').addClass('active');
     $('.left-navigation-2 li #2').addClass('govuk-!-font-weight-bold');
  }

  if(window.location.href.indexOf("frm") > -1) {
     $('.left-navigation-2 li #3').addClass('active');
     $('.left-navigation-2 li #3').addClass('govuk-!-font-weight-bold');
  }

  if(window.location.href.indexOf("unsubmitted-files") > -1) {
    $('.left-navigation-2 li #4').addClass('active');
    $('.left-navigation-2 li #4').addClass('govuk-!-font-weight-bold');
 }
});