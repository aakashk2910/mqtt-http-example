pipeline {
  agent {
    docker {
      image 'node:12.13.1'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'npm i'
        sh 'npm install nyc'
      }
    }

    stage('Unit and Coverage Test') {
      parallel {
        stage('Unit Test') {
          steps {
            sh 'npm run unitTest'
          }
        }

        stage('Coverage Test') {
          steps {
            sh 'npm run coverageTest'
          }
        }

      }
    }

  }
}