export type EntityId = string | object;

/**
 * Базовая сущность с уникальным идентификатором
 */
export interface IEntity<T extends EntityId = EntityId> {
  id?: T;
}
