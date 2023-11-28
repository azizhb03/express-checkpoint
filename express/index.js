const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  console.log(now, day, hours);

  if ( day >= 1 && day <= 5  && hours >= 10 && hours < 18)
  next();
else {
  res.send ("Invalid date")
}
});
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {title: 'home'})
})
app.get('/Contact', (req, res) => {
  res.render('Contact', {title: 'Contact'})
})
app.get('/services', (req, res) => {
  res.render('services', {title: 'services'})
})


app.listen(3000, () => {
  console.log("listening on port 3000");
});
