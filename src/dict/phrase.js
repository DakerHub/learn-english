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
    zh: "智能手机的发展让人吃惊。",
    en: "The smartphone was an amazing development.",
    tag: [tags.普通]
  },
  {
    zh: "发短信彻底颠覆了我们的通讯方式。",
    en: "Texting revolutionized the way we communicate.",
    tag: [tags.普通]
  },
  {
    zh: "竞争对手正在赶上我们。",
    en: "The competition is catching up to us.",
    tag: [tags.普通]
  },
  {
    zh: "他的最新发明是一款形似戒指的微型手机。",
    en: "His latest invention is a tiny phone worn like a ring.",
    tag: [tags.普通]
  },
  {
    zh: "你能不能描述新的触摸屏如何工作？",
    en: "Can you describe how the new touch screen works?",
    tag: [tags.回答]
  },
  {
    zh: "我们准备好了吗？",
    en: "Are we ready for it?",
    tag: [tags.回答]
  },
  {
    zh: "我们一直努力增加销售。",
    en: "We'd been strugging to increase sales.",
    tag: [tags.工作]
  },
  {
    zh: "他们是很有意思的人。",
    en: "They're fun to be with.",
    tag: [tags.描述]
  },
  {
    zh: "他有时是有挑衅性的。",
    en: "He can be aggressive sometimes.",
    tag: [tags.描述]
  },
  {
    zh: "我觉得她难以理解。",
    en: "I think she is hard to read.",
    tag: [tags.描述]
  },
  {
    zh: "我的老板容易沟通。",
    en: "My boss is easy to talk to.",
    tag: [tags.描述]
  },
  {
    zh: "他和其他团队相处得不太好。",
    en: "He does't get along with other teams too well.",
    tag: [tags.关系]
  },
  {
    zh: "当他如此咄咄逼人时，他把人都吓跑了。",
    en: "He puts people off when he's so aggaressive.",
    tag: [tags.描述, tags.关系]
  },
  {
    zh: "他们看上去彼此相处得很好。",
    en: "They seem to be getting on well with each other.",
    tag: [tags.关系]
  },
  {
    zh: "他们很快就喜欢上了彼此。",
    en: "They've warmed to one another pertty quickly.",
    tag: [tags.关系]
  },
  {
    zh: "当有特殊场合时，我们出去吃晚饭。",
    en: "We go out for dinner when there's a special occasion.",
    tag: [tags.关系, tags.条件]
  },
  {
    zh: "我爱去公园，但只有当阳光明媚时。",
    en: "I love to go to the park, but only when it's sunny.",
    tag: [tags.条件]
  },
  {
    zh: "他一般不太喜欢那种事情。",
    en: "He doesn't generally like that kind of thing.",
    tag: [tags.描述]
  },
  {
    zh: "她只在不下雨的时候才骑自行车去上班。",
    en: "She only bikes to work when it's not raining.",
    tag: [tags.条件]
  },
  {
    zh: "他们是看电视的，但是只有在有好节目时才看。",
    en: "They do watch TV, but only when there is something good.",
    tag: [tags.条件]
  },
  {
    zh: "对不起打扰您了。您现在有空吗？",
    en: "Sorry to disturb you. Are you available now?",
    tag: [tags.日常]
  },
  {
    zh: "我们会调查所有的可能。",
    en: "We'll investigate all the alternatives.",
    tag: [tags.正式表达]
  },
  {
    zh: "馅饼",
    en: "tart",
    tag: [tags.食物]
  },
  {
    zh: "芝士蛋糕",
    en: "cheesecake",
    tag: [tags.食物]
  },
  {
    zh: "面包布丁",
    en: "bread pudding",
    tag: [tags.食物]
  },
  {
    zh: "焦糖布丁",
    en: "creme brulee",
    tag: [tags.食物]
  },
  {
    zh: "圣代冰淇淋",
    en: "sundae",
    tag: [tags.食物]
  },
  {
    zh: "巧克力蛋糕",
    en: "brownie",
    tag: [tags.食物]
  },
  {
    zh: "卡布奇洛咖啡",
    en: "cappuccino",
    tag: [tags.食物]
  },
  {
    zh: "浓缩咖啡",
    en: "espresso",
    tag: [tags.食物]
  },
  {
    zh: "我有信心拿出一点办法。",
    en: "I'm confident that we can work something out.",
    tag: []
  },
  {
    zh: "首先，我们在未来 6 个月里需要 75 台机器。",
    en: "Let me begin by saying we need 75 machines over the next six months.",
    tag: [tags.开场]
  },
  {
    zh: "首先你必须明白，我们的预算非常吃紧。",
    en: "To begin with, you have to understand we have tough budget limitations.",
    tag: [tags.开场]
  },
  {
    zh: "我们期待你有更好的报价。",
    en: "We were expecting a better offer from you.",
    tag: []
  },
  {
    zh: "一直存在误会。",
    en: "There's been a misunderstanding.",
    tag: [tags.确认]
  },
  {
    zh: "我拿不准我是否明白了。",
    en: "I'm not sure that I understand.",
    tag: [tags.确认]
  },
  {
    zh: "你能不能澄清几点？",
    en: "Would you clarify a couple of points?",
    tag: [tags.确认]
  },
  {
    zh: "你所谓的折扣到底是什么意思？",
    en: "What exactly do you mean by discount?",
    tag: [tags.确认]
  },
  {
    zh: "你能说得更具体一点吗？",
    en: "Could you be more specific?",
    tag: [tags.确认]
  },
  {
    zh: "那你的意思是，你完全没办法立刻交货？",
    en: "So what you're saying is, there's no way you can deliver immediately?",
    tag: [tags.确认]
  },
  {
    zh: "换句话说，你买得越多，付的钱就越少。",
    en: "So, to put it another way, the more you buy, the less you pay.",
    tag: [tags.确认]
  },
  {
    zh: "更具体地说，我们可以给价格打 10% 的折扣。",
    en: "To be more specific, we can discount the price by 10 percent.",
    tag: [tags.确认]
  },
  {
    zh: "我需要跟公司商量，然后才能做决定。",
    en: "I'll need to check with my company before deciding.",
    tag: [tags.确认]
  },
  {
    zh: "我提议你购买另一种型号。",
    en: "I propose that you buy a different model.",
    tag: [tags.建议]
  },
  {
    zh: "	你建议我们怎么办？",
    en: "What do you propose that we do?",
    tag: [tags.询问]
  },
  {
    zh: "我们完全无法接受你的报价。",
    en: "There's just no way we can accept your offer.",
    tag: [tags.拒绝]
  },
  {
    zh: "抱歉，但是我们无法提供那样的折扣。",
    en: "I'm sorry, but we can't offer that kind of discount.",
    tag: [tags.拒绝]
  },
  {
    zh: "这个价格恐怕毫无可能。",
    en: "I'm afraid that price is out of the question.",
    tag: [tags.拒绝]
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
