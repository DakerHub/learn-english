import tags from "./tag"

let uid = 0
const phrase = [
  {
    zh: "米娅在正常工作时间上班，朝九晚五。",
    en: "Mia works normal hours, from 9 to 5.",
    tag: [tags.工作]
  },
  {
    zh: "他有点古怪，不过工作非常在行。",
    en: "He's slightly odd, but he's very good at his job.",
    tag: [tags.工作]
  },
  {
    zh: "我认为你辞职是愚蠢的行为。",
    en: "I think quitting your job is a foolish thing to do.",
    tag: [tags.工作]
  },
  {
    zh: "如果她当初更有抱负，他们就会提拔她。",
    en: "If she had been more ambitious, they would have promoted her.",
    tag: [tags.虚拟语气条件句]
  },
  {
    zh: "我想提高我的德语流利度。",
    en: "I want to improve my proficiency in German.",
    tag: []
  },
  {
    zh: "在那个行业哪些技能是重要的?",
    en: "What skill sets are important in that industry?",
    tag: [tags.工作]
  },
  {
    zh: "他们在会计方面有一个空缺的职位。",
    en: "They have a post open in accounting.",
    tag: [tags.工作]
  },
  {
    zh: "我想提高我在那个领域的能力。",
    en: "I'd like to improve my proficiency in that discipline.",
    tag: [tags.工作]
  },
  {
    zh: "金融行业做得很好。",
    en: "The financial sector is doing very well.",
    tag: [tags.工作]
  },
  {
    zh: "我目前的工作是程序员。",
    en: "I am currently employed as a programer.",
    tag: [tags.工作]
  },
  {
    zh: "短期来看，我的目标是在一个大型的，跨国公司工作。",
    en: "Short term, I am aiming to work at a large, multinational company.",
    tag: [tags.工作]
  }
  // ,{
  //   zh: "",
  //   en: "",
  //   tag: []
  // }
]

phrase.forEach(el => {
  el.id = ++uid
})

export default phrase
