const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.render('login', { pageTitle: 'Login', error: null, currentUserId: null });
});

app.get('/signup', (req, res) => {
  res.render('signup', { pageTitle: 'Sign Up', error: null, currentUserId: null });
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard', { pageTitle: 'Dashboard', boards: [], error: null, currentUserId: 'demo' });
});

app.get('/board', (req, res) => {
  res.render('board-view', {
    pageTitle: 'Board',
    currentUserId: 'demo',
    error: null,
    board: { _id: '1', title: 'Demo Board' },
    lists: [
      { _id: '1', title: 'To Do', cards: [] },
      { _id: '2', title: 'Doing', cards: [] },
      { _id: '3', title: 'Done', cards: [] }
    ]
  });
});

app.get('/auth/login', (req, res) => {
  res.redirect('/login');
});

app.get('/auth/signup', (req, res) => {
  res.redirect('/signup');
});

app.get('/boards', (req, res) => {
  res.redirect('/dashboard');
});

app.get('/boards/:id', (req, res) => {
  res.redirect('/board');
});

app.listen(PORT, () => {
  console.log(`Frontend demo running on http://localhost:${PORT}`);
});
