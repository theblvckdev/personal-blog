import Logo from "@/components/common/logo";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="h-screen w-screen bg-white md:px-0 px-3 flex items-center justify-center">
        <section className="w-full max-w-sm">
          {" "}
          <div className="w-fit mx-auto">
            <Logo />
          </div>{" "}
          <div className="mt-5">{children}</div>
        </section>
      </main>
    </>
  );
}
