const app = Vue.createApp({
  data() {
    return {
      sunjects: [
        {
          name: "බුද්ධාගම",
          subtopics: [
            {
              name: "පාඩම්",
              topics: [
                {
                  name: "",
                  links: [
                    {
                      name: "ගොනු අංක 1",
                      url: "../primary pdf/1 wasara/buddagama/b1.pdf",
                    },
                    {
                      name: "ගොනු අංක 2",
                      url: "../primary pdf/1 wasara/buddagama/b2.pdf",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "ගණිතය",
          subtopics: [
            {
              name: "ප්‍රශ්ණ පත්‍ර",
              topics: [
                {
                  name: "",
                  links: [
                    {
                      name: "ගොනු අංක 1",
                      url: "../primary pdf/1 wasara/Maths/mp1.pdf",
                    },
                    {
                      name: "ගොනු අංක 2",
                      url: "../primary pdf/1 wasara/Maths/mp2.pdf",
                    },
                  ],
                },
              ],
            },
            {
              name: "විශය නිර්දේශය",
              topics: [
                {
                  name: "",
                  links: [
                    {
                      name: "ගොණු අංක 1",
                      url: "../primary pdf\\1 wasara\\Maths\\wishaya nirdesh\\mv1.pdf",
                    },
                    {
                      name: "ගොනු අංක 2",
                      url: "../primary pdf\\1 wasara\\Maths\\wishaya nirdesh\\mv2.pdf",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "පරිසරය",
          subtopics: [
            {
              name: "ප්‍රශ්ණ පත්‍ර",
              topics: [
                {
                  name: "",
                  links: [
                    {
                      name: "ගොණු අංක 1",
                      url: "../primary pdf\\1 wasara\\parisaraya\\papers\\pp1.pdf",
                    },
                    {
                      name: "ගොණු අංක 2",
                      url: "../primary pdf\\1 wasara\\parisaraya\\papers\\pp2.pdf",
                    },
                    {
                      name: "ගොණු අංක 3",
                      url: "../primary pdf\\1 wasara\\parisaraya\\papers\\pp3.pdf",
                    },
                  ],
                },
              ],
            },
            {
              name: "විශය නිර්දේශය",
              topics: [
                {
                  name: "",
                  links: [
                    {
                      name: "ගොණු අංක 1",
                      url: "../primary pdf\\1 wasara\\parisaraya\\wishaya nirdeshaya\\pv1-2.pdf",
                    },
                    {
                      name: "ගොණු අංක 2",
                      url: "../primary pdf\\1 wasara\\parisaraya\\wishaya nirdeshaya\\pv1.pdf",
                    },
                    {
                      name: "ගොණු අංක 3",
                      url: "../primary pdf\\1 wasara\\parisaraya\\wishaya nirdeshaya\\pv2.pdf",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "සිංහල",
          subtopics: [
            {
              name: "ප්‍රශ්ණ පත්‍ර",
              topics: [
                {
                  name: "",
                  links: [
                    {
                      name: "ගොණු අංක 1",
                      url: "../primary pdf\\1 wasara\\sinhala\\papers\\sp1.pdf",
                    },
                    {
                      name: "ගොණු අංක 2",
                      url: "../primary pdf\\1 wasara\\sinhala\\papers\\sp2.pdf",
                    },
                  ],
                },
              ],
            },
            {
              name: "විශය නිර්දේශය",
              topics: [
                {
                  name: "",
                  links: [
                    {
                      name: "ගොණු අංක 1",
                      url: "../primary pdf\\1 wasara\\sinhala\\wishaya nirdeshaya\\sv1.pdf",
                    },
                    {
                      name: "ගොණු අංක 2",
                      url: "../primary pdf\\1 wasara\\sinhala\\wishaya nirdeshaya\\sv2.pdf",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
});

app.mount("body");
