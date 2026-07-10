pipeline {
    agent any

    tools {
        // যদি Jenkins এ NodeJS প্লাগইন সেটআপ করে থাকেন
        nodejs 'NodeJS-14' 
    }

    stages {
        stage('Code Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/sojibpml/test-react'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests (যদি থাকে)') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Server (উদাহরণ)') {
            steps {
                sh '''
                    # বিল্ড ফাইল কপি করা (যেমন Nginx সার্ভারে)
                    sudo rm -rf /var/www/html/*
                    sudo cp -r build/* /var/www/html/
                '''
            }
        }
    }

    post {
        success {
            echo '🎉 বিল্ড ও ডিপ্লয় সফল হয়েছে!'
        }
        failure {
            echo '❌ বিল্ড ব্যর্থ হয়েছে! লগ চেক করুন।'
        }
    }
}
