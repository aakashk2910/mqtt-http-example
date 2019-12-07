pipeline {
  agent any
  stages {
    stage('Unit and Coverage Test') {
      steps {
        sh '''cd $Workspace
nyc --reporter=html --reporter=text mocha'''
      }
    }

  }
}