#!/bin/bash
cd /home/kavia/workspace/code-generation/piggyquest-26760-7505f1b8/piggyquest_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

