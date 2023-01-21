const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)

  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso")
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("StorageHabits", JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-01", "01-02", "01-03"],
//   water: ["01-01", "01-02", "01-04", "01-05"],
//   gym: ["01-01", "01-02"],
//   sleep: ["01-01", "01-03", "01-04", "01-05"],
//   food: ["01-02", "01-03", "01-04", "01-06"]
// }

const data = JSON.parse(localStorage.getItem("StorageHabits"))
if (data != null) {
  nlwSetup.setData(data)
}
nlwSetup.load()
