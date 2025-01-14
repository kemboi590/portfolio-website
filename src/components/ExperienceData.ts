import MicrosoftTechCommunityLogo from '../assets/images/experience/mlsaLogo.jpeg'
import teach2GiveLogo from '../assets/images/experience/teach2GiveLogo.jpeg'
import theJituLogo from '../assets/images/experience/thejituLogo.jpeg'
import MLSALogo from '../assets/images/experience/mlsaLogo.jpeg'
import CSKLogo from '../assets/images/experience/cskLogo.jpeg'
import MVPBadge from '../assets/images/experience/MVPBadge.png'


interface TypeExpereinceData {
    id: number;
    logo: string;
    title: string;
    description: string;
    period?: string;
}

export const ExperienceData: TypeExpereinceData[] = [
        {
            id: 1,
            logo: MVPBadge,
            title: 'Microsoft Most Valuable Professional',
            description: 'Awarded the Microsoft MVP in January 2025 for sharing expertise in .NET through events, blogs, and social media, inspiring and empowering the tech community.',
            period: 'January 2025 - Present'
        },
        {
            id: 2,
            logo: MicrosoftTechCommunityLogo,
            title: 'Technical Educator at Microsoft Tech Community',
            description: 'Writing impactful blogs on .NET,Azure AI, Azure Cloud, and Web Development, helping developers enhance their skills and drive innovation in technology.',
            period: 'May 2024 - Present'
        },
        {
            id: 3,
            logo: teach2GiveLogo,
            title: 'Software Development Trainee at Teach2Give',
            description: 'Developed full-stack applications using React, Node.js, Hono, PostgreSQL, TypeScript, and Azure Cloud during an intensive training program.',
            period: 'May 2024 - August 2024'
        },
        {
            id: 4,
            logo: theJituLogo,
            title: 'Software Development Trainee at The Jitu',
            description: 'Completed an internship focused on full-stack development with React, Node.js, Express, Microsoft SQL Server, and Azure Cloud to deliver practical software solutions.',
            period: 'May 2023 - August 2023'
        },
        {
            id: 5,
            logo: MLSALogo,
            title: 'Microsoft Learn Student Ambassador',
            description: 'Mentoring students in Azure AI, Azure Cloud, and Web Development while organizing impactful workshops and events to drive community growth.',
            period: 'January 2023 - Present'
        },
        {
            id: 6,
            logo: CSKLogo,
            title: 'Leader at Computer Society of Kirinyaga (CSK)',
            description: 'Organized events as the event coordinator and now serve as chairperson, fostering a collaborative environment for tech enthusiasts in the community.',
            period: 'September 2022 - Present'
        }
        
    
    // {
    //     id: 1,
    //     logo: MVPBadge,
    //     title: 'Microsoft Most Valuable Professional',
    //     description: 'Impacted my tech community with skills on .NET through hosting of events, sharing on social media and writing technical blogs. I was awarded the Microsoft MVP award in January 2024 for recognition of my expertise',
    //     period: 'January 2025 - Present'
    // },
    // {
    //     id: 2,
    //     logo: MicrosoftTechCommunityLogo,
    //     title: 'Technical Educator at Microsoft Tech Community',
    //     description: 'I write blogs on Microsoft Tech Community platform. I have written blogs on Azure AI, Azure Cloud, Web Development which has has impacted my community in tech positively.',
    //     period: 'May 2024 - Present'
    // },
    // {
    //     id: 3,
    //     logo: teach2GiveLogo,
    //     title: 'Software Development Trainee at Teach2Give',
    //     description: "I'm currently attending a software training internship. I'm learning how to develop full stack applications using React, Node, Hono and PostgresSQL with Typescript and Azure cloud.",
    //     period: 'May 2024 - August 2024'
    // },
    // {
    //     id: 4,
    //     logo: theJituLogo,
    //     title: ' Software Development Trainee at The Jitu',
    //     description: 'I attended a software training internship between May 2023 - August 2023. I learned how to develop full stack applications using React, Node.js, Express and Microsoft SQL Server and Azure Cloud.',
    //     period: 'May 2023 - August 2023'
    // },

    // {
    //     id: 5,
    //     logo: MLSALogo,
    //     title: 'Microsoft Learn Student Ambassador',
    //     description: 'I mentor students on Azure Cloud, Azure AI, Web Development and the impact of technology on the community. I have made a positive impact on the community by organizing events and workshops.',
    //     period: 'January 2023 - Present'
    // },
    // {
    //     id: 6,
    //     logo: MentalEaseLogo,
    //     title: 'Founder of Mental Ease Platform',
    //     description: 'I founded a startup to create a platform where people can share their mental health stories and receive therapists appointments. I hope to create a safe space for people to share their mental health stories.',
    //     period: 'September 2023 - Present'
    // },
    // {
    //     id: 7,
    //     logo: CSKLogo,
    //     title: 'Leader at Computer Society of Kenya (CSK)',
    //     description: 'I organized events in the community between March 2023 - March 2024 as the event organizer and currently serving as the chairperson. I continue to make my community a better place for everyone in technology.',
    //     period: 'Septmber 2022 - Present'
    // },
    
]