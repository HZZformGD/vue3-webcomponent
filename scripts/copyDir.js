const child_process = require("child_process");
const [_a, _b, dir = './docs'] = process.argv;
const copyDir = (src, dist) => {
  child_process.spawn('cp', ['-r', , src, dist]);
};

copyDir('./packages', dir);
