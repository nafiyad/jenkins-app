pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh '''
                ls -la
                npm install
                npm run build
                ls -la
                '''
            }
        }
        
        stage('Test') {
            steps {
                sh '''
                test -f build/index.html
                npm test
                '''
            }
        }
    }
}
