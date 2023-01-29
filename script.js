let billTotalInput=document.getElementById("billTotalInput")
let tipInput=document.getElementById("tipInput")
let numberOfPeople=document.getElementById("numberOfPeople")
let perPersonTotal=document.getElementById("perPersonTotal")

let noOfPeople=Number(numberOfPeople.innerText)

const calculateBill = () => {
  let bill=Number(billTotalInput.value)
  let tip=Number(tipInput.value)/100
  let tta=bill*tip
  let total=tta+bill
  let answer=total/noOfPeople
  perPersonTotal.innerText="$"+answer.toFixed(2)
}

const increasePeople = () => {
  noOfPeople++
  numberOfPeople.innerText=noOfPeople
  calculateBill()
}

const decreasePeople = () => {
  if(noOfPeople==1) return
  noOfPeople--
  numberOfPeople.innerText=noOfPeople
  calculateBill()
}