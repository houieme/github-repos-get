const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();



// @route    GET api/repos/github/:search
// @desc     Get repos from Github
// @access   Public
router.get('/github/:search', (req, res) => {
    try {
      const options = {
        uri: encodeURI(`https://api.github.com/search/repositories?q=${
          req.params.search
        }&sort=starsclient_id=${config.get(
          'githubClientId'
        )}&client_secret=${config.get('githubSecret')}`),
        method: 'GET',
        headers: { 'user-agent': 'node.js' }
      };
  
      request(options, (error, response, body) => {
        if (error) console.error(error);
  
        if (response.statusCode !== 200) {
          return res.status(404).json({ msg: 'No Github repos found' });
        }
  
        res.json(JSON.parse(body));
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  // @route    GET api/repos/github/:search/:langage
// @desc     Get  repos  with langage from Github 
// @access   Public
router.get('/github/:search/:langage', (req, res) => {
  try {
    const options = {
      uri: encodeURI(`https://api.github.com/search/repositories?q=${
        req.params.search
      }+language:${
        req.params.langage
      }&sort=starsclient_id=${config.get(
        'githubClientId'
      )}&client_secret=${config.get('githubSecret')}`),
      method: 'GET',
      headers: { 'user-agent': 'node.js' }
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: 'No Github repos found' });
      }

      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/repos/user/:username
// @desc     Get user repos from Github
// @access   Public
router.get('/user/:username', (req, res) => {
  try {
    const options = {
      uri: encodeURI(`https://api.github.com/users/${
        req.params.username
      }/repos?per_page=25&sort=created:asc&client_id=${config.get(
        'githubClientId'
      )}&client_secret=${config.get('githubSecret')}`),
      method: 'GET',
      headers: { 'user-agent': 'node.js' }
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: 'No Github profile found' });
      }

      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
  
// @route    GET api/repos/user/:username/followers
// @desc     Get user repos from Github
// @access   Public
router.get('/user/:username/followers', (req, res) => {
  try {
    const options = {
      uri: encodeURI(`https://api.github.com/users/${
        req.params.username
      }/followers/repos?per_page=25&sort=created:asc&client_id=${config.get(
        'githubClientId'
      )}&client_secret=${config.get('githubSecret')}`),
      method: 'GET',
      headers: { 'user-agent': 'node.js' }
    };

    request(options, (error, response, body) => {
      if (error) console.error(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: 'No Github profile found' });
      }

      res.json(JSON.parse().lenght);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
  

  module.exports = router;