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
      }
    }

  }
}