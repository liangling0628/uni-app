export interface UtsParserConfig {
  /**
   * Defaults to `false`
   */
  allowImportWithoutSpecifiers?: boolean
}

export type UtsParseOptions = UtsParserConfig & {
  filename?: string
  comments?: boolean
}

export type UtsInputOptions = UtsParseOptions & {
  root: string
  filename: string
  namespace?: string
}

export type UtsOutputOptions = {
  outDir: string
  imports?: string[]
  sourceMap: boolean | string
  inlineSourcesContent?: boolean
  extname: string
}
export interface UtsOptions {
  input: UtsInputOptions
  output: UtsOutputOptions
}

export interface UtsResult {
  filename?: string
  time?: number
  error?: Error
}