import { PrismaClient, Prisma } from '@prisma/client';

export const USER_ID = '657da7a18fca7b1eb751eba0';
export const OWNER_ID = '657f1aaf5c958e259613d1df';

function getPostTags(): Prisma.TagCreateInput[] {
  return [
    { id: '39614113-7ad5-45b6-8093-06455437e1e2', text: 'js' },
    { id: 'efd775e2-df55-4e0e-a308-58249f5ea202', text: 'css' },
  ];
}

function getPosts(tags: Prisma.TagCreateInput[]): Prisma.PostCreateInput[] {
  return [
    {
      id: '6d308040-96a2-4162-bea6-2338e9976540',
      title: 'JavaScript за 21 день',
      authorId: USER_ID,
      postType: 'TEXT',
      tags: { connect: tags.slice(1).map(({ id }) =>({ id })) },
      likes: {
        create: [
          { ownerId: OWNER_ID }
        ]
      }
    }, {
      id: 'ab04593b-da99-4fe3-8b4b-e06d82e2efdd',
      title: 'JavaScript and CSS in action',
      authorId: USER_ID,
      postType: 'TEXT',
      tags: { connect: tags.map(({ id }) =>({ id })) },
      comments: {
        create: [
          { ownerId: OWNER_ID, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { ownerId: OWNER_ID, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque.' }
        ]
      }
    }
  ];
}

/**
 * Заполнить базу данных readme.posts начальными данными
 */
export async function seed() {
  const client = new PrismaClient();

  try {
    const tags = getPostTags();

    for (const tag of tags) {
      await client.tag.upsert({
        where: { id: tag.id },
        update: {},
        create: tag,
      });
    }
    const posts = getPosts(tags);

    for (const post of posts) {
      await client.post.upsert({
        where: { id: post.id },
        update: {},
        create: post,
      });
    }
    console.info('🤘️ Database was filled');
  } catch (error: unknown) {
    console.error(error);
  } finally {
    await client.$disconnect();
  }
}

seed();
