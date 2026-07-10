pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    environment {
        DOCKER_IMAGE = "test-react-app"
        CONTAINER_NAME = "test-react-container"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sojibpml/test-react.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh """
                docker stop ${CONTAINER_NAME} || true
                docker rm ${CONTAINER_NAME} || true

                docker run -d \
                    --name ${CONTAINER_NAME} \
                    -p 80:80 \
                    --restart unless-stopped \
                    ${DOCKER_IMAGE}
                """
            }
        }
    }

    post {
        success {
            echo 'Pipeline Successfully Completed.'
        }

        failure {
            echo 'Pipeline Failed.'
        }

        always {
            echo 'Pipeline Finished.'
        }
    }
}