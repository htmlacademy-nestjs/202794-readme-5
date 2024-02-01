import type { Express } from 'express';
import type { Multer } from 'multer';

export type { Multer };
export interface MulterFile extends Express.Multer.File {}
