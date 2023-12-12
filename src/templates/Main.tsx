import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  className?: string;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full font-roboto text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto w-full">
        <main className="text-xl">{props.children}</main>
      </div>
    </div>
  );
};

export { Main };
