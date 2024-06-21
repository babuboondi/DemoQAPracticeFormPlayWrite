pipeline {
    agent any
    stages {
        stage('My tests') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.17.1'
                }
            }
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
