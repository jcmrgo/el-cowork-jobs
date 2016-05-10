
Posts.addField(
  {
    fieldName: 'jobLocation',
    fieldSchema: {
      type: String,
      optional: true, // this field is not required
      insertableIf: Users.is.memberOrAdmin, // insertable by regular logged in users and admins
      editableIf: Users.is.ownerOrAdmin, // editable by the post's owner or admins
      publish: true, // make that field public and send it to the client
      order: 3
    }
  }
);

/*
The main post list view uses a special object to determine which fields to publish,
so we also add our new field to that object:
*/

import PublicationUtils from 'meteor/utilities:smart-publications';

PublicationUtils.addToFields(Posts.publishedFields.list, ["jobLocation"]);