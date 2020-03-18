interface Person {
  name: String;
  photo: String;
}

interface Project {
  name: String;
  path: String;
  people: Person[];
}

class ProjectsData {
  projects = [
    {
      name: 'cha$r',
      path: 'chaser',
      people: [
        {
          name: 'Johnathan Butler',
          photo: 'johnathan.png'
        },
        {
          name: 'Volodymyr Loyko',
          photo: 'volodymyr.png'
        },
        {
          name: 'Vy Pham',
          photo: 'vy.png'
        },
        {
          name: 'Lena Tran',
          photo: 'lena.png'
        }
      ]
    },
    {
      name: 'doze',
      path: 'doze',
      people: [
        {
          name: 'Geovani Castro',
          photo: 'geovani.jpg'
        },
        {
          name: 'Kevin Pham',
          photo: 'kevin.jpg'
        },
        {
          name: 'Ying Xiao',
          photo: 'ying.png'
        },
        {
          name: 'Zoe Zuo',
          photo: 'zoe.png'
        }
      ]
    },
    {
      name: 'Feedo',
      path: 'feedo',
      people: [
        {
          name: 'Ilya Kucherov',
          photo: 'ilya.jpg'
        },
        {
          name: 'Kendra Specht',
          photo: 'kendra.jpg'
        },
        {
          name: 'Vamsi Surapaneni',
          photo: 'vamsi.jpg'
        },
        {
          name: 'Julie Zhu',
          photo: 'julie.jpg'
        }
      ]
    },
    {
      name: 'Fridgigotchi',
      path: 'fridgigotchi',
      people: [
        {
          name: 'Josh Katz',
          photo: 'josh.jpg'
        },
        {
          name: 'Qianlin Luo',
          photo: 'qianlin.jpeg'
        },
        {
          name: 'Ian Wohlers',
          photo: 'ian.jpg'
        },
        {
          name: 'Savanna Yee',
          photo: 'savanna.jpg'
        }
      ]
    },
    {
      name: 'Guardia',
      path: 'guardia',
      people: [
        {
          name: 'Federico Rubiolo',
          photo: 'federico.png'
        },
        {
          name: 'Christina Zhang',
          photo: 'christina.png'
        },
        {
          name: 'Zephyr Zhou',
          photo: 'zephyr.png'
        }
      ]
    },
    {
      name: 'mode',
      path: 'mode',
      people: [
        {
          name: 'Hsien&#8209;Lun Chen',
          photo: 'hsien_lun.jpg'
        },
        {
          name: 'Anish Prasad',
          photo: 'anish.jpg'
        },
        {
          name: 'Annie Xia',
          photo: 'annie.jpg'
        },
        {
          name: 'Sydney Zapf',
          photo: 'sydney.jpg'
        }
      ]
    },
    {
      name: 'PinPoint',
      path: 'pinpoint',
      people: [
        {
          name: 'Josh Chu',
          photo: 'josh.jpg'
        },
        {
          name: 'Tetiana Gordin',
          photo: 'tetiana.png'
        },
        {
          name: 'Fengwei Han',
          photo: 'fengwei.png'
        },
        {
          name: 'Julia Kalmykov',
          photo: 'julia.png'
        }
      ]
    },
    {
      name: 'Pocket Grocer',
      path: 'pocketgrocer',
      people: [
        {
          name: 'Jacque Li',
          photo: 'jacque.jpg'
        },
        {
          name: 'Wenqi Li',
          photo: 'wenqi.jpg'
        },
        {
          name: 'Frank Poon',
          photo: 'frank.jpg'
        },
        {
          name: 'Sophia Sevier',
          photo: 'sophia.jpg'
        }
      ]
    },
    {
      name: 'Pocket Planner',
      path: 'pocketplanner',
      people: [
        {
          name: 'Lucy Jiang',
          photo: 'lucy.jpg'
        },
        {
          name: 'Natasya Juliette',
          photo: 'natasya.jpg'
        },
        {
          name: 'Chia&#8209;Lin Liu',
          photo: 'chia-lin.jpg'
        }
      ]
    },
    {
      name: 'PoolBuddy',
      path: 'poolbuddy',
      people: [
        {
          name: 'Mengjiao Li',
          photo: 'mengjiao.png'
        },
        {
          name: 'Rachel Sitt',
          photo: 'rachel.png'
        },
        {
          name: 'Nadir Tareen',
          photo: 'nadir.png'
        },
        {
          name: 'Perry Wu',
          photo: 'perry.png'
        }
      ]
    },
    {
      name: 'ProCabulary',
      path: 'procabulary',
      people: [
        {
          name: 'Karron Bansal',
          photo: 'karron.jpg'
        },
        {
          name: 'Arjun Malhotra',
          photo: 'arjun.png'
        },
        {
          name: 'Francis Wang',
          photo: 'francis.jpg'
        },
        {
          name: 'Zhennan Zhou',
          photo: 'zhennan.jpg'
        }
      ]
    },
    {
      name: 'remi⋅nice',
      path: 'reminice',
      people: [
        {
          name: 'Mitchell Estberg',
          photo: 'mitchell.jpg'
        },
        {
          name: 'Patrick Mao',
          photo: 'patrick.jpg'
        },
        {
          name: 'Lucia Viña Patiño',
          photo: 'lucia.jpg'
        },
        {
          name: 'Dana Spillinger',
          photo: 'dana.jpg'
        }
      ]
    },
    {
      name: 'Stud-e',
      path: 'stude',
      people: [
        {
          name: 'Manan Gandhi',
          photo: 'manan.jpg'
        },
        {
          name: 'Aerin Malana',
          photo: 'aerin.jpg'
        },
        {
          name: 'Julian Rosner',
          photo: 'julian.jpg'
        },
        {
          name: 'John Taggart',
          photo: 'john.jpg'
        }
      ]
    },
    {
      name: 'tidy',
      path: 'tidy',
      people: [
        {
          name: 'Jonathan Chen',
          photo: 'jonathan.png'
        },
        {
          name: 'Kcee Landon',
          photo: 'kcee.png'
        },
        {
          name: 'John McMahon',
          photo: 'john.png'
        },
        {
          name: 'Seung&nbsp;Won Shin',
          photo: 'seungwon.png'
        },
        {
          name: 'Brent Wong',
          photo: 'brent.png'
        }
      ]
    },
    {
      name: 'VapeWeight',
      path: 'vapeweight',
      people: [
        {
          name: 'Shariya Ali',
          photo: 'shariya.png'
        },
        {
          name: 'Angela Cao&#8209;Hong',
          photo: 'angela.png'
        },
        {
          name: 'Molly Flemming',
          photo: 'molly.png'
        },
        {
          name: 'Niloofar Shakibaei',
          photo: 'niloofar.png'
        }
      ]
    }
  ]
}

export const projects = new ProjectsData();
