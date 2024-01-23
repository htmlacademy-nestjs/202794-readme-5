export enum RabbitRouting {
  /** Зарегистрирован новый пользователь */
  UserSingup = 'NOTIFY.USER_SINGUP',
  /** Пользователь подписался на рассылку */
  UserSubscribe = 'NOTIFY.USER_SUBSCRIBE',
  /** Появились новые публикации */
  PostsPublished = 'NOTIFY.POSTS_PUBLISHED',
}
