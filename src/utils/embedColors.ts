export const embedColors: string[] = [
  '#F8485E',
  '#28FFBF',
  '#C400FF',
  '#055052',
  '#B980F0',
  '#FAFF00',
  '#71EFA3',
  '#FFBCBC',
  '#185ADB',
  '#CD113B',
  '#66DE93',
  '#AC66CC',
  '#0A1931',
  '#B6C9F0',
  '#FFCEAD',
  '#FFF5AB',
  '#511281',
  '#F21170',
  '#FEA82F',
  '#FF9A8C',
]

export const getRandomEmbedColor = (): string => {
  const colorId: number = Math.floor(Math.random() * embedColors.length)

  const randomeColor: string = embedColors[colorId]
  return randomeColor
}
