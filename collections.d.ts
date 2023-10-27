// @ts-ignore
import {Mongo} from 'meteor/mongo'

declare module "meteor/quave:collections" {

    function createCollection(options: Object): Mongo.Collection
}

