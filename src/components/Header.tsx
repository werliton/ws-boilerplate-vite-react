// Design Patterns: Singleton

import React from "react";

// https://deviq.com/design-patterns/singleton
export const Header = React.memo(() => {
  return (
    <nav className="flex h-14 items-center bg-black p-2 font-black text-green-500">
      WS Medical Records
    </nav>
  );
});
