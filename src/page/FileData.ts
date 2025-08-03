import type { FileNode } from "./FileNode";


export const fileTreeData: FileNode[] = [
  {
    type: 'folder',
    name: 'src',
    children: [
      { type: 'file', name: 'index.tsx' },
      { type: 'file', name: 'App.tsx' },
      {
        type: 'folder',
        name: 'components',
        children: [
          { type: 'file', name: 'Header.tsx' },
          { type: 'file', name: 'Footer.tsx' }
        ]
      }
    ]
  },
  {
    type: 'folder',
    name: 'public',
    children: [
      { type: 'file', name: 'index.html' }
    ]
  }
];
