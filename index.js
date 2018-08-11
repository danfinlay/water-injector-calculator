const waterPerSquareFootInch = 0.62 // gallons

class InjectionCalculator {

  /*
   * Calculates the number of gallons required to soak an area of soil.
   *
   * @param {Number} area - The number of square feet of soil to soak.
   * @param {Number} depth - The number of feet deep to inject water.
   * @param {Number} fieldCapacity - The number of cubic inches of water that can be held by 1 foot deep of this soil. (Typically ranges from 1-1.5)
   * @returns Number - gallons of water required
   */
  waterNeeded ({ area = 0, depth = 3, fieldCapacity = 1 } = {}) {
    const soilVolumeToSoak = depth * area
    return soilVolumeToSoak * waterPerSquareFootInch * fieldCapacity
  }

  timeToSoak ({ area = 0, depth = 3, fieldCapacity = 1, hoseSpeed = 8 } = {}) {
    const waterNeeded = this.waterNeeded({ area, depth, fieldCapacity })
    return waterNeeded / hoseSpeed
  }
}

module.exports = InjectionCalculator

