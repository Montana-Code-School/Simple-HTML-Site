import express from 'express';
import path from 'path';


const app = express();
app.use(express.static('public/js'));


app.get('*',(req, res) =>{
  res.sendFile(path.resolve('public/index.html', 'public/2index.html'));
});


app.listen(process.env.PORT || 3001,()=>console.log("Listening on port 3001"));
