export type BuildModeType = 'production' | 'development'

export interface BuildPath {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: BuildModeType
    port: number
    apiUrl: string
}

export interface BuildOptions {
    mode: BuildModeType
    paths: BuildPath
    isDev: boolean
    port: number
    apiUrl: string
}
