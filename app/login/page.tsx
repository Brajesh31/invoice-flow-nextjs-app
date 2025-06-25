import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import { SubmitButton } from "../components/SubmitButton";
import { auth, signIn } from "../utils/auth";

export default async function LoginPage() {
    const session = await auth();

    if (session?.user) {
        redirect("/dashboard");
    }

    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center px-4">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">
                            Login
                        </CardTitle>
                        <CardDescription>
                            Enter your credentials to login into your account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form
                            action={async (formData) => {
                                "use server";
                                await signIn("nodemailer", formData);
                            }}
                            className="flex flex-col gap-y-4"
                        >
                            <div className="flex flex-col gap-y-2">
                                <Label>Email</Label>
                                <Input
                                    placeholder="hello@hello.com"
                                    name="email"
                                    type="email"
                                    required
                                />
                            </div>
                            <SubmitButton text="Login" />
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
