"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { SubmitButton } from "../components/SubmitButton";
import { useActionState } from "react";
import { onboardUser } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { onboardingSchema } from "../utils/zodShemas";

export default function Onboarding() {
    const [lastResult, action] = useActionState(onboardUser, undefined);

    const [form, fields] = useForm({
        lastResult,

        onValidate({ formData }) {
            return parseWithZod(formData, {
                schema: onboardingSchema,
            });
        },

        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    });

    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <Card className="w-[400px] max-w-sm mx-auto">
                <CardHeader>
                    <CardTitle className="text-xl">
                        You are almost finished!
                    </CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form
                        className="grid gap-4"
                        action={action}
                        id={form.id}
                        onSubmit={form.onSubmit}
                        noValidate
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <Label>First Name</Label>
                                <Input
                                    name={fields.firstName.name}
                                    key={fields.firstName.key}
                                    defaultValue={fields.firstName.initialValue}
                                    placeholder="John"
                                />
                                <p className="text-red-500">
                                    {fields.firstName.errors}
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Last Name</Label>
                                <Input
                                    name={fields.lastName.name}
                                    key={fields.lastName.key}
                                    defaultValue={fields.lastName.initialValue}
                                    placeholder="Doe"
                                />
                                <p className="text-red-500">
                                    {fields.lastName.errors}
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label>Address</Label>
                            <Input
                                name={fields.address.name}
                                key={fields.address.key}
                                defaultValue={fields.address.initialValue}
                                placeholder="Chad street 123"
                            />
                            <p className="text-red-500">
                                {fields.address.errors}
                            </p>
                        </div>

                        <SubmitButton text="Finish onboarding" />
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
