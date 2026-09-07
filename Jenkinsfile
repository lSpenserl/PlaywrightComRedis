pipeline {
    agent {
        docker {
            image 'papitodev/playwright-nj-v1.49.1-nodle'
            args '--network qatw-primeira-edicao-main_skynet'   
        }
    }

    stages {
        stage('Node.JS Deps') {
            steps {
                sh 'npm install'
            }
        }
        stage('E2E Tests') {
            steps {
               sh 'npx playwright test'
               allure includeProperties: false, jdk: '', resultPolicy: 'LEAVE_AS_IS', results: [[path: 'allure-results']]
            }
        }
    }
}
