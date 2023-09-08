import path from 'node:path'

export function getSrcPath(src = 'src') {
  return path.resolve(getRootPath(), src)
}

function getRootPath() {
  // eslint-disable-next-line n/prefer-global/process
  return path.resolve(process.cwd())
}
