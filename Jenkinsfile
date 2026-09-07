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
