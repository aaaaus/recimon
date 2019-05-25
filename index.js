const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

//dynamic port binding for Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
