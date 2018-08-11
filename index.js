const waterPerSquareFootInch = 0.62 // gallons

class InjectionCalculator {

  waterNeeded ({ area = 0, depth = 3, fieldCapacity = 1 } = {}) {
    const soilVolumeToSoak = depth * area
    return soilVolumeToSoak * waterPerSquareFootInch * fieldCapacity
  }

}

module.exports = InjectionCalculator
