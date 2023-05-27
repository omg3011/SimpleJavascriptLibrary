// Create a IFFE
;(function (global, $) {

  // 'new' an object
  var Pokey = function(firstName, lastName, language) {
    return new Pokey.init(firstName, lastName, language);
  }
  Pokey.init = function(firstName, lastName, language) {
    var self = this;

    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;

    self.validateLanguage();
  }

  // Variables accessible only in this IFFE scope
  var supportedLanguages = ['en', 'es'];
  var informalGreetings = {
    en: 'hello',
    es: 'hola',
  };
  var formalGreetings = {
    en: 'Greeting',
    es: 'Saludos',
  };

  // Handling prototype
  //-- This prototype holds public methods (to save memory space)
  Pokey.prototype = {
    //------------- Non-chainable functions
    userFullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    validateLanguage: function() {
      if(supportedLanguages.indexOf(this.language) === -1) 
        throw 'Invalid Language!'; 
    },
    userInformalGreeting: function() {
      return informalGreetings[this.language] + ' ' + this.userFullName();
    },
    userFormalGreeting: function() {
      return formalGreetings[this.language] + ' ' + this.userFullName();
    },
    
    //------------- Chainable functions
    userGreet: function (isFormal) {
      var msg;

      // DEtermine what msg to print
      if(isFormal) {
        msg = this.userFormalGreeting();
      } else {
        msg = this.userInformalGreeting();
      }

      // Printout msg
      if(console) {
        console.log(msg);
      }

      // To allow chaining
      return this;
    },
    setLanguage: function (lang) {
      this.language = lang;

      this.validateLanguage();

      // Make chainable
      return this;
    },
    HTMLUserGreeting: function(selector, isFormal) {
      if(!$) throw 'jQuery not loaded';
      if(!selector) throw 'Missing jQuery selector';

      // Determine message
      if(isFormal) {
        msg = this.userFormalGreeting();
      } else {
        msg = this.userInformalGreeting();
      }

      // Inject message into html using jQuery
      $(selector).html(msg);

      return this;
    }
  };
  Pokey.init.prototype = Pokey.prototype;

  // Attach our pokey to global object and make a short alias for it
  global.Pokey = global.P$ = Pokey;
}(window, jQuery));