#!/bin/bash

# Start MKC in the background (it will bind to 127.0.0.1:7001)
npx mkc serve &

# Allow MKC time to start
sleep 10

# Create a proxy that forwards external connections to the internal service
# This listens on 0.0.0.0:7001 and forwards to 127.0.0.1:7001
socat TCP-LISTEN:7000,bind=127.0.0.1,fork TCP:0.0.0.0:7000

# Keep container running (otherwise it would exit)
wait