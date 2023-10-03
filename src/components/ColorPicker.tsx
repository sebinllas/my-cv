import React from 'react';

const colors = [
  '#6B7280',
  '#EF4444',
  '#F59E0B',
  '#10B981',
  '#3B82F6',
  '#6366F1',
  '#8B5CF6',
  '#EC4899',
];

interface ColorPickerProps {
  onChange: (color: string) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <>
      {colors.map((color) => (
        <button
          key={color}
          style={{
            backgroundColor: color,
          }}
          className='rounded-full h-12 w-12'
          onClick={() => {
            onChange(color);
          }}
        />
      ))}
    </>
  );
};
