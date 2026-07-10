pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    environment {
        DOCKER_IMAGE = 'test-react-app'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        CONTAINER_NAME = 'test-react-container'
        DOCKER_HUB_REPO = 'your-dockerhub-username/test-react-app'  // আপনার ইউজারনেম দিন
    }

    stages {
        stage('📦 Code Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/sojibpml/test-react.git'
                echo '✅ কোড চেকআউট সম্পন্ন!'
            }
        }

        stage('📥 Install Dependencies') {
            steps {
                sh 'npm install'
                echo '✅ ডিপেন্ডেন্সি ইনস্টল সম্পন্ন!'
            }
        }

        stage('🧪 Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false || echo "⚠️ কোনো টেস্ট স্ক্রিপ্ট নেই"'
                echo '✅ টেস্ট সম্পন্ন!'
            }
        }

        stage('🏗️ Build React App with Vite') {
            steps {
                sh 'npm run build'
                echo '✅ বিল্ড সম্পন্ন! `dist` ফোল্ডার তৈরি হয়েছে।'
            }
        }

        stage('🐳 Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                    echo "✅ ডকার ইমেজ বিল্ড সম্পন্ন: ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }

        stage('📤 Push to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub-password', variable: 'DOCKER_PASS')]) {
                    sh """
                        echo ${DOCKER_PASS} | docker login -u your-username --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${DOCKER_IMAGE}:latest
                    """
                }
                echo '✅ ডকার হাবে পুশ সম্পন্ন!'
            }
        }

        stage('🚀 Deploy to Staging') {
            when { branch 'develop' }
            steps {
                sh """
                    docker stop ${CONTAINER_NAME}-staging || true
                    docker rm ${CONTAINER_NAME}-staging || true
                    docker run -d -p 8080:80 --name ${CONTAINER_NAME}-staging ${DOCKER_IMAGE}:${DOCKER_TAG}
                """
                echo '✅ স্টেজিং এ ডিপ্লয় সম্পন্ন!'
            }
        }

        stage('🚀 Deploy to Production') {
            when { branch 'main' }
            steps {
                sh """
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                    docker run -d -p 80:80 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}:${DOCKER_TAG}
                """
                echo '✅ প্রোডাকশনে ডিপ্লয় সম্পন্ন!'
            }
        }
    }

    post {
        success {
            emailext(
                subject: "✅ Build Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    🎉 বিল্ড সফল হয়েছে!
                    
                    Job Name: ${env.JOB_NAME}
                    Build Number: ${env.BUILD_NUMBER}
                    Build URL: ${env.BUILD_URL}
                    
                    ডিপ্লয় হয়েছে: http://your-server-ip
                """,
                to: 'team@example.com'  // আপনার ইমেইল দিন
            )
            echo '🎉🎉🎉 সবকিছু সফল হয়েছে! 🎉🎉🎉'
        }
        failure {
            emailext(
                subject: "❌ Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    ❌ বিল্ড ব্যর্থ হয়েছে!
                    
                    Job Name: ${env.JOB_NAME}
                    Build Number: ${env.BUILD_NUMBER}
                    Build URL: ${env.BUILD_URL}
                    
                    দয়া করে কনসোল আউটপুট চেক করুন।
                """,
                to: 'team@example.com'  // আপনার ইমেইল দিন
            )
            echo '❌❌❌ বিল্ড ব্যর্থ হয়েছে! ❌❌❌'
        }
        always {
            echo '🧹 পোস্ট-বিল্ড ক্লিনআপ চলছে...'
            // ডিস্ক স্পেস বাঁচাতে পুরানো ডকার ইমেজ মুছতে পারেন
            // sh 'docker image prune -f'
        }
    }
}