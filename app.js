let userName;
let favoriteCookie;

function greeting() {
  alert('Welcome to The Cookie Shop!');

  userName = prompt('What is your name?');

  favoriteCookie = prompt('Nice to meet you ' + userName + '. What is your favorite type of cookie?');

  if (favoriteCookie.toLowerCase() === 'chocolate chip') {
    alert('How could it not be! You\'re in luck, chocolate chip is a Cookie Shop specialty');
  } else {
    alert('That\'s a great cookie flavor!');
  }
}

function orderCookies() {
  let cookiesOrdered = prompt('How many ' + favoriteCookie.toLowerCase() + ' cookies would you like to order?');

  while(isNaN(cookiesOrdered)) {
    cookiesOrdered = prompt(cookiesOrdered + ' isn\'t a number of cookies we can make. How many cookies would you like to order?');
  }

  confirmationText = 'Got it!\nPress \'OK\' to confirm your order.\nPress \'Cancel\' if you don\'t want cookies.';

  if (confirm(confirmationText) == true) {
    alert(cookiesOrdered + ' ' + favoriteCookie.toLowerCase() + ' cookies coming right up!');
    document.write('While you wait on your cookies, enjoy our site!');
  } else {
    alert('That\'s okay, there will be more cookies for you next time.');
  }
}

function setSiteBackgroundColor() {
  let backgroundColor = prompt('To personalize your experience on our site, please input a color.');

  document.body.style.backgroundColor = backgroundColor;
}

function starRating() {
  let stars = prompt('We want to make our site experience the best possible. On a scale of 1-5, how many stars would you rate our greeting?');

  while(isNaN(stars) || stars > 5 || stars < 1) {
    stars = prompt('Sorry, that\'s not valid input. Please rate our site 1-5 stars.');
  }

  for(let i = 0; i < stars; i++) {
    document.write('<img class=\'star\' src=\'star.png\'/>');
  }
}

greeting();

