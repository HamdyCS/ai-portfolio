export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container px-5 mx-auto w-full md:max-w-7xl">{children}</div>
  );
}
