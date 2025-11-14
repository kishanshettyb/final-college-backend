import type { Schema, Struct } from '@strapi/strapi';

export interface SubjectmarkMark extends Struct.ComponentSchema {
  collectionName: 'components_subjectmark_marks';
  info: {
    displayName: 'mark';
  };
  attributes: {};
}

export interface SubjectmarkSubjectmark extends Struct.ComponentSchema {
  collectionName: 'components_subjectmark_subjectmarks';
  info: {
    displayName: 'subjectmark';
    icon: 'layer';
  };
  attributes: {
    external_mark: Schema.Attribute.Integer;
    internal_mark: Schema.Attribute.Integer;
    subjects: Schema.Attribute.Relation<'oneToMany', 'api::subject.subject'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'subjectmark.mark': SubjectmarkMark;
      'subjectmark.subjectmark': SubjectmarkSubjectmark;
    }
  }
}
