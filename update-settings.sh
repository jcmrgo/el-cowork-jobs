#!/bin/bash
heroku config:add METEOR_SETTINGS="$(cat settings.json)" --app elcowork-jobs