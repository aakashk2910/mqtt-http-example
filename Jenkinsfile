pipeline {
  agent any
  stages {
    stage('Install') {
      post {
        always {
          archiveArtifacts(artifacts: 'build/libs/**/*.jar', fingerprint: true)
        }

      }
      steps {
        sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm cache clean --force'''
        sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm i'''
      }
    }

    stage('Unit and Coverage Test') {
      post {
        always {
          archiveArtifacts(artifacts: 'build/libs/**/*.jar', fingerprint: true)
          junit 'build/reports/**/*.xml'
        }

      }
      steps {
        sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm run coverageTest'''
      }
    }

    stage('Performance Test') {
      steps {
        sh '''/usr/local/Cellar/jmeter/5.2.1/bin/jmeter -jjmeter.save.saveservice.output_format=xml -n -t /usr/local/Cellar/jmeter/5.2.1/bin/preport.jmx -l /usr/local/Cellar/jmeter/5.2.1/bin/outputReport.jtl
'''
      }
    }

  }
}