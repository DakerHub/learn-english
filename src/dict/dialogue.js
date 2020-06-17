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
  }
]

dialogues.forEach(el => {
  el.id = ++uid
})

export default dialogues
