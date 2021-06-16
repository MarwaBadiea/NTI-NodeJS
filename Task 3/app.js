
const fs = require('fs');



    if (!fs.existsSync('../marwa')) {
      fs.mkdirSync('../marwa');
    }




  const port  = 5000;

 app.listen(port);

 app.on('listening', () => console.log('Server Running On Port ' + port));
