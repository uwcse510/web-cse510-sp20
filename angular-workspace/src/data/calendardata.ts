import * as moment from 'moment';
import { Moment } from 'moment';

// interface Location {
//   time: string;
//   location: string;
// }
//
// interface Lecture {
//   date: Date|Moment;
//   name?: string;
//   location?: Location[];
//   locationName?: string;
//   slides?: string;
//   panopto?: string;
// }
//
// interface Major {
//   date: Date|Moment;
//   name?: string;
//   link?: string;
//   location?: Location[];
//   locationName?: string;
// }
//
// interface OfficeHour {
//   date: Date|Moment;
//   name?: string;
//   location?: Location[];
//   locationName?: string;
// }
//
// interface Section {
//   date: Date|Moment;
//   name?: string;
//   location?: Location[];
//   locationName?: string;
//   slides?: string;
//   panopto?: string;
// }

export interface Reading {
  authorText: string;
  title: string;
  publicationText: string;
  link: string;
}

interface ReadingsStandard {
  framing: Reading;
  additional: Reading[];
}

interface Lecture {
  name: string;

  contentNonstandard?: string;

  readingsStandard?: ReadingsStandard;
  readingsNonstandard?: Reading[];

  additionalResources?: Reading[];
}

interface Date {
  date: Moment;
  lecture?: Lecture;
}

class CalendarData {
  linkCanvasDiscussion = 'https://canvas.uw.edu/courses/1371984/discussion_topics';

