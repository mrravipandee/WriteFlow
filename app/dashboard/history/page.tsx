import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq, desc } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import Templates from "@/app/(data)/Templates";
import HistoryTable from "./HistoryTable";

const Page = async () => {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  if (!email) {
    return (
      <div className="p-5 text-red-500 text-center font-semibold">
        ❌ User not logged in or email not verified.
      </div>
    );
  }

  const rawHistoryList = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, email))
    .orderBy(desc(AIOutput.createdAt));

  const historyList = rawHistoryList.map((item: any) => ({
    ...item,
    aiResponse: item.aiResponse ?? "",
    createdAt: item.createdAt ?? "",
    formData: item.formData ?? "",
    templateSlug: item.templateSlug ?? "",
    createdBy: item.createdBy ?? "",
  }));

  return <HistoryTable historyList={historyList} templates={Templates} />;
};

export default Page;
