export interface FileNodeBase {
  name: string;
  type: 'file' | 'folder';
}

export interface FileItem extends FileNodeBase {
  type: 'file';
}

export interface FolderItem extends FileNodeBase {
  type: 'folder';
  children: FileNode[];
}

export type FileNode = FileItem | FolderItem;
