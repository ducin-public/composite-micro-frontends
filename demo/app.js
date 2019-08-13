const card = document.querySelector('itcorpo-employee-card')

const employees = [{
  firstName: "Mark",
  lastName: "Twain"
}, {
    firstName: "Lech",
  lastName: "Wałęsa"
}, {
  firstName: "Czyngis",
  lastName: "Chan"
}]

card.employee = employees[0]

let count = 0
setInterval(() => {
  count++
  count %= employees.length
  card.employee = employees[count]
}, 3000)

document.querySelector('itcorpo-employee-list').addEventListener('ids', (ids) => {
  alert(ids)
})
document.querySelector('itcorpo-employee-list').addEventListener('CustomEvent', (ids) => {
  alert(ids)
})

