import Header from './Header';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => (
  <>
    <Header />
    <div className='mx-auto max-w-[960px] p-0'>
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
