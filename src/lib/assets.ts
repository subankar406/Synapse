import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** True if a root-relative public URL (e.g. "/images/x.jpg") exists in /public at build time. */
export function hasPublicFile(src: string): boolean {
  return existsSync(join(process.cwd(), 'public', src));
}
