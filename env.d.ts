/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Origin of the lab server's API. Empty on the official site, where /api is same-origin. */
  readonly VITE_API_ORIGIN?: string
  /** A JSON file under public/ to read the research list from instead of the API. */
  readonly VITE_RESEARCH_JSON?: string
  /** "1" marks a build that is hosted away from the official site. */
  readonly VITE_PROTOTYPE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
