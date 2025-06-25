import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AlertCircle, ArrowLeft, MailIcon } from "lucide-react";
import Link from "next/link";

export default async function VerifyPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <Card className="w-[380px] px-5">
                <CardHeader className="text-center">
                    <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-blue-100">
                        <MailIcon className="size-12 text-blue-500" />
                    </div>

                    <CardTitle className="text-2xl font-bold">
                        Check your Email
                    </CardTitle>
                    <CardDescription>
                        We have sent a verification link to your email address
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="mt-4 rounded-md bg-yellow-50 border-yellow-300 p-4 flex items-center gap-x-2">
                        <AlertCircle className="size-4 text-yellow-500" />
                        <p className="text-sm font-medium text-yellow-700">
                            Be sure to check your spam folder!
                        </p>
                    </div>
                </CardContent>

                <CardFooter>
                    <Link
                        href="/login"
                        className={buttonVariants({
                            className: "w-full",
                            variant: "outline",
                        })}
                    >
                        <ArrowLeft className="size-4 mr-2" /> Back to homepage
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
