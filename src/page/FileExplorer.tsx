import React, { useState } from 'react';
import TreeNode from './TreeNode';
import { fileTreeData } from './FileData';

const FileExplorer: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div>
      <h2>📁 File Explorer</h2>
      {fileTreeData.map(node => (
        <TreeNode
          key={node.name}
          node={node}
          onSelect={setSelected}
          selected={selected}
        />
      ))}
      <div style={{ marginTop: '1rem', fontStyle: 'italic' }}>
        Selected: <strong>{selected || 'None'}</strong>
      </div>
    </div>
  );
};

export default FileExplorer;
