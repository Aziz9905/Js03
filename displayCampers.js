const codeloccol = {
  name: 'Coder',
  legs: 4,
  tails: 1,
  friends: ['Codeloccol Campers'],
};

function displayCampers(obj) {
  console.log(`'${obj.friends[0]}'`);
}

displayCampers(codeloccol);