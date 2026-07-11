#!/bin/bash

URL="http://localhost:3000/profiles"

echo "Testing rate limiting..."
echo

for i in {1..20}
do
    status=$(curl -s -o /dev/null -w "%{http_code}" "$URL")

    printf "Request %02d -> HTTP %s\n" "$i" "$status"

    sleep 0.2
done