var lights = [];
lights.length = 1000;
lights.fill(true);
var step = 2;

while (step <= 1000) {
  for (var i = step - 1; i < 1000; i += step) {
    lights[i] ? lights[i] = false : lights[i] = true;
  }
  step++;
}

var lightsOn = Object.keys(lights).filter(function(lightNumber) { 
  return lights[lightNumber];
}).map(function(lightNumber) {
  return String(Number(lightNumber) + 1);
});

console.log('There are ' + lightsOn.length + ' lights left on.');
console.log('');
console.log('The lights that are on are ' + lightsOn.join(', ') + '.');
