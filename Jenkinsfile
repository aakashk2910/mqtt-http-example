pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh '''export PATH=/usr/local/bin
npm cache clean --force'''
        sh '''export PATH=/usr/local/bin
npm install'''
        sh '''export PATH=/usr/local/bin
npm install nyc'''
      }
    }

    stage('Unit Test') {
      parallel {
        stage('Unit Test') {
          steps {
            sh '''export PATH=/usr/local/bin
npm run unitTest'''
          }
        }

        stage('Coverage Test') {
          steps {
            sh '''export PATH=/usr/local/bin
npm run coverageTest'''
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