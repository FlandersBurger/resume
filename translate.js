module.exports = {
  en: {
    guessed: function(user, text) {
      return user + ' got ' + text;
    }
  },
  fr: {
    guessed: function(user, text) {
      return user + ' a trouve ' + text;
    }
  },
  nl: {
    guessed: function(user, text) {
      return user + ' heeft ' + text + ' gevonden';
    }
  },
  de: {
    guessed: function(user, text) {
      return user + ' hat ' + text + ' gefunden';
    }
  },
  pt: {
    guessed: function(user, text) {
      return user + ' adivinhou ' + text;
    }
  }
};
