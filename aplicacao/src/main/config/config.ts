import path from 'path'

const Path = process.env.PROJECT_BASE_PATH || path.resolve(process.cwd());

export const databasePath = path.resolve(Path, 'famintos.sqlite') 

export default databasePath;