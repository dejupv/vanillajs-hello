window.onload = function () {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed on', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = [
    'before the class',
    'while I was sleeping',
    'during my lunch',
    'while I was praying'
  ];

  const random = arr => arr[Math.floor(Math.random() * arr.length)];

  const excuse = `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;

  document.getElementById('excuse').innerText = excuse;
};
