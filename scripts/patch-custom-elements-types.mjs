import { appendFile, readFile } from 'node:fs/promises';

const declarationFile = new URL('../dist/components/index.d.ts', import.meta.url);
const exportStatement = "export type * from '../types/components';\n";

const declarations = await readFile(declarationFile, 'utf8');

if (!declarations.includes(exportStatement)) {
  await appendFile(declarationFile, `\n${exportStatement}`);
}
