const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(require('./routes/relax'));
app.use(require('./routes/sleepy'));
app.use(require('./routes/focus'));
app.use(require('./routes/noises'));
app.use(require('./routes/playlists'));

app.listen(process.env.PORT || 5000);
