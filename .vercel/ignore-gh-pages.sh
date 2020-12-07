#!/bin/bash

# Don't try to build the gh-pages branch.

if [[ "$BRANCH" != "gh-pages" ]] ; then
  # Proceed with the build
  exit 1;
else
  # Don't build
  exit 0;
fi
