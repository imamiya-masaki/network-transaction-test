const fs = require('fs')

const createJson = () => {
  const defee = {}
  defee["val"] = "Val".repeat(100).repeat(100)
  defee["foo"] = "foo".repeat(100).repeat(100)
  defee["number"] = 1000*1000*1000
  const list = []
  for (let i = 0; i < 1500; i++) {
    list.push({
      ...defee,
      id: i+1
    })
  }
  return {
    hogehoge: "fugafuga",
    data: list
  }
}

const a = createJson()

fs.writeFileSync("./create-big.json", JSON.stringify(a, null, 2))