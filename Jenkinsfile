pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'sudo npm install'
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

    stage('ptest') {
      agent any
      steps {
        sh 'meter -jjmeter.save.saveservice.output_format=xml -n -t /usr/local/Cellar/jmeter/5.2.1/bin/preport.jmx -l /usr/local/Cellar/jmeter/5.2.1/bin/outputReport.jtl'
      }
    }

  }
}