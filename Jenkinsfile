pipeline {
  agent any
  stages {
    stage('Unit and Coverage Test') {
      steps {
        sh 'nyc --reporter=html --reporter=text mocha || true'
      }
    }

  }
}