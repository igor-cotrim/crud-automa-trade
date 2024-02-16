import { unstable_noStore as noStore } from "next/cache";

import { api } from "@/trpc/server";
import { Table, CreateUserForm } from "@/components";

export default async function Home() {
  noStore();

  const data = await api.user.getAll.query();

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container flex flex-col gap-12 px-4 py-16 ">
        <div className="flex w-full flex-1 flex-col items-end justify-center gap-4">
          <CreateUserForm />
          <Table data={data ?? []} />
        </div>
      </div>
    </main>
  );
}
