const express = require('express');
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

const upload = multer({
  dest: './uploads',
});

const PORT = '80' || process.env.PORT;

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
  console.log('file uploaded');	
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

