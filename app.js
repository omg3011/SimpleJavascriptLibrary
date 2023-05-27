// Demo: Console log 
var p1 = P$('Joel', 'Ong', 'en');
p1.userGreet(true).setLanguage('es').userGreet(true);

// Demo: Html button clicking
$('#login').click(function () {
  // Create a new Pokey object
  var p2 = P$('Sexy', 'Boi', 'en');

  // Hide login on the screen
  $('#logindiv').hide();

  // Pass Greet msg to html
  p2.setLanguage($('#lang').val()).HTMLUserGreeting('#greeting', true);
});

/** Pokemon features
 * 
 * // Non-chainable
 * 1. userFullName()
 * 2. validateLanguage()
 * 3. userInformalGreeting()
 * 4. userFormalGreeting()
 * 
 * // Chainable
 * 1. userGreet(bool)
 * 2. setLanguage(string)
 * 3. HTMLUserGreeting(string, bool)
 * 
 */





