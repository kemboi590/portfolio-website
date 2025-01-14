
import AzureAIEngineerAssociate from '../assets/images/certifications/Azure-AI-Engineer-Associate-LOGO.png'
import AzureFundamentals from '../assets/images/certifications/Azure-Fundamentals-Logo.png'
import AzureAIFundamentals from '../assets/images/certifications/Azure-AI-Fundamentals-Logo.png'
import CSharp from '../assets/images/certifications/C-sharp-Microsoft-Logo.jpeg'
import SERNStack from '../assets/images/certifications/SERN-Stack-Developer-Logo.png'
import MSAStudentTrainer from '../assets/images/certifications/MLSA-Trainer-Logo.png'
import MSAStudentMentor from '../assets/images/certifications/MLSA-Mentor.png'
import MSAStudentMentee from '../assets/images/certifications/MLSA-mentee-Logo.png'
import AzureDBMySQLEmerald from '../assets/images/certifications/mySQL-Emerald-Logo.png'
import AzureDBMySQLGold from '../assets/images/certifications/mySQL-Gold-Logo.png'
import MVPBadge from '../assets/images/certifications/MVPBadge.png'

interface TypeCertification {
    id: number;
    certLogo: string;
    certTitle: string;
    certLink: string;
}

export const CertificationData: TypeCertification[] = [
    {
        id: 1,
        certLogo: AzureAIEngineerAssociate,
        certTitle: 'Microsoft Certified: Azure AI Engineer Associate',
        certLink: 'https://learn.microsoft.com/api/credentials/share/en-us/BrianKemboi-8686/54A880168634AD47?sharingId=F3C1BA3926A133BD'
    },
    {
        id: 2,
        certLogo: AzureFundamentals,
        certTitle: 'Microsoft Certified: Azure Fundamentals',
        certLink: 'https://learn.microsoft.com/api/credentials/share/en-us/BrianKemboi-8686/F3FA5B287417BE1B?sharingId=F3C1BA3926A133BD'
    },
    {
        id: 3,
        certLogo: AzureAIFundamentals,
        certTitle: 'Microsoft Certified: Azure AI Fundamentals',
        certLink: 'https://learn.microsoft.com/api/credentials/share/en-us/BrianKemboi-8686/F3FA5B287417BE1B?sharingId=F3C1BA3926A133BD'
    },
    {
        id: 4,
        certLogo: CSharp,
        certTitle: 'Foundational C# with Microsoft',
        certLink: 'https://www.freecodecamp.org/certification/fcca831935a-2d31-479a-bd5b-25f6d3913959/foundational-c-sharp-with-microsoft'
    },
  
    {
        id: 5,
        certLogo: MVPBadge,
        certTitle: 'Microsoft MVP Award',
        certLink: 'https://stdntpartners-my.sharepoint.com/:b:/g/personal/brian_kemboi_studentambassadors_com/EYIyNAdGpmlOujk_oJhf0_QBEVJnt0WnP9CmSmalSJzwHg?e=ydkU9N'
    },
    {
        id: 6,
        certLogo: SERNStack,
        certTitle: 'SERN Stack Developer',
        certLink: 'https://stdntpartners-my.sharepoint.com/:i:/g/personal/brian_kemboi_studentambassadors_com/ET0y_4DQE8dPmevniCsnJrIBC3wNjK8k9cRiVCIReuBVGQ?e=ygKvaG'
    },
    {
        id: 7,
        certLogo: MSAStudentTrainer,
        certTitle: 'Microsoft Learn Student Ambassadors Student Trainer',
        certLink: 'https://www.credly.com/badges/18f07a50-581f-4252-a288-f63bfa3180bd/linked_in_profile'
    },
    {
        id: 8,
        certLogo: MSAStudentMentor,
        certTitle: 'Microsoft Learn Student Ambassadors Mentor',
        certLink: 'https://www.credly.com/badges/b97d71c1-957a-41c1-bc68-92925a0d162d/linked_in_profile'
    },
    {
        id: 9,
        certLogo: MSAStudentMentee,
        certTitle: 'Microsoft Learn Student Ambassadors Mentee',
        certLink: 'https://www.credly.com/badges/833820ee-6731-4195-82a6-ecfeb02104a7/public_url'
    },
    {
        id: 10,
        certLogo: AzureDBMySQLEmerald,
        certTitle: 'Azure Database for MySQL - Emerald Contributor',
        certLink: 'https://www.credly.com/badges/cbf32685-e02f-41f8-8a08-e7eee076234b/public_url'
    },
    {
        id: 11,
        certLogo: AzureDBMySQLGold,
        certTitle: 'Azure Database for MySQL - Gold Contributor',
        certLink: 'https://www.credly.com/badges/13cf3216-54c3-48cf-b287-9b70597762dd/public_url'
    }
]