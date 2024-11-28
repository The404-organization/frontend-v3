import { Outfit, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const outfitFont = Outfit({ subsets: [] });
export const poppinsFont = Poppins({ subsets: [], weight: ['600'] });
export const quantumFont = localFont({ src: '../../assets/fonts/Quantum.ttf' });
