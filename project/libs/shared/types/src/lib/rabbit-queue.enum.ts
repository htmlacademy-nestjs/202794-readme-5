export enum RabbitQueue {
  /** Зарегистрирован новый пользователь */
  UserSingup = 'readme.notify.singup',
  /** Пользователь подписался на рассылку */
  UserSubscribe = 'readme.notify.subscribe',
  /** Появились новые публикации */
  PostsPublished = 'readme.notify.published',
}
