pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm cache clean --force'''
        sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm i'''
      }
    }

    stage('Unit and Coverage Test') {
      parallel {
        stage('Unit') {
          agent any
          steps {
            sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
chmod -R a+rwx ./node_modules '''
            sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm run unitTest'''
          }
        }

        stage('Coverage Test') {
          steps {
            sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm run coverageTest'''
          }
        }

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