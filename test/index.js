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

test('hoseSpeed', (t) => {
  const gallons = 100 // gallons
  const speed = 10 // gallons per minute

  const calc = new Calc()

  const result = calc.timeToEmitGallons({ gallons, speed })
  t.equal(result, 10, 'should take 10 minutes to soak')
  t.end()
})

test('timeToSoak', (t) => {
  const area = 100 // sq feet
  const depth = 3 // feet
  const fieldCapacity = 1 // inch (default)
  const hoseSpeed = 10

  const calc = new Calc()

  const result = calc.timeToSoak({
    area, depth, fieldCapacity, hoseSpeed
  })

  t.equal(result, 18.6, `got Molly's result`)
  t.end()
})

