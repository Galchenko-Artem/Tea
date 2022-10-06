const express = require('express');
const db = require('../../db/models');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplat');
const Comment = require('../views/comment')