
const About = () => {
    return (
        <section className="flex flex-col  h-fit  pb-8 px-4 md:px-8">
            <h1 className="text-xl md:text-4xl font-bold text-[#00df9a] pb-4 ">About Me</h1>
            <p className="text-lg md:text-xl leading-8  text-text-light w-full md:w-3/4 h-fit">
                I'm a software engineering student at <a href="https://www.kyu.ac.ke/" target="_blank" className="text-[#00df9a] ">Kirinyaga University</a> in Kenya.
                Passionate about technology and software development. I have expertise in React, Node, PostgresSQL,Microsoft SQL Server, C# .NET, TypeScript and Azure Cloud.
                I'm a technical writer at <a href="https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/1847250" target="_blank" className="text-[#00df9a]">Microsoft Tech Community</a>,
                where I write articles to skill up developers on Azure Cloud and other Microsoft technologies.
                I'm a <a href="https://mvp.microsoft.com/en-US/studentambassadors/profile/42428922-70f4-4d1c-b2fe-f6840b30739c" target="_blank" className="text-[#00df9a]">Gold Microsoft Learn student ambassador</a>,
                where I encourage students skill up on Microsoft technologies and making an impact in their community.
                I'm also the chairperson at the <a href="https://www.linkedin.com/company/computer-society-of-kirinyaga" target="_blank" className="text-[#00df9a]">Computer Society of Kirinyaga</a>,
                where I mobilize students to share, participate and develop technical skills.
            </p>
        </section>
    )
}

export default About