pipeline {

    agent any

    stages {

        stage('Build') {
            steps {
                bat '''
                    if not exist main.html exit /b 1
                    if not exist main.css exit /b 1
                    if not exist main.js exit /b 1

                    if not exist login.html exit /b 1
                    if not exist login.css exit /b 1
                    if not exist login.js exit /b 1

                    if not exist Sign.html exit /b 1
                    if not exist Sign.css exit /b 1
                    if not exist Sign.js exit /b 1

                    if not exist important.html exit /b 1
                    if not exist important.css exit /b 1
                    if not exist important.js exit /b 1

                    if not exist assets\\logo3.png exit /b 1

                    echo All required NoteME files are present.
                '''
            }
        }

        stage('Code Quality') {
            steps {
                bat '''
                    powershell -Command "if ((Get-Content main.html -Raw).Length -eq 0) { exit 1 }"
                    powershell -Command "if ((Get-Content main.css -Raw).Length -eq 0) { exit 1 }"
                    powershell -Command "if ((Get-Content main.js -Raw).Length -eq 0) { exit 1 }"

                    echo Basic code quality checks passed.
                '''
            }
        }

        stage('Test') {
            steps {
                bat '''
                    powershell -Command "if ((Get-Content main.html -Raw) -notmatch '<html') { exit 1 }"
                    powershell -Command "if ((Get-Content login.html -Raw) -notmatch '<html') { exit 1 }"
                    powershell -Command "if ((Get-Content Sign.html -Raw) -notmatch '<html') { exit 1 }"
                    powershell -Command "if ((Get-Content important.html -Raw) -notmatch '<html') { exit 1 }"

                    echo Basic NoteME tests passed.
                '''
            }
        }

        stage('Package') {
            steps {
                bat '''
                    powershell -Command "Compress-Archive -Path *.html,*.css,*.js,assets -DestinationPath NoteME.zip -Force"
                '''

                archiveArtifacts artifacts: 'NoteME.zip', fingerprint: true
            }
        }
    }

    post {

        success {
            echo 'SUCCESS: NoteME pipeline completed and the package was created.'
        }

        failure {
            echo 'FAILURE: One stage failed. Open the failed stage to see why.'
        }
    }
}