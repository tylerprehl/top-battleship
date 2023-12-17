/*
This file is reserved for functions that *change* the DOM (not just read info from it)
*/

function getPlayerName(playerNum) {
  const nameField = document.querySelector(`some selector with ${playerNum}`);
  const name = nameField.getAttribute('name');
  // do it with form validation - if the name isn't at least 1 character, error out
  // do not empty out name field on submission
  return 'Tyler';
}

export { getPlayerName };
