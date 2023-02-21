import path from 'path'

export function getSrcPath(src = 'src') {
    return path.resolve(getRootPath(), src)
}

function getRootPath() {
    return path.resolve(process.cwd())
}
