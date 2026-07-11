#!/bin/bash

URL="http://localhost:3000/profiles"

seq 1 50 | xargs -P10 -I{} sh -c '
status=$(curl -s -o /dev/null -w "%{http_code}" "'"$URL"'")
echo "Request {} -> $status"
'