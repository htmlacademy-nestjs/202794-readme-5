export type EntityId = string;

/**
 * Базовая сущность с уникальным идентификатором
 */
export interface IEntity<T extends EntityId = EntityId> {
  id?: T;
}
