import { INCREASE, DECREASE } from './action_types'

export function increase(n) {
  return {
    type: INCREASE,
    amount: n
  }
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n
  }
}
