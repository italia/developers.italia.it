#!/usr/bin/env bash

set -uo pipefail

# Skip redirect pages
find _site -name '*.html' -exec grep -L 'http-equiv="refresh"' {} \; | \

# Speed up things and print just the first page in /api, /pa or /software,
# so we don't check the same layout multiple times.
awk '
match($0, "/../(api|pa|software)/", m){
  pattern = m[0]
  if (seen[pattern]) {
    next
  } else {
    seen[pattern] = 1
  }
}
{ print }
' | xargs npx --node-options "--unhandled-rejections=strict" pa11y-ci
