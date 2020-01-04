app.factory('cases', ['$http', function($http) {
    var casesObject = [
        {
            "title": "On The Map",
            "description": "On The Map is an app that allows students to share their location or favorite locations for other students to check out. The app also enables a user to sign in with their Udacity account as well as an option for Facebook sign in.",
            "subtext": "Udacity || iOS Nanodegree",
            "thumb_url": "./images/cases/otm-thumb.png",
            "button_text": "View the app repo",
            "button_url": "https://github.com/ZabeRauf/OnTheMap-V1",
            "background_color": "purple",
            "picture_position": true
        },
        {
            "title": "Lifestyle Hero: An app to improve your life",
            "description": "Lifestyle Hero is an app created with a group of students to help other students improve their life and get on top of tasks for school as well as outside of school. The app features a page for users to share recipes, track their water intake, and a calendar to help manage tasks and events.",
            "subtext": "East Carolina University || Software Engineering II",
            "thumb_url": "./images/cases/eno-thumb.png",
            "button_text":"Visit the team repo.",
            "button_url":"https://github.com/ECU-CSCI-4230/TeamGiratina",
            "background_color": "teal",
            "custom_styles": "top: -57px;",
            "picture_position": true
        },
        {
            "title": "Cat or Dog: Convolutional Neural Networks",
            "description": "One of my favorite projects to have worked on with a small group of students. We used a Convolutional Neural Network and developed it into a machine that could learn and tell the differences between a dog and a cat. The network is capable of reading input, input data, and producing a result telling whether the input image is a dog or cat.",
            "thumb_url": "./images/cases/neural_netsoft.png",
            "button_text":"Take a peek at our team repo",
            "button_url":"https://github.com/ECU-CSCI6905/TeamProject",
            "background_color": "blue",
            "picture_position": true
        },
        {
            "title": "Gold City Tattoo - Goldsboro",
            "description": "One of Goldsboro's local tattoo parlors ran by Justin 'Turbo' Carr. I am working closely with Turbo to tailor the website to his liking and help him attract customers to his parlor. Websites usually tend to be the first impressions to the customer and building Turbo a beautiful and responsive wesbite would set a great first impression to current and future customers.",
            "thumb_url": "./images/cases/wipimage.png",
            "button_text":"See more of the experience",
            "button_url":"https://github.com/ECU-CSCI6905/TeamProject",
            "background_color": "green",
            "custom_styles": "top: -65px;",
            "picture_position": true
        }
    ];

    return casesObject;
  }]);