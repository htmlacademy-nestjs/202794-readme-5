import { PrismaClient } from '@prisma/client';
import { getAuthors } from './authors';
import { getPostTags } from './tags';
import { getPosts } from './posts';

/**
 * Заполнить базу данных readme.posts начальными данными
 */
export async function seed() {
  const client = new PrismaClient();

  try {
    const authors = getAuthors();

    for (const author of authors) {
      await client.author.upsert({
        where: { id: author.id },
        update: {},
        create: author,
      });
    }
    const tags = getPostTags();

    for (const tag of tags) {
      await client.tag.upsert({
        where: { id: tag.id },
        update: tag,
        create: tag,
      });
    }
    const posts = getPosts();

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
