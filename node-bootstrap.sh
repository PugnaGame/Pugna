#!/usr/bin/env bash

# Get root up in here
sudo su

# Just a simple way of checking if we need to install everything
if [ ! -d "/var/www" ]
then
    # Update and begin installing some utility tools
	add-apt-repository -y ppa:chris-lea/node.js
	apt-get -y update
	apt-get install -y python-software-properties vim git curl build-essential nodejs

	# Install node dependencies
	(cd /vagrant/server/ && npm install)

	# Run it
	node /vagrant/server/server.js &

	# Victory!
	echo "You're all done! Your default node server should now be listening on http://10.0.33.34:3000"
fi
