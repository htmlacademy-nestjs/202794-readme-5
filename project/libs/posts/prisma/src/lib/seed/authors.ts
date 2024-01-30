import { Prisma } from '@prisma/client';

export const USER1_ID = '6592f0897aff7a3e3bc4d173';
export const USER2_ID = '6592f0937aff7a3e3bc4d176';
export const USER3_ID = '6593d28de421b6051f1dd9c2';
export const USER4_ID = '6593d612e421b6051f1dd9c5';
export const USER5_ID = '6586f5d2178712d97016e877';

export function getAuthors(): Prisma.AuthorCreateInput[] {
  return [
    { id: USER1_ID },
    { id: USER2_ID },
    { id: USER3_ID },
    // USER4_ID является подписчиком на USER2_ID
    { id: USER4_ID, authorsSubscriptions: { create: [
      { author: { connect: { id: USER2_ID } } }
    ]} },
    // USER5_ID имеет подписчиков USER1_ID, USER2_ID, USER3_ID
    { id: USER5_ID, authorsSubscribers: { create: [
      { subscriber: { connect: { id: USER1_ID } } },
      { subscriber: { connect: { id: USER2_ID } } },
      { subscriber: { connect: { id: USER3_ID } } },
    ] } },
  ];
}
