const test = require('tape')
const Calc = require('../')

test(`Molly's example of water needed`, (t) => {
  const area = 100 // sq feet
  const depth = 3 // feet
  const fieldCapacity = 1 // inch (default)
  const waterPerSquareFootInch = 0.62 // gallons

  const calc = new Calc()

  const result = calc.waterNeeded({
    area, depth, fieldCapacity
  })

  t.equal(result, 186, `got Molly's result`)
  t.end()
})

test(`Test defaults`, (t) => {
  const area = 100 // sq feet
  const waterPerSquareFootInch = 0.62 // gallons

  const calc = new Calc()

  const result = calc.waterNeeded({ area })

  t.equal(result, 186, `got Molly's result`)
  t.end()
})



