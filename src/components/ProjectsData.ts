import ReadwiseLogo from '../assets/images/projects/readwise.png';
import TaskMinderLogo from "../assets/images/projects/taskminder.png";
import RestaurantApiLogo from "../assets/images/projects/restaurantapi.png";
import MentalEaseLogo from "../assets/images/projects/mentalEaseLogo.png";
import WeatherAppLogo from "../assets/images/projects/weatherApp.png";
import TicTacToeLogo from "../assets/images/projects/tictactoe.png";

interface TypeProjectsData {
    id: number;
    projectLogo: string;
    projectName: string;
    projectDescription: string;
    projectTechnologies: string[];
    liveLink: string;
    githubLink: string;
}

export const projectsData: TypeProjectsData[] = [
    {
        id: 1,
        projectLogo: TaskMinderLogo,
        projectName: "TaskMinder",
        projectDescription: "A task management application that allows users to create, update, delete and view tasks. It makes use of nodemailer to send email notification when a task is created.",
        projectTechnologies: ["React.js", "Node.js", "Express", "Mssql", "Nodemailer", "Azure"],
        liveLink: "https://yellow-dune-0686bdb0f.3.azurestaticapps.net/",
        githubLink: "https://github.com/kemboi590/TaskMinder-Client"
    },

    {
        id: 2,
        projectLogo: ReadwiseLogo,
        projectName: "ReadWiseBloging Platform",
        projectDescription: "A blogging website dedicated to promoting knowledge sharing and personal growth through engaging in written content. This was my first fullstack project.",
        projectTechnologies: ["React.js", "Node.js", "Express", "Mssql", "Azure"],
        liveLink: "https://proud-rock-05ce23a0f.3.azurestaticapps.net/",
        githubLink: "https://github.com/kemboi590/ReadWise-Client-Deployment"
    },

    {
        id: 3,
        projectLogo: RestaurantApiLogo,
        projectName: "Restaurant API",
        projectDescription: "The restaurant API uses the cutting edge technologies to develop a scalable application. The API is RESTful and returns data in JSON format.",
        projectTechnologies: ["Node.js", "Hono.js", "Posthres", "Drizzle", "Azure"],
        liveLink: "https://my-restaurant-api.azurewebsites.net",
        githubLink: "https://github.com/kemboi590/Restaurant-API"
    },

    {
        id: 4,
        projectLogo: MentalEaseLogo,
        projectName: "Mental Ease Platform",
        projectDescription: "A platform where people can share their mental health stories and receive therapists appointments. It is a safe space for people to share their mental health stories.",
        projectTechnologies: ["Node.js", "Express", "Mssql", "Stripe", "Azure"],
        liveLink: "https://mentaleaseapi.azurewebsites.net",
        githubLink: "https://github.com/Team-TrailBlazers/Mental-Ease-API"
    },

    {
        id: 5,
        projectLogo: WeatherAppLogo,
        projectName: "Weather App",
        projectDescription: "A weather application that allows users to search for the weather of any city in the world. It makes use of the OpenWeatherMap API to fetch weather data.",
        projectTechnologies: ["React.js", "OpenWeatherMap API"],
        liveLink: "https://weather-application-mauve.vercel.app/",
        githubLink: "https://github.com/kemboi590/weather-application"
    },

    {
        id: 6,
        projectLogo: TicTacToeLogo,
        projectName: "Tic Tac Toe",
        projectDescription: "A simple Tic Tac Toe game built with Javascript. The game allows two players to play against each other or a player can play against the computer.",
        projectTechnologies: ["HTML", "CSS", "Javascript"],
        liveLink: "https://antosnizzah.github.io/tic-tac-toe-game/",
        githubLink: "https://github.com/kemboi590/tic-tac-toe-game-kemboi"
    },
]
