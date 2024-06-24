import ReactLogo from '../assets/images/technologies/reactLogo.jpeg'
import NodeLogo from '../assets/images/technologies/nodeLogo.jpeg'
import ExpressLogo from '../assets/images/technologies/ExpressLogo.png'
import MongoDBLogo from '../assets/images/technologies/mongo.png'
import TailwindLogo from '../assets/images/technologies/tailwind.png'
import HonoLogo from '../assets/images/technologies/hono.jpeg'
import GitHubLogo from '../assets/images/technologies/GitHub.webp'
import MaterialUILogo from '../assets/images/technologies/mui.webp'
import AzureLogo from '../assets/images/technologies/MSAzure.webp'
import MSSQLLogo from '../assets/images/technologies/mssql.webp'
import PostgresLogo from '../assets/images/technologies/postgres.png'
import AzureCosmosLogo from '../assets/images/technologies/azure-comos.png'

interface TypeTech {
    id: number;
    techName: string;
    techLogo: string;
}

export const TechnologiesData: TypeTech[] = [
    {
        id: 1,
        techName: 'React',
        techLogo: ReactLogo
    },
    {
        id: 2,
        techName: 'Node.js',
        techLogo: NodeLogo
    },
    {
        id: 3,
        techName: 'Express.js',
        techLogo: ExpressLogo
    },
    {
        id: 4,
        techName: 'MongoDB',
        techLogo: MongoDBLogo
    },
    {
        id: 5,
        techName: 'TailwindCSS',
        techLogo: TailwindLogo
    },
    {
        id: 6,
        techName: 'Hono',
        techLogo: HonoLogo
    },
    {
        id: 7,
        techName: 'GitHub',
        techLogo: GitHubLogo
    },
    {
        id: 8,
        techName: 'Material-UI',
        techLogo: MaterialUILogo
    },
    {
        id: 9,
        techName: 'Azure',
        techLogo: AzureLogo
    },
    {
        id: 10,
        techName: 'MSSQL',
        techLogo: MSSQLLogo
    },
    {
        id: 11,
        techName: 'Postgres',
        techLogo: PostgresLogo
    },
    {
        id: 12,
        techName: 'Azure Cosmos',
        techLogo: AzureCosmosLogo
    }
]