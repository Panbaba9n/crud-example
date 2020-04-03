import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';


const entityMetadata: EntityMetadataMap = {
  Article: {}
};

const pluralNames = { Article: 'Article' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
