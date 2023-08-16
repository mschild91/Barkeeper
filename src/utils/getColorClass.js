export function getColorClassFrom(ingredient) {
  let color
  switch (ingredient.toLowerCase()) {
    case 'gin':
      color = 'from-gin'
      break
    case 'vodka':
      color = 'from-vodka'
      break
    case 'rum':
      color = 'from-rum'
      break
    case 'scotch':
      color = 'from-scotch'
      break
    case 'alcohol free':
      color = 'from-non_alcoholic'
      break
    case 'random':
      color = 'from-random'
      break
    case "search":
      color = "from-orange-500"
      break
    default:
      break
  }
  return color
}
export function getColorClassBg(ingredient) {
  let color
  switch (ingredient.toLowerCase()) {
    case 'gin':
      color = 'bg-gin'
      break
    case 'vodka':
      color = 'bg-vodka'
      break
    case 'rum':
      color = 'bg-rum'
      break
    case 'scotch':
      color = 'bg-scotch'
      break
    case 'alcohol free':
      color = 'bg-non_alcoholic'
      break
    case 'random':
      color = 'bg-random'
      break
    case "search":
      color = "bg-orange"
      break
    default:
      break
  }
  return color
}
