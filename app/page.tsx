// Components
import Form from "@/components/Form";
import Logo from "@/components/Logo";
import PackingList from "@/components/PackingList";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <div className="@container min-h-screen w-full bg-background">
        <div className="flex flex-col items-center  px-4 sm:px-6 md:px-8 py-12 max-w-7xl mx-auto min-h-screen">
          <Logo />
          <div className="mt-8 text-center">
            <h1 className="text-green-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Welcome to Far Edge Collection
            </h1>
          </div>
          <div className="bg-yellow-400 w-full lg:w-full sm:w-2xl mx-auto mt-8 p-10 rounded-lg shadow-lg">
            <Form />
          </div>
          <div className="bg-gray-400 w-full lg:w-full sm:w-2xl mx-auto mt-8 p-10 rounded-lg shadow-lg">
            <PackingList />
          </div>

          <Stats />
        </div>
      </div>
    </>
  );
}
