pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.62.1-noble'
            args '--network qatw-primeira-edicao-main_skynet'   
        }
    }

    stages {
        stage('Node.JS Deps') {
            steps {
                sh 'npm in
        stage('E2E Tests') {
            steps {
               sh 'npx playwright test'
               allure commandline: 'allure', includeProperties: false, jdk: '', resultPolicy: 'LEAVE_AS_IS', results: [[path: 'allure-results']]
            }
        }
    }
}
