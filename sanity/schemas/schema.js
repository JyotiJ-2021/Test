import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import category from "./category";
import restaurant from "./restaurant";
import dish from "./dish";
import featured from "./featured";
import meaasge from "./meaasge";
import figure from "./figure";
import categorylist from "./categorylist";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    restaurant,
    dish,
    category,
    featured,
    meaasge,
    figure,
    categorylist,
  ]),
});
