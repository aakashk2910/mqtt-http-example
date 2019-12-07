pipeline {
  agent any
  stages {
    stage('Unit and Coverage Test') {
      steps {
        sh '/Users/aakash/Seminar/Application/mqtt-http/nyc --reporter=html --reporter=text mocha || true'
      }
    }

  }
}