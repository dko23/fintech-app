const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");
const session = require('express-session');
const users = require("./schema/visitors");



const connectionURI = 'mongodb+srv://danielowusu1759:ct2203@code-cluster.zdowcz5.mongodb.net/login?retryWrites=true&w=majority';

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB Atlas login');
  }).catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
  

  app.use(express.json());// basically the same as body.parser middleware which is outdated.
  app.use(cors()); // Use the cors middleware
  app.use(session({
    secret: "Rusty is a dog.",
    resave: false,
    saveUninitialized: false,
  }));
  
  // Initialize Passport.js
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Passport configuration
  // passport.use(new LocalStrategy(users.authenticate()));
  passport.serializeUser(users.serializeUser());
  passport.deserializeUser(users.deserializeUser());
  
  
///This line tells Passport to create a new authentication strategy called 'local-registration.' Strategies in Passport are sets of rules for how to authenticate users. In this case, it's a strategy specifically designed for user Registration
passport.use('local-registration', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  }, async (req, username, password, done) => {
    try {
      // Check if a user with the provided username already exists
      const existingUser = await users.findOne({ username });
  
      if (existingUser) {
        // If a user with the username exists, return an error
        return done(null, false, { message: 'Username is already taken' });
      }
  
      // Create a new user with the provided username and password
      const newUser = await users.create({
        username,
        password,
      });
  
      // Return the newly created user
      return done(null, newUser);
    } catch (error) {
      return done(error); // Pass any errors to Passport
    }
  }));
  
  // Register route
  app.post('/register', (req, res, next) => {
    passport.authenticate('local-registration', (err, user, info) => {
      if (err) {
        // Handle error here (e.g., log it or return an error response)
        return res.status(500).json({ error: 'An error occurred during registration' });
      }
  
      if (!user) {
        // Handle registration failure here
        return res.status(400).json({ error: info.message });
      }
  
      // Handle successful registration here
      return res.json({ message: 'Registration successful' });
    })(req, res, next);
  });
  
  
  
  // login user
  passport.use('local-signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  }, async (req, username, password, done) => {
    try {
      const user = await users.findOne({ username: req.body.username });
  
      if (user) {
        // Check if password matches
        const result = req.body.password === user.password;
        if (result) {
          // Correct response should be sent using `res.json` instead of `res.json({ message: 'Login successful' });`
          return done(null, user);
        } else {
          // Incorrect password should trigger a failed login
          return done(null, false, { message: "Password doesn't match" });
        }
      } else {
        // User not found should also trigger a failed login
        return done(null, false, { message: "User doesn't exist" });
      }
    } catch (error) {
      return done(error); // Pass any errors to Passport
    }
  }));
  
  
  app.post('/signin', (req, res, next) => {
    passport.authenticate('local-signin', (err, user, info) => {
      if (err) {
        // Handle error here (e.g., log it or return an error response)
        return res.status(500).json({ error: 'An error occurred during sign-in' });
      }
  
      if (!user) {
        // Handle sign-in failure here
        return res.status(400).json({ error: info.message });
      }
  
      // If you've reached this point, the sign-in was successful
      // Passport has already set up a session for the user
  
      return res.json({ message: 'Sign-in successful' });
    })(req, res, next);
  });
  
  
  
  
  /// logout user;
  // Server-side route for handling logout
  app.post('/logout', (req, res) => {
    req.logout(function (err) {
      if (err) {
        console.error('Logout error:', err);
        res.status(500).json({ error: 'Logout failed' });
      } else {
        res.sendStatus(200);
      }
    });
  });
  


















  // Start the server
app.listen(9000, () => {
    console.log('Server is running on port 9000');
});