
pipeline {
    agent any

   

    stages {

      

        stage('Run Tests') {
            steps {
                // Run tests
                echo "Testing"
                chmod +x test.sh
                ./test.sh
                
              
            }
        }

        stage('Build') {
            steps {
                // Build the project
                echo "Building"
            }
           
        }

    

        stage('Deploy') {
            steps {
                // Deploy the application
               echo "Deploying"
            }
        }
    }

}










// pipeline {
//     agent any


//     stages {
        

//         stage('Install Dependencies') {
//             steps {
//                 // Install Node.js and npm dependencies
//                 sh 'npm install'
//             }
//         }

//         stage('Run Tests') {
//             steps {
//                 // Run tests
//                 sh 'npm test'
//             }
//         }

//         stage('Build') {
//             steps {
//                 // Build the project
//                 sh 'npm run build'
//             }
//             when {
//                 expression {
//                     currentBuild.result == null || currentBuild.result == 'SUCCESS'
//                 }
//             }
//         }

//         stage('Package') {
//             steps {
//                 // Package the application if needed
//                 sh 'npm run package'
//             }
//             when {
//                 expression {
//                     currentBuild.result == null || currentBuild.result == 'SUCCESS'
//                 }
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 // Deploy the application
//                 sh 'npm run deploy'
//             }
//             when {
//                 expression {
//                     currentBuild.result == null || currentBuild.result == 'SUCCESS'
//                 }
//             }
//         }
//     }

//     post {
//         always {
//             // Clean up workspace after build
//             cleanWs()
//         }
//         success {
//             // Notify success
//             echo 'Build and deploy successful!'
//         }
//         failure {
//             // Notify failure
//             echo 'Build or deploy failed!'
//         }
//     }
// }
