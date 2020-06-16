import tags from "./tag"

let uid = 0
const phrase = [
  {
    zh: "比赛节目变得比以往都要受欢迎",
    en: "Game shows are more popular than ever",
    tag: [tags.趋势, tags.询问]
  },
  {
    zh: "流行音乐的欢迎程度近几年急剧升高",
    en: "The popularity of Pop music has risen sharply since recent years",
    tag: [tags.趋势]
  }
]

phrase.forEach(el => {
  el.id = ++uid
})

export default phrase
