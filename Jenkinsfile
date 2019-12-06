pipeline {
  agent {
    node {
      label 'node'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh '/usr/local/Cellar/jmeter/5.2.1/bin/jmeter -jjmeter.save.saveservice.output_format=xml -n -t /usr/local/Cellar/jmeter/5.2.1/bin/preport.jmx -l /usr/local/Cellar/jmeter/5.2.1/bin/outputReport.jtl'
      }
    }

  }
}