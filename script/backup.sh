#!/usr/bin/env bash

set -e

git add -A
git commit -m "update"

git push https://github.com/antbuff/blog.git master:develop

