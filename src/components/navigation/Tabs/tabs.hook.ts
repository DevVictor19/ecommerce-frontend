import { useState } from 'react';

export function useTabs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    handleChangeIndex,
  };
}
