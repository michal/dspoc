#!/bin/sh

dir=$(pwd "$0")

cd "$dir/dspoc-mui"
pnpm link --global
cd "$dir/dspoc-mui-test"
pnpm link --global dspoc-mui

cd "$dir/dspoc-raw"
pnpm link --global
cd "$dir/dspoc-raw-test"
pnpm link --global dspoc-raw