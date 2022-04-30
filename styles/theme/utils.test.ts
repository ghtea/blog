import {defaultColors} from "./colors"
import {getTransparentColors} from "./utils"


test("getTransparentColors", ()=>{
  const record = getTransparentColors(defaultColors.gray["500"])

  expect(record).toHaveProperty("8")
  expect(record).toHaveProperty("16")
  expect(record).toHaveProperty("24")
  expect(record).toHaveProperty("32")
  expect(record).toHaveProperty("40")
  expect(record).toHaveProperty("48")
  expect(record).toHaveProperty("56")
  expect(record).toHaveProperty("64")
  expect(record).toHaveProperty("72")
  expect(record).toHaveProperty("80")
  expect(record).toHaveProperty("88")
  expect(record).toHaveProperty("96")
})