export interface PredictResultModel {
  result: Result[]
}

export interface Result {
  Fluke: number
  RoundWorms: number
  TapeWorms: number
  class: string
}
