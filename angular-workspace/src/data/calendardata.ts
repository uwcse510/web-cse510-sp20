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
            publicationText: '2006',
            link: 'http://worrydream.com/MagicInk/'
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
}

export const calendar = new CalendarData();
