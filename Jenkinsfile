pipeline {

    agent any

    stages {

        stage('Build') {
            steps {
                bat '''
                    echo Checking NoteME project...
                    if not exist Jenkinsfile exit /b 1
                    echo 'NoteME project checked out successfully - CI test.'
                '''
            }
        }

        stage('Code Quality') {
            steps {
                bat '''
                    echo Running basic code quality checks...

                    powershell -Command "Get-ChildItem -File -Include *.html,*.css,*.js | ForEach-Object { if ((Get-Content $_.FullName -Raw).Length -eq 0) { Write-Host ('Empty file: ' + $_.Name) } }"

                    echo Code quality check completed.
                '''
            }
        }

        stage('Test') {
            steps {
                bat '''
                    echo Running NoteME tests...

                    powershell -Command "if (-not (Get-ChildItem -File -Filter *.html)) { exit 1 }"

                    echo Basic tests passed.
                '''
            }
        }

        stage('Package') {
            steps {
                bat '''
                    if exist NoteME.zip del NoteME.zip

                    powershell -Command "Compress-Archive -Path * -DestinationPath NoteME.zip -Force"
                '''

                archiveArtifacts artifacts: 'NoteME.zip', fingerprint: true
            }
        }
    }

    post {

        success {
            echo 'SUCCESS: NoteME pipeline completed successfully.'
        }

        failure {
            echo 'FAILURE: One stage failed. Check the Console Output.'
        }
    }
}