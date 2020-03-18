class SiteData {
  projectSamples = {
    offerings: [
      {
        name: "Winter 2019",
        key: "winter2019"
      },
      {
        name: "Autumn 2017",
        key: "autumn2017"
      },
      {
        name: "Winter 2017",
        key: "winter2017"
      }
    ],

    projects: {
      winter2019: [
        {
          name: "Laundr",
          link: "https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/laundr/",
          suffix: "laundr"
        },
        {
          name: "notE",
          link: "https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/note/",
          suffix: "note"
        },
        {
          name: "Pawsitive",
          link: "https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/pawsitive/",
          suffix: "pawsitive"
        },
        {
          name: "SEEK",
          link: "https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/seek/",
          suffix: "seek"
        }
      ],

      autumn2017: [
        {
          name: "BackTrack",
          link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/backtrack/",
          suffix: "backtrack"
        },
        {
          name: "Hermes",
          link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/hermes/",
          suffix: "hermes"
        },
        {
          name: "Pilltender",
          link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/pilltender/",
          suffix: "pilltender"
        },
        {
          name: "SimPark",
          link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/simpark/",
          suffix: "simpark"
        }
      ],

      winter2017: [
        {
          name: "BookWurm",
          link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/bookwurm/",
          suffix: "bookwurm"
        },
        {
          name: "Dash",
          link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/dash/",
          suffix: "dash"
        },
        {
          name: "Jasper",
          link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/",
          suffix: "jasper"
        },
        {
          name: "Wishing Well",
          link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/wishingwell/",
          suffix: "wishingwell"
        }
      ],
    }
  };
}

export const site = new SiteData();
