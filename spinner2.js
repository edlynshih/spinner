let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let time = 0;
for(let stick of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${stick}   `);
  }, time)
  time = time + 500;
}