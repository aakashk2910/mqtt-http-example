pipeline {
  agent {
    node {
      label 'default-nodejs'
    }

  }
  stages {
    stage('Unit and Coverage Test') {
      steps {
        script {
          npm install
        }

      }
    }

  }
}