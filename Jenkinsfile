pipeline {
  agent {
    docker {
      image 'node:12.13.1'
    }

  }
  stages {
    stage('Unit and Coverage Test') {
      steps {
        sh 'npm run test'
      }
    }

  }
}