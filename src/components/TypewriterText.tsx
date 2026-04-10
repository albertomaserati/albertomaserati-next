'use client';

import { useState, useEffect } from 'react';

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPING = 1800;
const PAUSE_AFTER_DELETING = 400;

export default function TypewriterText({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    if (!isDeleting && displayed === currentText) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed === '') {
      const t = setTimeout(() => {
        setIndex(i => (i + 1) % texts.length);
        setIsDeleting(false);
      }, PAUSE_AFTER_DELETING);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setDisplayed(isDeleting
        ? displayed.slice(0, -1)
        : currentText.slice(0, displayed.length + 1)
      );
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(t);
  }, [displayed, index, isDeleting, texts]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}
