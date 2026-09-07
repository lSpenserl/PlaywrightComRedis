pipeline {
    agent any

    stages {
        stage('Node.JS Deps') {
            steps {
                sh 'npm install'
            }
        }
        stage('E2E Tests') {
            steps {
               sh 'npx playwright test'
            }
        }
    }
}
