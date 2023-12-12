import { compare, genSalt, hash } from 'bcrypt';

export const SALT_ROUNDS = 10;

export async function getPasswordHash(password: string) {
  return hash(password, await genSalt(SALT_ROUNDS));
}

export async function matchPassword(password: string, passwordHash: string) {
  return compare(password, passwordHash);
}
