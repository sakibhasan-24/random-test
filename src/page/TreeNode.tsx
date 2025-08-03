import React, { useState } from 'react';
import type { FileNode } from './FileNode';
interface TreeNodeProps {
  node: FileNode;
  level?: number;
  onSelect: (name: string) => void;
  selected: string;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, level = 0, onSelect, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSelected = selected === node.name;

  const paddingLeft = 20 * level;

  const handleClick = () => {
    onSelect(node.name);
    if (node.type === 'folder') {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <div style={{ paddingLeft, cursor: 'pointer' }}>
      <div
        onClick={handleClick}
        style={{
          fontWeight: node.type === 'folder' ? 'bold' : 'normal',
          backgroundColor: isSelected ? '#e0f7fa' : 'transparent'
        }}
      >
        {node.type === 'folder' ? (isOpen ? '📂' : '📁') : '📄'} {node.name}
      </div>

      {isOpen && node.type === 'folder' && node.children.map(child => (
        <TreeNode
          key={child.name}
          node={child}
          level={level + 1}
          onSelect={onSelect}
          selected={selected}
        />
      ))}
    </div>
  );
};

export default TreeNode;
