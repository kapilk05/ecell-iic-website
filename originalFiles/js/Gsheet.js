var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwFxy4hsIK-JeblK2dDbI7G4RJf2LPNhO3U1Ss8q24KsvVaeb16/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // Do what you want with this Uper all yours!
  );
})