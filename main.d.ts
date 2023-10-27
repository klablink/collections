import { Mongo } from "meteor/mongo";

declare namespace quave.collections {
  export function createCollection<T>(name: string): Mongo.Collection<T>;
}
