pipeline {
  agent {
    docker {
      image 'node:12.13.1'
      args '--build-arg JMETER_VERSION=${JMETER_VERSION} -t "justb4/jmeter:${JMETER_VERSION}" '
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

    stage('ptest') {
      agent any
      steps {
        sh 'meter -jjmeter.save.saveservice.output_format=xml -n -t /usr/local/Cellar/jmeter/5.2.1/bin/preport.jmx -l /usr/local/Cellar/jmeter/5.2.1/bin/outputReport.jtl'
      }
    }

  }
}