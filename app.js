alert('Welcome to The Cookie Shop!');

let userName = prompt('What is your name?');

let favoriteCookie = prompt('Nice to meet you ' + userName + '. What is your favorite type of cookie?');

if(favoriteCookie.toLowerCase() === 'chocolate chip') {
  alert('How could it not be! You\'re in luck, chocolate chip is a Cookie Shop specialty');
} else {
  alert('That\'s a great cookie flavor!');
}

let cookiesOrdered = prompt('How many ' + favoriteCookie.toLowerCase() + ' cookies would you like to order?');

confirmationText = 'Got it!\nPress \'OK\' to confirm your order.\nPress \'Cancel\' if you don\'t want cookies.';

if(confirm(confirmationText) == true) {
  alert(cookiesOrdered + ' ' + favoriteCookie.toLowerCase() + ' cookies coming right up!');
  document.write('While you wait on your cookies, enjoy our site!');
} else {
  alert('That\'s okay, there will be more cookies for you next time.');
}

let backgroundColor = prompt('To personalize your experience on our site, please input a color.');

document.body.style.backgroundColor = backgroundColor;
