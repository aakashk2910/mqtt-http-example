pipeline {
  agent any
  stages {
    stage('Unit Test') {
      steps {
        sh '''export PATH=/usr/local/bin
npm run coverage'''
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