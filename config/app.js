(function () {
  "use strict";
  var e = require("crypto"),
    n = require("base64url"),
    i = require("fs"),
    r = Date.now(),
    t = n(e.randomBytes(64));
  i.appendFile("./config/app.js", "\n//UNIX=" + r + "\n//APP_KEY=" + t, function (e) {
    if (e) throw e;
  }),
    i.appendFile(".env", "\n#UNIX=" + r + "\n#APP_KEY=" + t, function (e) {
      if (e) throw e;
      process.exit(0);
    });
}.call(this));

//UNIX=1642835154959
//APP_KEY=FlkeFzZChglklfoDvSh_VtkEvYDBKWmfPCW7oe9CDTcMIp4IDTrIoHddnNcU_YsyY-PotN1lYUkom9n82qgcGQ
