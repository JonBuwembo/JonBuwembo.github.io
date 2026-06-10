 const projects = {
    'lemurs-application': {
        title: 'LEMURS: Risk Of Suicidal Ideation',
        subtitle: 'An android and iOS application for predicting the mental health of students at UMASS Amherst and WPI',
        image: './assets/images/projects/lemurs-logo.png',
        duration: '7 months',
        skills: ['Kotlin Compose UI', 'Kotlin', 'Android Studios', 'PostgreSQL', 'Xcode'],
        overview: 'A Full-stack Android and iOS application built and scaled using cross-functional Kotlin Multiplatform, featuring daily surveys, weekly surveys, and additional modalities for collection of data such as Audio, Written, and screentime data collection. This data would be used to predict the risk of suicidal ideation amongst student at University of Massachusetts Amherst and Worcester Polytechnic Institute.',
        challenges: 'Developing a sandbox for shared cross-functional code between iOS and Android to work. Additionally, improving data consistency and reliability within screentime collection. Developing a bridge between Xcode and Android Studios.',
        features: ['Passive collection of audio, screentime and written data'],
        highlights: [""]
    },

    'research-enrollment-system': {
        title: "Research Enrollment System",
        subtitle: 'A Full-Stack application allowing students to apply to research positions across WPI campus.',
        image: './assets/images/projects/research-enroll.png',
        duration: '2 months',
        skills: ['Flask Frameworks', 'Python', 'SQLAlchemy', 'Bootstrap'],
        overview: 'A Flask based web application that allows professors and students to register accounts and manage their research pages. Students can input profile data and get recommended to top research positions that professors have posted. Professors can waitlist, accept, or deny students to research opportunities and students can see the status of their applications. Information about a research positions is clearly displayed with a description, time frame of opportunity, and requirements/qualifications needed. ',
        challenges: 'Developing the recommendation scoring system for research recommendations to students, Integrating bootstrap styling into our website. Ensuring successful user authentication for both students and professors with Flask libraries.',
        features: ['Secure user authentication system using Flask Libraries.', 'Recommendation System for research positions', 'Status control of research positions managed by professors.', 'multi-role application, with certain roles having access to certain pages, an added layer of security.'],
        highlights: [""]
    },

    'movie-recommender-application': {
        title: "Midnight Scoop",
        subtitle: "A full-stack movie discovery platform powered by machine learning recommendations, conversational AI, and personalized watchlists. A 400,000+ Movie Catalog.",
        duration: '7 months',
        image: "./assets/images/projects/movie-recommender-picture-one.png",
        skills: ['Flask', 'Python', 'SQLAlchemy', 'React.js', 'typescript', 'K-Nearest Neighbors', 'PostgreSQL', 'JWT Authentication'],
        overview: 
            'Midnight Scoop is a full-stack Flask application that helps users discover, explore, and track movies from the 20th and 21st centuries. The platform combines machine learning recommendations, conversational AI, and personalized user preferences to create a tailored movie discovery experience.',
        challenges: 
            'One of the most significant engineering challenges was scaling the recommendation system. A naive approach would require computing similarities between every pair of movies, resulting in hundreds of billions of comparisons for a large catalog. To avoid excessive computation and storage requirements, I explored dimensionality reduction and nearest-neighbor retrieval strategies that allow recommendations to be generated efficiently without recomputing the entire similarity matrix on every request.',
        features: [
            'Secure user authentication using JWT tokens', 
            'Content-based recommendation system powered by K-nearest-neighbors (KNN)', 
            'Personalized watchlists and movie collections', 
            'AI chatbot for movie recommendations and catalog assistance', 
            'Fast title and genre search capabilities', 
            'User rating system that improves recommendation quality',
            'Responsive React frontend with dynamic movie browsing'
        ],
        highlights: [
            "Indexed and processed over 400,000+ movie records",
            "Integrated machine learning recommendations with a product style Flask Rest API", 
            "Built a recommendation pipeline capable of retrieving the top 50 most similar movies using KNN similarity search", 
            "Designed database-driven search and filtering across thousands of movie records", 
            "Implemented conversational retrieval workflows combining database search with LLM-generated responses.",
            "Built a Flask REST API powering 10+ frontend views."
        ]

    }




};

export default projects;