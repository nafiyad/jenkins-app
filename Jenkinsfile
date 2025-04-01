pipeline {
    agent any
    
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                echo "===== Environment Info ====="
                pwd
                ls -la
                node --version
                npm --version
                
                echo "===== Installing Dependencies ====="
                npm install
                
                echo "===== Building Application ====="
                npm run build || { echo "Build failed"; exit 1; }
                
                echo "===== Build Output ====="
                ls -la build
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed!'
        }
    }
} 