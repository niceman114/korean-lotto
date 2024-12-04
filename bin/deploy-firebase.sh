#!/bin/sh
yarn build
firebase deploy --only hosting
