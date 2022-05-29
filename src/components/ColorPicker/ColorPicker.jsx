import { Badge, Button, Select, Stack } from '@chakra-ui/react';
import { useId } from 'react';

const ColorPicker = ({ label, onChange, value }) => {
  const id = useId();
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
  ];

  return (
    <Stack width="100%">
      <label htmlFor={id}><Badge>{label}</Badge></label>
      <Select
        id={id}
        value={value}
        onChange={onChange}
      >
        {colors.map(color => (
          <option value={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</option>
        ))}
      </Select>
      <Button colorScheme={value} h={2} aria-hidden="true" pointerEvents="none" tabIndex="-1" />
    </Stack>
  );
};

export default ColorPicker;