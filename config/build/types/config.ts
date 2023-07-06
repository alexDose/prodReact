export type BuildModeType = 'production' | 'development'

export interface BuildPath {
    entry: string
    build: string
    html: string
}

export interface BuildOptions {
    mode: BuildModeType
    paths: BuildPath
    isDev: boolean
}
