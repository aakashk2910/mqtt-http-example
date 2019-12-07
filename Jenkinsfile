pipeline {
  agent any
  stages {
    stage('Unit and Coverage Test') {
      steps {
        sh '''cd $WORKSPACE
nyc --reporter=html --reporter=text mocha'''
      }
    }

  }
}