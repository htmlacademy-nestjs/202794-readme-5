import { Prisma } from '@prisma/client';
import { USER1_ID, USER2_ID, USER3_ID, USER4_ID, USER5_ID } from './authors';

export function getPosts(): Prisma.PostCreateInput[] {
  return [
    {
      id: '6d308040-96a2-4162-bea6-2338e9976540',
      author: { connect: { id: USER1_ID } },
      postType: 'VIDEO',
      payload: {
        title: 'JavaScript за 21 день',
        url: 'https://youtube.com/watch?v=8ybW48rKBME',
      },
      comments: { create: [
        { author: { connect: { id: USER1_ID } }, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque.' },
        { author: { connect: { id: USER2_ID } }, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { author: { connect: { id: USER3_ID } }, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      ] },
      tags: { connect: [
        { text: 'javascript' },
        { text: 'coding' },
        { text: 'guides' },
      ] },
      likes: { create: [
        { author: { connect: { id: USER2_ID } } },
      ] },
    },
    {
      id: 'ab04593b-da99-4fe3-8b4b-e06d82e2efdd',
      author: { connect: { id: USER2_ID } },
      postType: 'TEXT',
      payload: {
        title: 'A Guide To Keyboard Accessibility: HTML And CSS',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque.',
      },
      comments: { create: [
        { author: { connect: { id: USER3_ID } }, message: 'A Guide To Keyboard accessibility: html And CSS Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque.' },
        { author: { connect: { id: USER4_ID } }, message: 'A Guide To Keyboard accessibility: html And CSS Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      ] },
      tags: { connect: [
        { text: 'accessibility' },
        { text: 'html' },
        { text: 'css' },
      ] },
      likes: { create: [
        { author: { connect: { id: USER2_ID } } },
        { author: { connect: { id: USER3_ID } } },
        { author: { connect: { id: USER4_ID } } },
      ] },
    },
    {
      id: 'cecab48e-a952-11ee-817e-0242ac130002',
      author: { connect: { id: USER3_ID } },
      postType: 'QUOTE',
      payload: {
        content: 'Make it work, make it right, make it fast',
        author: 'Kent Beck',
      },
      comments: { create: [
        { author: { connect: { id: USER1_ID } }, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque.' },
        { author: { connect: { id: USER2_ID } }, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      ] },
      tags: { connect: [
        { text: 'coding' },
        { text: 'guides' },
      ] },
      likes: { create: [
        { author: { connect: { id: USER1_ID } } },
        { author: { connect: { id: USER2_ID } } },
      ] },
    },
    {
      id: 'ef837c5a-a953-11ee-817e-0242ac130002',
      author: { connect: { id: USER4_ID } },
      postType: 'PHOTO',
      payload: {
        url: 'https://docs.nestjs.com/assets/logo-small.svg',
      },
      comments: { create: [
        { author: { connect: { id: USER3_ID } }, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      ] },
      tags: { connect: [
        { text: 'coding' },
        { text: 'javascript' },
      ] },
      likes: { create: [
        { author: { connect: { id: USER1_ID } } },
        { author: { connect: { id: USER2_ID } } },
        { author: { connect: { id: USER3_ID } } },
      ] },
    },
    {
      id: 'c72f8b80-a954-11ee-817e-0242ac130002',
      author: { connect: { id: USER3_ID } },
      postType: 'LINK',
      payload: {
        url: 'https://stateofjs.com',
        desc: 'The annual developer survey of the JavaScript ecosysytem',
      },
      comments: { create: [
        { author: { connect: { id: USER1_ID } }, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { author: { connect: { id: USER2_ID } }, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      ] },
      tags: { connect: [
        { text: 'coding' },
        { text: 'javascript' },
        { text: 'vue' },
        { text: 'react' },
        { text: 'next.js' },
      ] },
      likes: { create: [
        { author: { connect: { id: USER1_ID } } },
        { author: { connect: { id: USER2_ID } } },
        { author: { connect: { id: USER4_ID } } },
        { author: { connect: { id: USER5_ID } } },
      ] },
    },
    {
      id: 'dd569784-de58-41e4-a4ba-92f7d497c5ea',
      author: { connect: { id: USER3_ID } },
      postType: 'TEXT',
      postStatus: 'DRAFT',
      payload: {
        title: 'SolidStart: A Different Breed Of Meta-Framework',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque.',
      },
      tags: { connect: [
        { text: 'javascript' },
        { text: 'api' },
        { text: 'frameworks' },
      ] },
    },
    {
      id: '1bf6fceb-3a1a-464e-a320-1feb2cbd7f29',
      author: { connect: { id: USER3_ID } },
      owner: { connect: { id: USER1_ID } },
      ownerPost: { connect: { id: '6d308040-96a2-4162-bea6-2338e9976540' } },
      reposted: true,
      postType: 'VIDEO',
      payload: {
        title: 'JavaScript за 21 день',
        url: 'https://youtube.com/watch?v=8ybW48rKBME',
      },
      tags: { connect: [
        { text: 'javascript' },
        { text: 'coding' },
        { text: 'guides' },
      ] },
    },
  ];
}
