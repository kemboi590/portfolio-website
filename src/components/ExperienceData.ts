import MicrosoftTechCommunityLogo from '../assets/images/mlsaLogo.jpeg'
import teach2GiveLogo from '../assets/images/teach2GiveLogo.jpeg'
import theJituLogo from '../assets/images/thejituLogo.jpeg' 
import MLSALogo from '../assets/images/mlsaLogo.jpeg'
import MentalEaseLogo from '../assets/images/mentalEaseLogo.jpeg'
import CSKLogo from '../assets/images/cskLogo.jpeg' 

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
        logo: MicrosoftTechCommunityLogo,
        title: 'Technical Educator at Microsoft Tech Community',
        description: 'I write blogs on the Microsoft Tech Community platform. I have written blogs on Azure AI, Azure Cloud, Web Development which has has impacted my community in tech positively.',
        period: 'May 2024 - Present'
    },
    {
        id: 2,
        logo: teach2GiveLogo,
        title: 'Software Developemr Trainee at Teach2Give',
        description: "I'm currently attending a software training internship. I'm learning how to develop full stack applications using React, Node, Hono and PostgresSQL with Typescript and Azure cloud.",
        period: 'May 2024 - August 2024'
    },
    {
        id: 3,
        logo: theJituLogo,
        title: ' Software Developer Trainee at The Jitu',
        description: 'I attended a software training internship between May 2023 - August 2023. I learned how to develop full stack applications using React, Node.js, Express and Microsoft SQL Server and Azure Cloud.',
        period: 'May 2023 - August 2023'
    },
    {
        id: 4,
        logo: MLSALogo,
        title: 'Microsoft Learn Student Ambassador',
        description: 'I mentor students on Azure Cloud, Azure AI, Web Development and the impact of technology on the community. I have made a positive impact on the community by organizing events and workshops.',
        period: 'January 2023 - Present'
    },
    {
        id: 5,
        logo: MentalEaseLogo,
        title: 'Founder of Mental Ease Platform',
        description: 'I founded a startup to create a platform where people can share their mental health stories and receive therapists appointments. I hope to create a safe space for people to share their mental health stories.',
        period: 'September 2023 - Present'
    },
    {
        id: 6,
        logo: CSKLogo,
        title: 'Leader at Computer Society of Kenya (CSK)',
        description: 'I organized events in the community between March 2023 - March 2024 as the event organizer and currently serving as the chairperson. I continue to make my community a better place for everyone in technology.',
        period: 'Septmber 2022 - Present'
    }
]