# XMachines

This is a website made by me for a Robotics & AI company, XMachines.


## Demo


See the live website [here](https://xmachines-5df86.web.app/)
## Tech Stack

**Frontend:** HTML, CSS, Bootstrap, Javascript

**Backend & Hosting:** Firebase

## Getting Started

### Prerequisites
- Firebase Account

### Get a local copy of the repo into your system

1. Clone the repository `https://github.com/sree-gaya3/XMachines.git`

### Firebase Setup
1. Create a new project in your firebase account
2. Create a Firestore Database
    - start in test mode
    - after creating, go to rules section and edit the rules
    
        ```
        rules_version = '2';
        service cloud.firestore {
            match /databases/{database}/documents {
            match /{document=**} {
                allow read, write: if false;
            }
            }
        }
        ```


3. In the Firestore database, you need to create 3 Collections
    - **blogs** collection

        | Field     | Type        |
        | ----------|:------------| 
        | title     | string      |
        | subtitle  | string      |
        | category  | string      |
        | content   | string      |
        | created   | timestamp   |
        | url       | string      |

    - **careers** collection

        | Field             | Type        |
        | ------------------|-------------| 
        | title             | string      |
        | description       | string      |
        | responsibilities  | string      |
        | requirements      | string      |
        | perks             | string      |
        | created           | timestamp   |

    - **formData** collection

        | Field    | Type     |
        | ---------|----------| 
        | name     | string   |
        | email    | string   |
        | message  | string   |
4. Add the Web App and it's configuration to the code
    - from the project overview section, add a web App
    - give a name and leave the hosting checkbox unticked for now
    - save these lines from the code shown there
        ```
        apiKey: "AIzaSyAkzRP3oUniEsCaX4qSu0RPozgmph4CgLE",
        authDomain: "yyyyy-63955.firebaseapp.com",
        projectId: "yyyyy-63955",
        storageBucket: "yyyyy-63955.appspot.com",
        messagingSenderId: "953915698478",
        appId: "1:953915698478:web:9f1298336f780ff2a9debf"
        ```
    - Go to `public/assets/js/firebase.js` and replace the lines 3 - 8 with the above saved ones

### Hosting 

1. Go to the Hosting section in the firebase console and click on get started
2. follow the steps given there 
    - Run the following npm command to install the firebase CLI or update to the latest CLI version: `npm install -g firebase-tools`
    - Sign in to Google using: `firebase login`
    - Go to `public` directory and run this command to initialize the project: `firebase init`


        

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/sree-gaya3/XMachines/blob/main/LICENSE) for details
