import * as colors from 'https://deno.land/std/fmt/colors.ts';
import { setColors } from './lib/logol.ts';

export * from './lib/logol.ts';

setColors(colors);
