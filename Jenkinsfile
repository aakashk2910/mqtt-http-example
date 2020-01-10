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
      steps {
        sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
npm run coverageTest'''
      }
    }

    stage('Performance Test') {
      steps {
        sh '''/usr/local/Cellar/jmeter/5.2.1/bin/jmeter -jjmeter.save.saveservice.output_format=xml -n -t /usr/local/Cellar/jmeter/5.2.1/bin/preport.jmx -l /usr/local/Cellar/jmeter/5.2.1/bin/outputReport.jtl
'''
        sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
bzt -report /usr/local/Cellar/jmeter/5.2.1/bin/preport.jmx'''
      }
    }

    stage('Visualize') {
      steps {
              publishHTML([
                                  allowMissing: false,
                                  alwaysLinkToLastBuild: false,
                                  keepAll: true,
                                  reportDir: 'coverage',
                                  reportFiles: 'index.html',
                                  reportName: "Coverage Report"
                                ])
              }                ])
      }
    }

    stage('Start Application') {
            steps {
               sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
                screen -d -m -S screen.npmStart npm run start'''
               sh '''export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
                               screen -S screen.npmStart -X quit || true'''
            }
        }

  }
}
