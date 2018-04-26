
#### Install Dependencies
* [Node](https://nodejs.org/en/download/)
* [Docker](https://www.docker.com/) (Optional)


Install dependencies:
```
npm install
```

#### Run

```
  npm start
```

#### Generate Docker Image
```
  docker build -t gcr.io/costco-202313/pubsub .
```


#### Deployment
```
  kubectl create -f .gcloud/deployment.yml
  kubectl create -f .gcloud/service.yml
```