  dates: Date[] = [
    // Week 1
    {
      date: moment('2020-03-31', 'YYYY-MM-DD'),
      lecture: {
        name: 'Introduction and Overview',
        contentNonstandard: 'no_reading',
      }
    },
    {
      date: moment('2020-04-02', 'YYYY-MM-DD'),
      lecture: {
        name: 'Human-Computer Interaction History',
        contentNonstandard: 'no_reading',
        additionalResources: [
          {
            authorText: 'Jonathan Grudin',
            title: 'A Moving Target - The Evolution of Human-Computer Interaction',
            publicationText: 'Book Chapter',
            link: 'https://canvas.uw.edu/files/63194617/download?download_frd=1'
          }
        ]
      }
    },
    // Week 2
    {
      date: moment('2020-04-07', 'YYYY-MM-DD'),
      lecture: {
        name: 'Visions of Human-Computer Interaction',
        contentNonstandard: 'visions_of_hci',
        readingsNonstandard: [
          {
            authorText: 'Vannevar Bush',
            title: 'As We May Think',
            publicationText: 'The Atlantic, 1945',
            link: 'https://theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/'
          },
          {
            authorText: 'Mark Weiser',
            title: 'The Computer for the 21st Century',
            publicationText: 'Scientific American, 1991',
            link: 'https://canvas.uw.edu/files/63210288/download?download_frd=1'
          },
          {
            authorText: 'Roy Want, Andy Hopper, Veronica Falcão, Jonathan Gibbons',
            title: 'The Active Badge Location System',
            publicationText: 'TOIS 1992',
            link: 'https://canvas.uw.edu/files/63210286/download?download_frd=1'
          },
          {
            authorText: 'James D. Hollan, Scott Stornetta',
            title: 'Beyond Being There',
            publicationText: 'CHI 1992',
            link: 'https://canvas.uw.edu/files/63210295/download?download_frd=1'
          },
          {
            authorText: 'Pierre Wellner',
            title: 'Interacting with Paper on the DigitalDesk',
            publicationText: 'CACM 1993',
            link: 'https://canvas.uw.edu/files/63210290/download?download_frd=1'
          },
          {
            authorText: 'Benjamin B. Bederson, James D. Hollan',
            title: 'Pad++: A Zooming Graphical Interface for Exploring Alternate Interface Physics',
            publicationText: 'UIST 1994',
            link: 'https://canvas.uw.edu/files/63210292/download?download_frd=1'
          },
          {
            authorText: 'Hiroshi Ishii, Brygg Ullmer',
            title: 'Tangible Bits: Towards Seamless Interfaces between People, Bits and Atoms',
            publicationText: 'CHI 1997',
            link: 'https://canvas.uw.edu/files/63210298/download?download_frd=1'
          },
          {
            authorText: 'Eric Horvitz',
            title: 'Principles of Mixed-Initiative User Interfaces',
            publicationText: 'CHI 1999',
            link: 'https://canvas.uw.edu/files/63210296/download?download_frd=1'
          },
          {
            authorText: 'Ken Hinckley, Jeff Pierce, Mike Sinclair, Eric Horvitz',
            title: 'Sensing Techniques for Mobile Interaction',
            publicationText: 'UIST 2000',
            link: 'https://canvas.uw.edu/files/63210294/download?download_frd=1'
          },
          {
            authorText: 'Claudio S. Pinhanez',
            title: 'The Everywhere Displays Projector: A Device to Create Ubiquitous Graphical Interfaces',
            publicationText: 'UbiComp 2001',
            link: 'https://canvas.uw.edu/files/63210283/download?download_frd=1'
          },
          {
            authorText: 'Roy Want, Trevor Pering, Gunner Danneels, Muthu Kumar, Murali Sundar, John Light',
            title: 'The Personal Server: Changing the Way We Think about Ubiquitous Computing',
            publicationText: 'UbiComp 2002',
            link: 'https://canvas.uw.edu/files/63210286/download?download_frd=1'
          },
          {
            authorText: 'Brett Victor',
            title: 'Magic Ink: Information Software and the Graphical Interface',
            publicationText: 'http://worrydream.com/MagicInk/',
            link: '2006'
          },
        ]
      }
    },
    {
      date: moment('2020-04-09', 'YYYY-MM-DD'),
      lecture: {
        name: 'Contributions in Human-Computer Interaction',
        contentNonstandard: 'contributions_in_hci',
        readingsNonstandard: [
          {
            authorText: 'Jacob O. Wobbrock, Julie A. Kientz',
            title: 'Research Contributions in Human-Computer Interaction',
            publicationText: 'Interactions, 2016',
            link: 'https://canvas.uw.edu/files/63210322/download?download_frd=1'
          },
          // Empirical
          {
            authorText: 'Nithya Sambasivan, Amna Batool, Nova Ahmed, Tara Matthews, Kurt Thomas, Laura Sanely Gaytán-Lugo, David Nemer, Elie Bursztein, Elizabeth Churchill, Sunny Consolvo',
            title: '"They don’t leave us alone anywhere we go": Gender and Digital Abuse in South Asia',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300232'
          },
          {
            authorText: 'John Harris, Mark Hancock',
            title: 'To Asymmetry and Beyond!: Improving Social Connectedness by Increasing Designed Interdependence in Cooperative Play',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300239'
          },
          {
            authorText: 'Tawanna Dillahunt, Sylvia Simioni, Xuecong Xu',
            title: 'Online Grocery Delivery Services: An Opportunity to Address Food Disparities in Transportation-scarce Areas',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300879'
          },
          // Artifact
          {
            authorText: 'Jotaro Shigeyama, Takeru Hashimoto, Shigeo Yoshida, Takuji Narumi, Tomohiro Tanikawa, Michitaka Hirose',
            title: 'Transcalibur: A Weight Shifting Virtual Reality Controller for 2D Shape Rendering based on Computational Perception Model',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300241'
          },
          {
            authorText: 'Carrie J Cai, Emily Reif, Narayan Hegde, Jason Hipp, Been Kim, Daniel Smilkov, Martin Wattenberg, Fernanda Viegas, Greg S Corrado, Martin Stumpe, Michael Terry',
            title: 'Human-Centered Tools for Coping with Imperfect Algorithms During Medical Decision-Making',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300234'
          },
          {
            authorText: 'Manaswi Saha, Michael Saugstad, Hanuma Teja Maddali, Aileen Zeng, Ryan Holland, Steven Bower, Aditya Dash, Sage Chen, Anthony Li, Kotaro Hara, Jon Froehlich',
            title: 'Project Sidewalk: A Web-based Crowdsourcing Tool for Collecting Sidewalk Accessibility Data At Scale',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300292'
          },
          // Methodological
          {
            authorText: 'Alexis Hiniker, Jon Froehlich, Mingrui Ray Zhang, Erin Beneteau',
            title: 'Anchored Audio Sampling: A Seamless Method for Exploring Children’s Thoughts During Deployment Studies',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300238'
          },
          {
            authorText: 'Cara Wilson, Margot Brereton, Bernd Ploderer, Laurianne Sitbon',
            title: 'Co-Design Beyond Words: "Moments of Interaction" with Minimally-Verbal Children on the Autism Spectrum',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300251'
          },
          {
            authorText: 'Juergen Baumgartner, Naomi Frei, Mascha Kleinke, Juergen Sauer, Andreas Sonderegger',
            title: 'Pictorial System Usability Scale (P-SUS): Developing an Instrument for Measuring Perceived Usability',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300299'
          },
          // Theoretical
          {
            authorText: 'Lucas Franco Colusso, Ridley Jones, Sean A. Munson, Gary Hsieh',
            title: 'A Translational Science Model for HCI',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300231'
          },
          {
            authorText: 'Jocelyn Spence',
            title: 'Inalienability: Understanding Digital Gifts',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300887'
          },
          {
            authorText: 'Ali Alkhatib, Michael Bernstein',
            title: 'Street-Level Algorithms: A Theory at the Gaps Between Policy and Decisions',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300760'
          },
          // Benchmark/Dataset
          {
            authorText: 'Matin Yarmand, Dongwook Yoon, Samuel Dodson, Ido Roll, Sidney S Fels',
            title: '"Can you believe [1:21]?!": Content and Time-Based Reference Patterns in Video Comments',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300719'
          },
          {
            authorText: 'Radu-Daniel Vatavu, Ovidiu-Ciprian Ungurean',
            title: 'Stroke-Gesture Input for People with Motor Impairments: Empirical Results & Research Roadmap',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300445'
          },
          {
            authorText: 'Kevin Hu, Snehalkumar ‘Neil’ S. Gaikwad, Michiel Bakker, Madelon Hulsebos, Emanuel Zgraggen, César Hidalgo, Tim Kraska, Guoliang Li, Arvind Satyanarayan, Çağatay Demiralp',
            title: 'VizNet: Towards A Large-Scale Visualization Learning and Benchmarking Repository',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300892'
          },
          // Survey
          {
            authorText: 'Mehmet Aydın Baytaş, Damla Çay, Yuchong Zhang, Mohammad Obaid, Asım Evren Yantaç, Morten Fjeld',
            title: 'The Design of Social Drones: A Review of Studies on Autonomous Flyers in Inhabited Environments',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300480'
          },
          {
            authorText: 'Frederik Brudy, Christian Holz, Roman Rädle, Chi-Jui Wu, Steven Houben, Clemens Nylandsted Klokmose, Nicolai Marquardt',
            title: 'Cross-Device Taxonomy: Survey, Opportunities and Challenges of Interactions Spanning Across Multiple Devices',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300792'
          },
          {
            authorText: 'Ana Caraban, Evangelos Karapanos, Pedro Campos, Daniel Gonçalves',
            title: '23 Ways to Nudge: A Review of Technology-Mediated Nudging in Human-Computer Interaction',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300733'
          },
          // Opinion
          {
            authorText: 'Laura Devendorf, Kristina Andersen, Daniela K. Rosner, Ron Wakkary, James Pierce.',
            title: 'From HCI to HCI-Amusement: Strategies for Engaging what New Technology Makes Old',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300265'
          },
          {
            authorText: 'Sarah Inman, David Ribes',
            title: '"Beautiful Seams": Strategic Revelations and Concealments',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300508'
          },
          {
            authorText: 'Richmond Y. Wong, Deirdre Mulligan',
            title: 'Bringing Design to the Privacy Table: Broadening "Design" in "Privacy by Design" Through the Lens of HCI',
            publicationText: 'CHI 2019',
            link: 'https://dl.acm.org/doi/10.1145/3290605.3300492'
          },
        ],
        additionalResources: [
          {
            authorText: 'Herbert A. Simon',
            title: 'The Science of Design: Creating the Artificial',
            publicationText: 'Design Issues, 1988',
            link: 'https://canvas.uw.edu/files/63210319/download?download_frd=1'
          },
          {
            authorText: 'Donald E. Stokes',
            title: 'Pasteur’s Quadrant: Basic Science and Technological Innovation',
            publicationText: 'Book Chapter, 1997',
            link: 'https://canvas.uw.edu/files/63210343/download?download_frd=1'
          },
        ]
      }
    },
    // Week 3
    {
      date: moment('2020-04-14', 'YYYY-MM-DD'),
      lecture: {
        name: 'Usability Evaluation Considered Harmful',
        readingsStandard: {
          framing: {
            authorText: 'Saul Greenberg, Bill Buxton',
            title: 'Usability Evaluation Considered Harmful (Some of the Time)',
            publicationText: 'CHI 2008',
            link: 'https://canvas.uw.edu/files/63195019/download?download_frd=1'
          },
          additional: [
            {
              authorText: 'Dan R. Olsen, Jr',
              title: 'Evaluating User Interface Systems Research',
              publicationText: 'UIST 2007',
              link: 'https://canvas.uw.edu/files/63195038/download?download_frd=1'
            },
            {
              authorText: 'James Fogarty',
              title: 'Code and Contribution in Interactive Systems Research',
              publicationText: 'CHI 2017 Workshop on #HCI.Tools: Strategies and Best Practices for Designing, Evaluating, and Sharing Technical HCI Toolkits',
              link: 'https://canvas.uw.edu/files/63195022/download?download_frd=1'
            }
          ]
        }
      }
    },
    {
      date: moment('2020-04-16', 'YYYY-MM-DD'),
      lecture: {
        name: 'Project Proposal Presentations',
      }
    },
    // Week 4
    {
      date: moment('2020-04-21', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
    {
      date: moment('2020-04-23', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
    // Week 5
    {
      date: moment('2020-04-28', 'YYYY-MM-DD'),
      lecture: {
        name: 'CHI 2020 Virtual Conference',
      }
    },
    {
      date: moment('2020-04-30', 'YYYY-MM-DD'),
      lecture: {
        name: 'CHI 2020 Virtual Conference',
      }
    },
    // Week 6
    {
      date: moment('2020-05-05', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
    {
      date: moment('2020-05-07', 'YYYY-MM-DD'),
      lecture: {
        name: 'Project Milestone Presentations',
      }
    },
    // Week 7
    {
      date: moment('2020-05-12', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
    {
      date: moment('2020-05-14', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
    // Week 8
    {
      date: moment('2020-05-19', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
    {
      date: moment('2020-05-21', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
    // Week 9
    {
      date: moment('2020-05-26', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
    {
      date: moment('2020-05-28', 'YYYY-MM-DD'),
      lecture: {
        name: 'Project Milestone Presentations',
      }
    },
    // Week 10
    {
      date: moment('2020-06-02', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
    {
      date: moment('2020-06-04', 'YYYY-MM-DD'),
      lecture: {
        name: 'Research Topic: TBD',
      }
    },
  ];
  //
  // datesOfInstruction = {
  //   start: moment('Sun 2020-03-29', 'ddd YYYY-MM-DD'),  // Must be a Sunday
  //   end:   moment('Sat 2020-03-21', 'ddd YYYY-MM-DD')   // Must be a Saturday
  // };
  //
  // locations = {
  //   lecture: [
  //     {
  //       time: '11:30 - 12:50',
  //       location: 'NAN 181'
  //     }
  //   ],
  //
  //   section: [
  //     {
  //       time: '10:30 - 11:20',
  //       location: 'MGH 295'
  //     },
  //     {
  //       time: '11:30 - 12:20',
  //       location: 'MGH 295'
  //     },
  //     {
  //       time: '1:30 - 2:20',
  //       location: 'MGH 295'
  //     },
  //     {
  //       time: '2:30 - 3:20',
  //       location: 'MGH 295'
  //     }
  //   ],
  //
  //   sectionMorningOnly: [
  //     {
  //       time: '10:30 - 11:20',
  //       location: 'MGH 295'
  //     },
  //     {
  //       time: '11:30 - 12:20',
  //       location: 'MGH 058'
  //     }
  //   ],
  //
  //   sectionAfternoonOnly: [
  //     {
  //       time: '1:30 - 2:20',
  //       location: 'MGH 295'
  //     },
  //     {
  //       time: '2:30 - 3:20',
  //       location: 'MGH 295'
  //     }
  //   ],
  //
  //   posterSession: [
  //     {
  //       time: '11:30 - 12:50',
  //       location: 'Allen Atrium'
  //     }
  //   ],
  //
  //   examQA: [
  //     {
  //       time: "12:30 to 1:20",
  //       location: "CSE 305",
  //     },
  //     {
  //       time: "4:30 to 5:20",
  //       location: "CSE 305",
  //     }
  //   ],
  //
  //   officeHourJames: [
  //     {
  //       time: "3:30 - 4:30",
  //       location: "Allen 632"
  //     }
  //   ],
  //   officeHourJames230: [
  //     {
  //       time: "2:30 - 3:30",
  //       location: "Allen 632"
  //     }
  //   ],
  //   officeHourJesse: [
  //     {
  //       time: "2:00 to 3:00",
  //       location: "Allen 4th Floor Breakout"
  //     }
  //   ],
  //   officeHourQisheng: [
  //     {
  //       time: "10:00 to 11:00",
  //       location: "Allen 4th Floor Breakout"
  //     }
  //   ],
  // };
  //
  // holidays = [
  //   {
  //     date: moment('2020-01-20', 'YYYY-MM-DD'),
  //     name: 'Martin Luther King Day'
  //   },
  //   {
  //     date: moment('2020-02-17', 'YYYY-MM-DD'),
  //     name: 'Presidents Day'
  //   }
  // ];
  //
  // lectures: Lecture[] = [
  //   {
  //     date: moment('2020-01-07', 'YYYY-MM-DD'),
  //     name: 'Introduction,<br>Project Overview',
  //     slides: 'https://canvas.uw.edu/files/60961965/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=31ab7564-8ef6-4af9-b6fb-ab3701635630'
  //   },
  //   {
  //     date: moment('2020-01-09', 'YYYY-MM-DD'),
  //     name: 'Design Diamond',
  //     // Theoretical basis for expand/contract in design, should go early
  //     // Includes IDEO video, which works well early
  //     // Allows explaining the assignment milestones if needed
  //     slides: 'https://canvas.uw.edu/files/61053889/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?folderID=574a2073-b4f8-4066-8af1-ab3d01653ac7'
  //   },
  //   {
  //     date: moment('2020-01-14', 'YYYY-MM-DD'),
  //     name: 'Design Research,<br>Contextual Inquiry',
  //     // Required for 2b planning of design research over weekend
  //     // Can allow pre-project-team in-class exercise considering
  //     // strengths/weakness of different design research methods for a project
  //     slides: 'https://canvas.uw.edu/files/61128340/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b2c8b42e-b50c-44ab-b5b7-ab3701635fd1'
  //   },
  //   {
  //     date: moment('2020-01-16', 'YYYY-MM-DD'),
  //     name: 'Design of Everyday Things',
  //     slides: 'https://canvas.uw.edu/files/61228282/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=30a24020-cd53-4c77-b246-ab370163624e'
  //   },
  //   // Critique
  //   {
  //     date: moment('2020-01-23', 'YYYY-MM-DD'),
  //     name: 'Task Analysis',
  //     // Required for Project 2d
  //     slides: 'https://canvas.uw.edu/files/61382938/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e534607f-6964-4bdb-90bf-ab3701636c2b'
  //   },
  //   {
  //     date: moment('2020-01-28', 'YYYY-MM-DD'),
  //     name: 'Models and<br>Human Performance',
  //     slides: 'https://canvas.uw.edu/files/61520093/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cc11c102-4505-4fe1-8849-ab370163705d'
  //   },
  //   {
  //     date: moment('2020-01-30', 'YYYY-MM-DD'),
  //     name: 'Storyboarding,<br>Video Prototyping',
  //     // Required for 2g
  //     // Doing before 2f allows including a bit of a refresh on sketching
  //     slides: 'https://canvas.uw.edu/files/61594332/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9b4c495b-3bff-4840-9ec8-ab3701637161'
  //   },
  //   {
  //     date: moment('2020-02-04', 'YYYY-MM-DD'),
  //     name: 'Paper Prototyping,<br>Usability Testing',
  //     // Required for 3a
  //     slides: 'https://canvas.uw.edu/files/61688739/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9fb82521-aeb4-4881-9c23-ab370163747d'
  //   },
  //   {
  //     date: moment('2020-02-06', 'YYYY-MM-DD'),
  //     name: 'Presentations,<br>Patterns,<br>Interface Implementation',
  //     // Should be week before Assignment 2 presentations,
  //     // so they can benefit from this as this as they make their presentations
  //     slides: 'https://canvas.uw.edu/files/61790464/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e845f40f-ec29-4497-b38f-ab37016374d6'
  //   },
  //   {
  //     date: moment('2020-02-11', 'YYYY-MM-DD'),
  //     name: 'History',
  //     slides: 'https://canvas.uw.edu/files/61913669/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0a4a66e0-9474-4bfb-8906-ab3701637731'
  //   },
  //   // Presentations
  //   // Inspection
  //   // Usability Evaluation Considered Harmful
  //   // Exam
  //   {
  //     date: moment('2020-02-27', 'YYYY-MM-DD'),
  //     name: 'Designing for Diverse Needs',
  //     slides: 'https://canvas.uw.edu/files/62370175/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=36142580-e2f4-465b-9af7-ab3701638612'
  //   },
  //   // Visual Critique
  //   // Presentations
  //   // Video Critique
  // ];
  //
  // sections: Section[] = [
  //   {
  //     date: moment('2020-01-10', 'YYYY-MM-DD'),
  //   },
  //   {
  //     date: moment('2020-01-17', 'YYYY-MM-DD'),
  //   },
  //   {
  //     date: moment('2020-01-21', 'YYYY-MM-DD'),
  //     name: 'Critique',
  //     locationName: 'lecture',
  //     // Required to be day that 2b is due, includes in-class critique of 2b
  //     slides: 'https://canvas.uw.edu/files/61308777/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a08804f4-a7ee-4421-bc3b-ab37016369e1'
  //   },
  //   {
  //     date: moment('2020-01-24', 'YYYY-MM-DD'),
  //   },
  //   {
  //     date: moment('2020-01-31', 'YYYY-MM-DD'),
  //   },
  //   {
  //     date: moment('2020-02-07', 'YYYY-MM-DD'),
  //   },
  //   // Presentations
  //   {
  //     date: moment('2020-02-18', 'YYYY-MM-DD'),
  //     name: 'Inspection',
  //     locationName: 'lecture',
  //     // Required to be day that 3a is due, includes in-class start on 3b'
  //     slides: 'https://canvas.uw.edu/files/62076599/download?download_frd=1',
  //     panopto: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7960f5e5-c565-45f1-a874-ab37016381db'
  //   },
  //   {
  //     date: moment('2020-02-20', 'YYYY-MM-DD'),
  //     name: 'Usability Evaluation<br>Considered Harmful',
  //     locationName: 'lecture',
  //     slides: 'https://canvas.uw.edu/files/62136953/download?download_frd=1'
  //   },
  //   {
  //     date: moment('2020-02-21', 'YYYY-MM-DD'),
  //   },
  //   {
  //     date: moment('2020-02-28', 'YYYY-MM-DD'),
  //   },
  //   // Presentations
  //   {
  //     date: moment('2020-03-03', 'YYYY-MM-DD'),
  //     name: 'Visual Critique',
  //     locationName: 'lecture'
  //     // slides: ''
  //   },
  //   // {
  //   //   date: moment('2020-03-10', 'YYYY-MM-DD'),
  //   //   name: 'Video Critique',
  //   //   locationName: 'lecture'
  //   //   // slides: ''
  //   // },
  //   // {
  //   //   date: moment('2020-03-13', 'YYYY-MM-DD'),
  //   // },
  //   // Exam Q&A
  //   {
  //     date: moment('2020-02-24', 'YYYY-MM-DD'),
  //     name: 'Exam Q&A',
  //     locationName: 'examQA',
  //     slides: 'https://canvas.uw.edu/files/62078869/download?download_frd=1'
  //   },
  // ];
  //
  // majors: Major[] = [
  //   {
  //     date: moment('2020-02-13', 'YYYY-MM-DD'),
  //     name: 'Presentations',
  //     locationName: 'lecture',
  //     link: '/assignments/assignment2#id-2i-presentation'
  //   },
  //   {
  //     date: moment('2020-02-14', 'YYYY-MM-DD'),
  //     name: 'Presentations',
  //     locationName: 'section',
  //     link: '/assignments/assignment2#id-2i-presentation'
  //   },
  //   {
  //     date: moment('2020-02-25', 'YYYY-MM-DD'),
  //     name: 'Exam',
  //     locationName: 'lecture',
  //     // link: 'slides/lecture/cse440-consolidated-17au.pdf'
  //   },
  //   // {
  //   //   date: moment('2020-03-05', 'YYYY-MM-DD'),
  //   //   name: 'Presentations',
  //   //   locationName: 'lecture',
  //   //   link: '/assignments/assignment3#id-3g-presentation'
  //   // },
  //   // {
  //   //   date: moment('2020-03-06', 'YYYY-MM-DD'),
  //   //   name: 'Presentations',
  //   //   locationName: 'section',
  //   //   link: '/assignments/assignment3#id-3g-presentation'
  //   // },
  //   // {
  //   //   date: moment('2020-03-12', 'YYYY-MM-DD'),
  //   //   name: 'Poster Session',
  //   //   locationName: 'posterSession',
  //   //   link: '/assignments/assignment4#id-4p-poster-session'
  //   // }
  // ];
  //
  // assignments = [
  //   // Assignment 0
  //   {
  //     date: moment('2020-01-09', 'YYYY-MM-DD'),
  //     name: "0 - Introduction Slide",
  //     dueNote: "[due end of day]",
  //     link: "/assignments/assignment0/"
  //   },
  //
  //   // Assignment 1
  //   {
  //     date: moment('2020-01-09', 'YYYY-MM-DD'),
  //     dueNote: '[due night before section]',
  //     name: '1a - Project Brainstorm',
  //     link: '/assignments/assignment1#id-1a-proposal-brainstorm'
  //   },
  //   {
  //     date: moment('2020-01-13', 'YYYY-MM-DD'),
  //     name: '1b - Project Proposal',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment1#id-1b-project-proposal'
  //   },
  //   {
  //     date: moment('2020-01-15', 'YYYY-MM-DD'),
  //     name: '1c - Project Bid',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment1/#id-1c-project-bid'
  //   },
  //
  //   // Assignment 2
  //   {
  //     date: moment('2020-01-17', 'YYYY-MM-DD'),
  //     name: '2a - Project Ideation',
  //     dueNote: '[done in section]',
  //     link: '/assignments/assignment2#id-2a-project-ideation'
  //   },
  //   {
  //     date: moment('2020-01-20', 'YYYY-MM-DD'),
  //     name: '2b - Design Research Plan',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment2#id-2b-design-research-plan'
  //   },
  //   {
  //     date: moment('2020-01-23', 'YYYY-MM-DD'),
  //     name: '2c - Design Research Check-In',
  //     dueNote: '[due night before section]',
  //     link: '/assignments/assignment2#id-2c-design-research-check-in'
  //   },
  //   {
  //     date: moment('2020-01-27', 'YYYY-MM-DD'),
  //     name: '2d - Design Research Review',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment2#id-2d-design-research-review'
  //   },
  //   {
  //     date: moment('2020-01-30', 'YYYY-MM-DD'),
  //     name: '2e - Task Review',
  //     dueNote: '[due night before section]',
  //     link: '/assignments/assignment2#id-2e-task-review'
  //   },
  //   {
  //     date: moment('2020-02-03', 'YYYY-MM-DD'),
  //     name: '2f - Design Check-In',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment2#id-2f-design-check-in-3x4',
  //   },
  //   {
  //     date: moment('2020-02-06', 'YYYY-MM-DD'),
  //     name: '2g - Design Review',
  //     dueNote: '[due night before section]',
  //     link: '/assignments/assignment2#id-2g-design-review-1x2'
  //   },
  //   {
  //     date: moment('2020-02-12', 'YYYY-MM-DD'),
  //     name: '2p - Presentation',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment2#id-2p-presentation'
  //   },
  //   {
  //     date: moment('2020-02-17', 'YYYY-MM-DD'),
  //     name: '2web - Getting the Right Design',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment2#id-2web-getting-the-right-design'
  //   },
  //
  //   // Assignment 3
  //   {
  //     date: moment('2020-02-17', 'YYYY-MM-DD'),
  //     name: '3a - Paper Protoype',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment3#id-3a-paper-prototype'
  //   },
  //   {
  //     date: moment('2020-02-18', 'YYYY-MM-DD'),
  //     name: '3b - Heuristic Evaluation',
  //     dueNote: '[done in class]',
  //     link: '/assignments/assignment3#id-3b-heuristic-evaluation'
  //   },
  //   {
  //     date: moment('2020-02-20', 'YYYY-MM-DD'),
  //     name: '3c - Usability Testing Check-In',
  //     dueNote: '[due night before section]',
  //     link: '/assignments/assignment3#id-3c-usability-testing-check-in'
  //   },
  //   {
  //     date: moment('2020-02-27', 'YYYY-MM-DD'),
  //     name: '3d - Usability Testing Review',
  //     dueNote: '[due night before section]',
  //     link: '/assignments/assignment3#id-3d-usability-testing-review'
  //   },
  //   {
  //     date: moment('2020-03-02', 'YYYY-MM-DD'),
  //     name: '3e - Digital Mockup',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment3#id-3e-digital-mockup'
  //   },
  //   {
  //     date: moment('2020-03-10', 'YYYY-MM-DD'),
  //     name: '3web - Getting the Design Right',
  //     dueNote: '[due end of day]',
  //     link: '/assignments/assignment3#id-3web-getting-the-design-right'
  //   },
  //   {
  //     date: moment('2020-03-05', 'YYYY-MM-DD'),
  //     name: '3p - Presentation',
  //     dueNote: '[due end of day]',
  //     link: '/assignments/assignment3#id-3p-presentation'
  //   },
  //
  //   // Assignment 4
  //   {
  //     date: moment('2020-03-02', 'YYYY-MM-DD'),
  //     name: '4a - Initial Poster and Pitch',
  //     dueNote: '[due night before class]',
  //     link: '/assignments/assignment4#id-4a-initial-poster-and-pitch'
  //   },
  //   {
  //     date: moment('2020-03-09', 'YYYY-MM-DD'),
  //     name: '4b - Initial Video',
  //     dueNote: '[due end of day]',
  //     link: '/assignments/assignment4#id-4b-initial-video'
  //   },
  //   {
  //     date: moment('2020-03-09', 'YYYY-MM-DD'),
  //     name: '4c - Final Poster and Pitch',
  //     dueNote: '[due end of day]',
  //     link: '/assignments/assignment4#id-4c-final-poster-and-pitch'
  //   },
  //   {
  //     date: moment('2020-03-13', 'YYYY-MM-DD'),
  //     name: '4d - Final Video',
  //     dueNote: '[due end of day]',
  //     link: '/assignments/assignment4#id-4d-final-video'
  //   },
  //
  //   // Group Feedback
  //   {
  //     date: moment('2020-02-17', 'YYYY-MM-DD'),
  //     name: 'Group Feedback',
  //     dueNote: '[due end of day]',
  //     link: '/#group-feedback'
  //   },
  //
  //   {
  //     date: moment('2020-03-13', 'YYYY-MM-DD'),
  //     name: 'Group Feedback',
  //     dueNote: '[due end of day]',
  //     link: '/#group-feedback'
  //   },
  // ];
  //
  // officeHours: OfficeHour[] = [
  //   // James
  //   {
  //     date: moment('2020-01-14', 'YYYY-MM-DD'),
  //     name: 'Office Hours - James',
  //     locationName: 'officeHourJames'
  //   },
  //   {
  //     date: moment('2020-01-21', 'YYYY-MM-DD'),
  //     name: 'Office Hour - James',
  //     locationName: 'officeHourJames'
  //   },
  //   {
  //     date: moment('2020-01-28', 'YYYY-MM-DD'),
  //     name: 'Office Hour - James',
  //     locationName: 'officeHourJames'
  //   },
  //   {
  //     date: moment('2020-02-04', 'YYYY-MM-DD'),
  //     name: 'Office Hour - James',
  //     locationName: 'officeHourJames230'
  //   },
  //   {
  //     date: moment('2020-02-11', 'YYYY-MM-DD'),
  //     name: 'Office Hour - James',
  //     locationName: 'officeHourJames230'
  //   },
  //   {
  //     date: moment('2020-02-18', 'YYYY-MM-DD'),
  //     name: 'Office Hour - James',
  //     locationName: 'officeHourJames230'
  //   },
  //   {
  //     date: moment('2020-03-03', 'YYYY-MM-DD'),
  //     name: 'Office Hour - James',
  //     locationName: 'officeHourJames230'
  //   },
  //   // {
  //   //   date: moment('2020-03-10', 'YYYY-MM-DD'),
  //   //   name: 'Office Hour - James',
  //   //   locationName: 'officeHourJames230'
  //   // },
  //
  //   // Qisheng
  //   {
  //     date: moment('2020-01-22', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Qisheng',
  //     locationName: 'officeHourQisheng'
  //   },
  //   {
  //     date: moment('2020-01-29', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Qisheng',
  //     locationName: 'officeHourQisheng'
  //   },
  //   {
  //     date: moment('2020-02-05', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Qisheng',
  //     locationName: 'officeHourQisheng'
  //   },
  //   {
  //     date: moment('2020-02-12', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Qisheng',
  //     locationName: 'officeHourQisheng'
  //   },
  //   {
  //     date: moment('2020-02-19', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Qisheng',
  //     locationName: 'officeHourQisheng'
  //   },
  //
  //   // Jesse
  //   {
  //     date: moment('2020-01-23', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Jesse',
  //     locationName: 'officeHourJesse'
  //   },
  //   {
  //     date: moment('2020-01-30', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Jesse',
  //     locationName: 'officeHourJesse'
  //   },
  //   {
  //     date: moment('2020-02-06', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Jesse',
  //     locationName: 'officeHourJesse'
  //   },
  //   {
  //     date: moment('2020-02-13', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Jesse',
  //     locationName: 'officeHourJesse'
  //   },
  //   {
  //     date: moment('2020-02-20', 'YYYY-MM-DD'),
  //     name: 'Office Hour - Jesse',
  //     locationName: 'officeHourJesse'
  //   },
  //   // {
  //   //   date: moment('2020-03-05', 'YYYY-MM-DD'),
  //   //   name: 'Office Hour - Jesse',
  //   //   locationName: 'officeHourJesse'
  //   // },
  //   // {
  //   //   date: moment('2020-03-12', 'YYYY-MM-DD'),
  //   //   name: 'Office Hour - Jesse',
  //   //   locationName: 'officeHourJesse'
  //   // },
  // ];
  //
  // aways = [
  //   {
  //     date: moment('2020-01-07', 'YYYY-MM-DD'),
  //     name: 'Jena Away',
  //   },
  //   {
  //     date: moment('2020-01-28', 'YYYY-MM-DD'),
  //     name: 'Jena Away',
  //   },
  //   {
  //     date: moment('2020-02-10', 'YYYY-MM-DD'),
  //     name: 'Jesse Away',
  //   },
  // ];
}

export const calendar = new CalendarData();
