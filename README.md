# Ops interview challenge

## About the projects

There are 2 node.js apps in this repo, docs-api and projects-api, both can be started from within their directories with

`npm run-script run`

The projects api relies upon the docs-api for data. When both apps are up and running a request to the projects api
will return information about a LaTeX project. The following curl will work locally when they are both running

`curl localhost:5000/project/1`

The ports are configured via a settings.js file in each project. This can be modified, or replaced as you see fit.


## The task

* Get both projets running in kubernetes
* Have the projects api discover the docs api without requiring manual setting of a host name (service discovery)
* Have the projects api on the public Internet, bonus points if the docs api is not publicly accessible
* Have this scripted in a standard way such as terraform or kubectl config files