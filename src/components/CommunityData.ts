
import awardedCert from '../assets/images/communityPhotos/Mark-kemboi.jpeg'
import atTheJitu from '../assets/images/communityPhotos/atTheJitu.jpg'
import cskLeadsAfterMeeting from '../assets/images/communityPhotos/mlsaLeadsCafeteria.jpg'
import kyuTechLadiesGroupPhoto from '../assets/images/communityPhotos/kyutechLadiesgroupPhotos.jpeg'
import KyuAzureDayGroup from '../assets/images/communityPhotos/azureDayGroupPhoto.jpg'
import certAWardChair from '../assets/images/communityPhotos/certAward.jpg'
import cskAnnualGroup from '../assets/images/communityPhotos/annualCSKGroup.jpg'
import meandKathuri from '../assets/images/communityPhotos/meandKathuri.jpg'
import leadsGoldFlag from '../assets/images/communityPhotos/leadsGoldFlag.jpg'
import newLeadsPhoto from '../assets/images/communityPhotos/newLeadsCSK.jpg'
import meGoldFlag from '../assets/images/communityPhotos/meGoldFlag.jpg'
import infosessionCommunity from '../assets/images/communityPhotos/infosessionCommunity.jpg'
import makingPresentation from '../assets/images/communityPhotos/makingPresentation.jpg'
import teach2GiveGroupPhoto from '../assets/images/communityPhotos/teach2GiveGroupPhoto.jpg'
import certAwardTeach2Give from '../assets/images/communityPhotos/certAwardTeach2Give.jpg'
import KirinyagaCohortTeach2Give from '../assets/images/communityPhotos/KirinyagaCohortTeach2Give.jpeg'
import zetechCampusTour from '../assets/images/communityPhotos/zetechCampusTour.jpeg'

type CommunityPhotos = {
    image: string;
    alt: string;
    caption: string;
}

export const communityPhotosData: CommunityPhotos[] = [
    {
        image: awardedCert,
        alt: 'Mark Kemboi',
        caption: 'Awared a Certificate by Mark E. Allen The Chief Operating Officer – Jitu'
    },
    {
        image: atTheJitu,
        alt: 'At Jitu',
        caption: 'Graduation Day at the Jitu after completing the Software Development Training'
    },
    {
        image: cskLeadsAfterMeeting,
        alt: 'CSK Leads After Meeting',
        caption: 'CSK Leads Group Photo after meeting in Kirinyaga University'
    },
    {
        image: kyuTechLadiesGroupPhoto,
        alt: 'Kyu Tech Ladies Group Photo',
        caption: 'A group Photo after attending the Kyu Tech Ladies Workshop'
    },
    {
        image: KyuAzureDayGroup,
        alt: 'Kyu Azure Day Group',
        caption: 'Group Photo after hosting the Kyu Azure Day Event'
    },
    {
        image: certAWardChair,
        alt: 'Cert Award Chair',
        caption: 'Certificate of Appreciation by Dr. Malanga after serving as the event organizer in CSK'
    },
    {
        image: cskAnnualGroup,
        alt: 'CSK Annual Group',
        caption: ' Group Photo after attending CSK Annual Event in Kirinyaga University'
    },
    {
        image: meandKathuri,
        alt: 'Me and Kathuri',
        caption: 'Denis Kathuri (CSK Vice Chair) and I after attending the CSK Annual Event in Kirinyaga University'
    },
    {
        image: leadsGoldFlag,
        alt: 'Leads Gold Flag',
        caption: 'A celebratory Mood as we raise the Gold MLSA Scurf in Kirinyaga University'
    },
    {
        image: newLeadsPhoto,
        alt: 'New Leads CSK',
        caption: 'New Leads Group Photo after the handover ceremony in Computer Society of Kirinyaga'
    },
    {
        image: meGoldFlag,
        alt: 'Me Gold Flag',
        caption: 'A celebratory Mood as I raise the Gold MLSA Scurf very excited to be part of the Community'
    },
    {
        image: certAwardTeach2Give,
        alt: 'Cert Award Teach2Give',
        caption: 'Certificate of Appreciation from Sheila Chomba a Software Analyst after completing the Software Development Training.'
    },
    {
        image: KirinyagaCohortTeach2Give,
        alt: 'Kirinyaga Cohort Teach2Give',
        caption: 'Group Photo dor Kirinyaga Univeristy Cohort after completing the Software Development Training at Teach2Give'
    },
    {
        image: teach2GiveGroupPhoto,
        alt: 'teach2GiveGroupPhoto',
        caption: 'A group photo of graduating cohort at Teach2Give Office in Nyeri after software development training'

    },
    {
        image: zetechCampusTour,
        alt: 'Zetech Campus Tour',
        caption: 'Group Photo at Zetech University after attending the Campus Tours hosted by Microsoft ADC Nairobi'
    },
    {
        image: makingPresentation,
        alt: 'Making Presentation',
        caption: 'Making a Presentation in Computer Society of Kirinyaga to welcome new members and lounching of CSK Web application'
    },
    {
        image: infosessionCommunity,
        alt: 'Infosession Community',
        caption: 'Group Photo after hosting an Information Session in Computer Society of Kirinyaga 2024'
    },
]