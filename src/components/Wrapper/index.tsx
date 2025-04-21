import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <article className="flex flex-col gap-4 h-screen overflow-hidden">
      <header className="bg-purple-900 w-full px-10 py-2">
        <h1 className="text-white text-xl">Taskio</h1>
      </header>
      <main className="flex px-6 flex-1 overflow-hidden h-full mb-8">{children}</main>
    </article>
  );
};

export default Wrapper;
