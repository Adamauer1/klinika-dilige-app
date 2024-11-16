const { exec } = require("child_process");

// Run the production build of Next.js
exec("npm run start", function (error, stdout, stderr) {
  console.log("stdout: " + stdout);
  console.log("stderr: " + stderr);
  if (error !== null) {
    console.log("exec error: " + error);
  }
});
