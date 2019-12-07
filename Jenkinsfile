pipeline {
  agent any
  stages {
    stage('Unit and Coverage Test') {
      steps {
        sh '''cd $WORKSPACE
npm install
npm run test-jenkins'''
      }
    }

  }
}