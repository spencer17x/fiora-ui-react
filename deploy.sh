#!/usr/bin/env bash
npm version $1 && \
    git pull && \
    git push
