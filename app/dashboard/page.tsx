import { signOut } from "../utils/auth";
import { requireUser } from "../utils/hooks";

export default async function DashboardPage() {
    const session = await requireUser();
    return (
        <div className="">
            <h1 className="text-2xl">Dashboard</h1>
            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <button type="submit">Sign Out</button>
            </form>
        </div>
    );
}
