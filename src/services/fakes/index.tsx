export interface Tag {
  id: string
  name: string
  hexColor: string
  authorId?: string
  createdAt: string
  updatedAt: string
}

export interface ThoughtList {
  page: number
  count: number
  data: ThoughtListData[]
}

export interface ThoughtListData {
  id: string
  body: string
  authorId: string
  tagId: string | null
  attachments: string | null
  createAt: string
  updatedAt: string
  tag: Tag | null
}

export const getThoughtLists = async (): Promise<ThoughtList> => {
  return {
    page: 1,
    count: 3,
    data: [
      {
        id: '3471c3bb-739b-4605-9652-fb64d99b6047',
        body: 'Penso, logo existo. Mas estou em dúvidas se sei de algo... Acredito nada saber. Essa frase é de um filósofo muito famoso com síndrome do impostor;',
        authorId: 'userId',
        tagId: null,
        attachments: null,
        createAt: '2023-02-05T03:50:54.191Z',
        updatedAt: '2023-02-05T21:21:26.289Z',
        tag: null,
      },
      {
        id: '5c97ada8-a6d1-4acf-ba40-de7a03e7b720',
        body: 'Pensamento teste',
        authorId: 'userId',
        tagId: '379d7283-bbbe-4359-a849-90653524ad63',
        attachments: 'url1,url2,url3',
        createAt: '2023-02-05T03:51:24.137Z',
        updatedAt: '2023-02-05T03:51:24.137Z',
        tag: {
          id: '379d7283-bbbe-4359-a849-90653524ad63',
          name: 'Felizes',
          authorId: 'userId',
          hexColor: '#f00c0c',
          createdAt: '2023-02-05T03:51:24.131Z',
          updatedAt: '2023-02-05T03:51:24.131Z',
        },
      },
      {
        id: 'e757505c-faaf-4aa8-a81f-8bc02bf45388',
        body: 'Pensamento teste',
        authorId: '0b4ab068-2685-44e0-98e6-69cfd622b5d8',
        tagId: null,
        attachments: null,
        createAt: '2023-02-05T03:47:31.945Z',
        updatedAt: '2023-02-05T03:47:31.945Z',
        tag: null,
      },
      
    ],
  }
}

export const getUserTags = async (): Promise<Tag[]> => {
  return [
    {
      id: '379d7283-bbbe-4359-a849-90653524ad63',
      name: 'Felizes',
      hexColor: '#f00c0c',
      createdAt: '2023-02-05T03:51:24.131Z',
      updatedAt: '2023-02-05T03:51:24.131Z',
    },
    {
      id: '722614d6-52bc-4966-8c95-0f617fa2710c',
      name: 'Tristeza',
      hexColor: '#777',
      createdAt: '2023-02-05T21:21:26.279Z',
      updatedAt: '2023-02-05T22:22:16.369Z',
    },
  ]
}
