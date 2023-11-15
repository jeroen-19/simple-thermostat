import { TempUtils } from '../TempUtils'

test('round Temperature with 0.5', () => {
  let tempUtils : TempUtils = new TempUtils(1,0.5)
  expect(tempUtils.roundTemperature(16.4,-0.5)).toBe(16)
  expect(tempUtils.roundTemperature(16.4,+0.5)).toBe(16.5)
  expect(tempUtils.roundTemperature(16.0,+0.5)).toBe(16.5)
  expect(tempUtils.roundTemperature(16.0,-0.5)).toBe(15.5)
  expect(tempUtils.roundTemperature(16.2,-0.5)).toBe(16)
})

test('round Temperature with 0.2', () => {
  let tempUtils : TempUtils = new TempUtils(1,0.2)
  expect(tempUtils.roundTemperature(16.4,-0.2)).toBe(16.2)
  expect(tempUtils.roundTemperature(16.3,-0.2)).toBe(16.2)
  expect(tempUtils.roundTemperature(16.4,+0.2)).toBe(16.6)
  expect(tempUtils.roundTemperature(16.5,+0.2)).toBe(16.6)
})

test('round Temperature with 0.05 with 2 decimals', () => {
  let tempUtils : TempUtils = new TempUtils(2,0.05)
  expect(tempUtils.roundTemperature(16.4,-0.05)).toBe(16.35)
  expect(tempUtils.roundTemperature(16.38,-0.05)).toBe(16.35)
})
