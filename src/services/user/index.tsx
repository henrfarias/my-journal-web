export interface Tag {
  id: string;
  name: string;
  authorId: string;
  hexColor: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserMessage {
  id: string;
  body: string;
  authorId: string;
  tagId?: string;
  attachmentId?: string;
  createdAt: Date;
  updatedAt: Date;
  tag: Tag;
}

export const getUserMessages = async (userId: string): Promise<UserMessage[]> => {
  return [
    {
      authorId: "authorId",
      body: "Journal da cidade de nova york",
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'messageId',
      attachmentId: "attachmentId",
      tagId: "tagId",
      tag: { hexColor: '#32FA89', authorId:"authorId", createdAt: new Date(), updatedAt: new Date(), id: "tagId", name: "triste" }
    },
    {
      authorId: "authorId",
      body: "Journal da cidade de nova york",
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'messageId',
      attachmentId: "attachmentId",
      tagId: "tagId",
      tag: { hexColor: '#32FA89', authorId:"authorId", createdAt: new Date(), updatedAt: new Date(), id: "tagId", name: "triste" }
    },
    {
      authorId: "authorId",
      body: "Journal da cidade de nova york",
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'messageId',
      attachmentId: "attachmentId",
      tagId: "tagId",
      tag: { hexColor: '#32FA89', authorId:"authorId", createdAt: new Date(), updatedAt: new Date(), id: "tagId", name: "triste" }
    },
    {
      authorId: "authorId",
      body: "Journal da cidade de nova york",
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'messageId',
      attachmentId: "attachmentId",
      tagId: "tagId",
      tag: { hexColor: '#32FA89', authorId:"authorId", createdAt: new Date(), updatedAt: new Date(), id: "tagId", name: "triste" }
    },
    {
      authorId: "authorId",
      body: "Journal da cidade de nova york",
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'messageId',
      attachmentId: "attachmentId",
      tagId: "tagId",
      tag: { hexColor: '#32FA89', authorId:"authorId", createdAt: new Date(), updatedAt: new Date(), id: "tagId", name: "triste" }
    },
    {
      authorId: "authorId",
      body: "Journal da cidade de nova york",
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'messageId',
      attachmentId: "attachmentId",
      tagId: "tagId",
      tag: { hexColor: '#32FA89', authorId:"authorId", createdAt: new Date(), updatedAt: new Date(), id: "tagId", name: "triste" }
    }
  ];
}

export const getUserTags = async (userId: string): Promise<Tag[]> => {
  return [
    {authorId: "authorId", name: "Tag 1", createdAt: new Date(), updatedAt: new Date(), hexColor: "#990000", id: "id"},
    {authorId: "authorId", name: "Tag 2", createdAt: new Date(), updatedAt: new Date(), hexColor: "#000099", id: "id"},
    {authorId: "authorId", name: "Tag 3", createdAt: new Date(), updatedAt: new Date(), hexColor: "#009900", id: "id"},
    {authorId: "authorId", name: "Tag 1", createdAt: new Date(), updatedAt: new Date(), hexColor: "#990000", id: "id"},
    {authorId: "authorId", name: "Tag 2", createdAt: new Date(), updatedAt: new Date(), hexColor: "#000099", id: "id"},
    {authorId: "authorId", name: "Tag 3", createdAt: new Date(), updatedAt: new Date(), hexColor: "#009900", id: "id"},
    {authorId: "authorId", name: "Tag 1", createdAt: new Date(), updatedAt: new Date(), hexColor: "#990000", id: "id"},
    {authorId: "authorId", name: "Tag 2", createdAt: new Date(), updatedAt: new Date(), hexColor: "#000099", id: "id"},
    {authorId: "authorId", name: "Tag 3", createdAt: new Date(), updatedAt: new Date(), hexColor: "#009900", id: "id"},
    {authorId: "authorId", name: "Tag 1", createdAt: new Date(), updatedAt: new Date(), hexColor: "#990000", id: "id"},
    {authorId: "authorId", name: "Tag 2", createdAt: new Date(), updatedAt: new Date(), hexColor: "#000099", id: "id"},
    {authorId: "authorId", name: "Tag 3", createdAt: new Date(), updatedAt: new Date(), hexColor: "#009900", id: "id"},
    
  ]
}