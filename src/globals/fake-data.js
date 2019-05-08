const date = (new Date()).toISOString();

export const pages = {
  page: {
    id: 1,
    content: {
      raw: '',
      rendered: '',
    },
    date,
    date_gmt: date,
    title: {
      raw: 'Preview page',
      rendered: 'Preview page',
    },
    excerpt: {
      raw: '',
      rendered: '',
    },
    status: 'draft',
    revisions: { count: 0, last_id: 0 },
    parent: 0,
    theme_style: true,
    type: 'page',
    link: `${window.location.origin}/preview`,
    categories: [ ],
    featured_media: 0,
    permalink_template: `${window.location.origin}/preview`,
    preview_link: `${window.location.origin}/preview`,
    _links: {
      'wp:action-assign-categories': [],
      'wp:action-create-categories': [],
    },
  },
  post: {
    id: 1,
    content: {
      raw: '',
      rendered: '',
    },
    date,
    date_gmt: date,
    title: {
      raw: 'Preview post',
      rendered: 'Preview post',
    },
    excerpt: {
      raw: '',
      rendered: '',
    },
    status: 'draft',
    revisions: { count: 0, last_id: 0 },
    parent: 0,
    theme_style: true,
    type: 'post',
    link: `${window.location.origin}/preview`,
    categories: [ ],
    featured_media: 0,
    permalink_template: `${window.location.origin}/preview`,
    preview_link: `${window.location.origin}/preview`,
    _links: {
      'wp:action-assign-categories': [],
      'wp:action-create-categories': [],
    },
  },
};


export function getPage (type = 'page') {
  return JSON.parse(localStorage.getItem('g-editor-page')) || pages[type];
}


export function savePage (data, type = 'page') {
  const item = {
    ...getPage(type),
    ...data,
    content: {
      raw: data.content,
      rendered: data.content.replace(/(<!--.*?-->)/g, ''),
    },
  };
  localStorage.setItem('g-editor-page', JSON.stringify(item));
}
