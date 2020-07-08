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
  },
  {
    zh: "你想喝点什么吗？",
    en: "Would you like something to drink?",
    tag: [tags.日常]
  },
  {
    zh: "真的吗？我为你感到非常高兴！",
    en: "Really? I'm so happy for you!",
    tag: [tags.日常]
  },
  {
    zh: "他辞去了银行的职位并且毁掉了他自己有希望的前程。",
    en: "He handed in his notice at the bank and ruined his promising career.",
    tag: [tags.工作]
  },
  {
    zh: "是的，我就是这个意思。",
    en: "Yes, that's exactly what I mean.",
    tag: [tags.回答, tags.确认]
  },
  {
    zh: "是的，理解正确。",
    en: "Yes, that's correct.",
    tag: [tags.回答, tags.确认]
  },
  {
    zh: "那么，你的意思是我们如今遇到大问题了。",
    en: "So, what you're saying is, we've got a big problem on our hands.",
    tag: [tags.确认]
  },
  {
    zh: "我们绝对有必要见面。",
    en: "It's absolutely critical that we meet.",
    tag: [tags.重要性]
  },
  {
    zh: "我们务必坐下来谈谈。",
    en: "It's vital that we sit down together.",
    tag: [tags.重要性, tags.约见面]
  },
  {
    zh: "我们必须取得谅解。",
    en: "It's essential we get an understanding.",
    tag: [tags.重要性]
  },
  {
    zh: "关键是她必须同意。",
    en: "It's absolutely vital that she agree.",
    tag: [tags.重要性]
  },
  {
    zh: "我们正在在快速推进你的项目",
    en: "We are fast-tracking your project.",
    tag: [tags.工作]
  },
  {
    zh: "您能快速查找我的申请吗？",
    en: "Can you fast-track my application?",
    tag: [tags.工作]
  },
  {
    zh: "夜以继日的工作",
    en: "working around the clock",
    tag: [tags.工作, tags.短语]
  },
  {
    zh: "随时告诉我们",
    en: "keep us informed",
    tag: [tags.短语]
  },
  {
    zh: "落后计划",
    en: "run behind schedule",
    tag: [tags.短语]
  },
  {
    zh: "离开",
    en: "work out the door / leave",
    tag: [tags.短语]
  },
  {
    zh: "在短时的延迟后，我们回到了正常轨道。",
    en: "After a short delay, we are back on track.",
    tag: [tags.工作]
  },
  {
    zh: "我今天有点落后于计划。",
    en: "I'm running a little behind schedule today.",
    tag: [tags.工作]
  },
  {
    zh: "该相机没有附送配件。",
    en: "The accessories don't come with the camera.",
    tag: [tags.商品]
  },
  {
    zh: "这台笔记本电脑物有所值。",
    en: "This laptop is a good value for money.",
    tag: [tags.商品]
  },
  {
    zh: "它与其他平板电脑相比怎样？",
    en: "And how does this compare with other tablets?",
    tag: [tags.商品]
  },
  {
    zh: "它有别的颜色吗？",
    en: "Does it come in other colors?",
    tag: [tags.商品]
  },
  {
    zh: "它提供一个键盘吗？",
    en: "Is it available with a keyboard?",
    tag: [tags.商品]
  },
  {
    zh: "",
    en: "",
    tag: [tags.商品]
  },
  {
    zh: "",
    en: "",
    tag: [tags.商品]
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
