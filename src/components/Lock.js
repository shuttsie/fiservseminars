import Auth0Lock from 'auth0-lock';

var clientId = "zRyYsoSjQEFqMqyZ61qQAJX2Ep2uQdSA";
var domain = "fiservseminars.us.auth0.com";
var options = {
  theme: {
    logo: 'https://precision.fiservseminars.com/static/media/logo.png',
    primaryColor: '#ff6600'
  },
  languageDictionary: {
    signUpTerms: "I agree to the following Fiserv <a href='https://www.fiserv.com/en/about-fiserv/privacy-notice.html' target='_blank'>privacy notice</a>.",
    title: "Precision Education Seminar"
  },
  autoclose: true,
  closable: true,
  autofocus: true,
  rememberLastLogin: true,
  mustAcceptTerms: true,
  additionalSignUpFields: [{
    name: "bank_name",
    placeholder: "Bank Name",
  },
    {
      name:"bank_title",
      placeholder: "Bank Title/Role",
  },
  {
      name:"date_selection_title",
      placeholder: "Choose your seminar dates below:",
  },
    {
      type: "checkbox",
      name: "choosen_date1",
      prefill: "false",
      placeholder: "October 6-8",
   },
    {
      type: "checkbox",
      name: "choosen_date2",
      prefill: "false",
      placeholder: "October 14-16",
   }]
};

var lock = new Auth0Lock(clientId, domain, options);
var Auth = (function() {

  var wm = new WeakMap();
  var privateStore = {};
  var lock;

  function Auth() {
    this.lock = new Auth0Lock(
      '<zRyYsoSjQEFqMqyZ61qQAJX2Ep2uQdSA>',
      'fiservseminars.us.auth0.com'
    );
    wm.set(privateStore, {
      appName: "example"
    });
  }

  Auth.prototype.getProfile = function() {
    return wm.get(privateStore).profile;
  };

  Auth.prototype.authn = function() {
    // Listening for the authenticated event
    this.lock.on("authenticated", function(authResult) {
      // Use the token in authResult to getUserInfo() and save it if necessary
      this.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          // Handle error
          return;
        }

        //we recommend not storing Access Tokens unless absolutely necessary
        wm.set(privateStore, {
          accessToken: authResult.accessToken
        });

        wm.set(privateStore, {
          profile: profile
        });

      });
    });
  };
  return Auth;
}());

lock.show();