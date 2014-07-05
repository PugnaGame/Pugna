Pugna
============

Quick install and setup guide
-----------------------------

### via Vagrant
```
git clone git@github.com:PugnaGame/Pugna.git Pugna
cd Pugna
vagrant up
```
Add pugna.local to your /etc/hosts file

NodeJS server will be started automatically, visit http://pugna.local:3000

Next time you have to start NodeJS manually, to do that call 
```
node /vagrant/server/server.js
```

### via Docker

After you have installed docker run this command to build the image inside the project dir
```
./build_docker.sh
```

User the following to start the application 
```
./run_docker.sh
```

If you get a message that port 80 is already in use, you either have other software using it(eg apache) or the container is already running. Use `docker ps` and `docker stop containername` to manage running containers. Docker preserves running containers after restart so remember to stop the running container in case you don't want it.
