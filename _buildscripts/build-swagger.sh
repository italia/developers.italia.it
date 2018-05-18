#!/bin/bash

DIR="$( pwd )"

cd swagger
npm run build

cd $DIR
