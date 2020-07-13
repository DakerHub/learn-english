let uid = 0
const L = "LEFT"
const R = "RIGHT"

const dialogues = [
  {
    title: "初次见面",
    tips: ["注意这个那个"],
    qa: [
      { t: L, zh: "你好, 我是Frank, 很高兴见到你", en: "Hi, I'm Frank, nice to meet you." },
      { t: R, zh: "很高兴见到你, 我是XXX", en: "Nice to meet you too, I'm XXX" }
    ]
  },
  {
    title: "预定酒店",
    tips: [],
    qa: [
      { t: L, zh: "晚上好，这是皇家酒店，我能帮到你什么？", en: "Good evening, Hotel Royal, how may I help you?" },
      { t: R, zh: "这是皇家酒店，对吗？", en: "This is the Hotel Royal, right?" },
      { t: L, zh: "是的。", en: "Yes, it is." },
      { t: R, zh: "我想预定三个晚上的房间", en: "I'd like to book a room for three nights." },
      { t: L, zh: "那一天入住呢", en: "Check-in on what day?" },
      { t: R, zh: "五月21号", en: "May 21st" },
      { t: L, zh: "请等一下。好了，请问有多人呢？", en: "Wait a monent, please. Ok, and for how many people." },
      { t: R, zh: "只有一个，要无烟房，谢谢。", en: "Just one. Nonsmoking, please." },
      { t: L, zh: "我们这些天确实提供无烟房，花费是230美元一晚。", en: "We do have a nonsmoking availability for those days, the ??? is $230 a night." },
      { t: R, zh: "很棒，我能问你几个问题吗？", en: "Great. Can I ask you a couple of questions?" },
      { t: L, zh: "当然啦！", en: "Certainly!" },
      { t: R, zh: "你们提供机场交通吗？", en: "Do you provide airport transportation?" },
      { t: L, zh: "有的。我们24小时运行的的机场班车。", en: "We do. We have airpot shuttles that run 24 hours a day." },
      { t: R, zh: "太好了。还有，你们有接待客人的商务中心吗？", en: "Excellent. Also, do you have a bussiness center for guests?" },
      { t: L, zh: "是的，我们有商务中心。并且我们为每间客房提供免费的无线网络。", en: "Yes. We have a bussiness center. We also offer free wireless internet for all our rooms." },
      { t: R, zh: "太完美了。我觉得我已经可以预定了。", en: "That's perfect. I think I'm ready to make the reservation." },
      { t: L, zh: "好的。我能先知道你的名字吗？", en: "All right. If I could first get your name?" },
      { t: R, zh: "可以，我叫Frank。", en: "Ok. It's Frank." }
      // { t: L, zh: "", en: "" },
      // { t: R, zh: "", en: "" },
    ]
  },
  {
    title: "表达忧虑和担心",
    tips: [],
    qa: [
      { t: L, zh: "", en: "You look worried." },
      { t: R, zh: "", en: "I am. I'm very worried." },
      { t: L, zh: "", en: "What are you worried about?" },
      { t: R, zh: "", en: "I'm concerned that we don't offer a mobile banking application." },
      { t: L, zh: "", en: "I can see why you're concerned. All the other banks in the area have one." },
      { t: R, zh: "", en: "I know. I'm worried that we're falling behind them. It's driving me crazy." },
      { t: L, zh: "", en: "Yeah. So many problems. I'm also worried that the online banking product isn't doing very well." },
      { t: R, zh: "", en: "What do you mean?" },
      { t: L, zh: "", en: "Well, I have some serious concerns about design. Our online banking product looks like it was made in 1990." }
      // { t: L, zh: "", en: "" },
      // { t: R, zh: "", en: "" },
    ]
  }
]

dialogues.forEach(el => {
  el.id = ++uid
})

export default dialogues
