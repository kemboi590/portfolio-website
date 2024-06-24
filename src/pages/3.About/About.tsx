
const About = () => {
    return (
        //  the default color of a link in taiwind is 
        <section className="flex flex-col  h-fit  pb-8 px-4 md:px-8">
            <h1 className="text-4xl font-bold text-[#00df9a] ">About Me</h1>
            <p className="text-lg text-text-light text-justify w-full md:w-3/4 ">
                I'm a software engineering student at <a href="https://www.kyu.ac.ke/"  target="_blank" className="text-[#00df9a] ">Kirinyaga University</a> in Kenya.
                Passionate about technology and software development, expertise in React, Node, PostgresSQL,Microsoft SQL Server C# .NET, Typecript and Azure Cloud.
                I'm a technical writer at <a href="https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/1847250"  target="_blank" className="text-[#00df9a]">Microsoft Tech Community</a>,
                where I write articles to skill up developers on Azure Cloud and other Microsoft technologies.
                I'm a <a href="https://mvp.microsoft.com/en-US/studentambassadors/profile/42428922-70f4-4d1c-b2fe-f6840b30739c"  target="_blank" className="text-[#00df9a]">Gold Microsoft Learn student ambassador</a>,
                where I help students skill up on Microsoft technologies and Azure Cloud.
                I'm also the Chairperson in <a href="https://www.linkedin.com/company/computer-society-of-kirinyaga" target="_blank" className="text-[#00df9a]">Computer Society of Kirinyaga</a>,
                where I mobilize students to share, participate and develop technical skills.
            </p>
        </section>


    )
}

export default About