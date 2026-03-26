import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Niyaz',
    lastName:  'Nabi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Front End Developer 🧑🏻‍💻 ',
    avatar:    '/images/avatar.jpg',
    location:  'America/Chicago',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>To Contact me </>,
    description: <></>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/nabi06',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/niyaz-nabi-81329b228/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:niyaznabi6@gmail.com',
    },
]

const home = {
    label:"Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Front End Developer</>,
    subline: <>Niyaz 🧑🏻‍💻, currently enrolled as a student at University of North Texas and working as a front end developer. New tech knowledge is being enthusiastically learned. After hours, personal projects are being built and freelancing is being done in the full stack domain 💻 👾</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>👦🏻 Niyaz Nabi, enrolled as a student at University of North Texas and working as a full stack developer .💻 Front end for software applications is being passionately built and new technologies are being explored .📈 🧑🏻‍💻 📊 </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Vertocity',
                timeframe: '2022 - 2024',
                role: 'SDE',
                achievements: [
                    <>A SaaS product and full-stack data science projects were developed and designed, with modular, maintainable code being ensured, resulting in development time being reduced by 15%.</>,
                ],
                link: 'https://techintelli.callensights.com/',
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/image-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Visakhapatnam Port Trust ',
                timeframe: 'April 2022  - July 2022',
                role: 'SDE intern ',
                achievements: [
                    <>A responsive inventory management system was created, with data storage and retrieval efficiency being improved by 25%, and system performance being boosted by 30%.</>,
                    <>Front-end development of a dynamic web page using JavaScript, HTML, CSS was led, with REST APIs being integrated, resulting in a 20% productivity improvement</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of North texas',
                description: <>Masters in Advance Data Analytics 📈</>,
            },
            {
                name: 'Gitam University',
                description: <>Bacherlor's in Computer Science Engineer 💻 </>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Skills',
                description: <>Mern Stack Applications are being built with MongoDb, Express API, and Node js</>,
                images: [
                    {
                        src: '/images/projects/project-01/skills.jpg',
                        alt: 'Project image',
                        width: 40,
                        height: 20
                    }
                   
                ]
            },
           
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };