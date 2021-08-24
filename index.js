require('dotenv').config({ path: 'src/config/.env' });
const Application = require('./src/Application');

Application.listen(process.env.PORT || 8888,
  () => console.log(`Server is running on port:${process.env.PORT || 8888}`));
