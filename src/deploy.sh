#!/usr/bin/env bash
#echo "building the new dist folder for root"
# ng build


say "please paste this password"
echo "8Cntzx!9@ScN2CRenymBRcJf%McwxT\$I"
echo "8Cntzx!9@ScN2CRenymBRcJf%McwxT\$I" | pbcopy
scp -P 8022 -r dist/colouriser/* ubuntu@172.31.9.231:/var/www/html/innov8ting/projects/colouriser