"use client";
import { cn } from "@/lib/utils";
import { HomeIcon, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { id: 0, name: "Dashboard", href: "/dashboard", icon: HomeIcon },
    {
        id: 1,
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: Users2,
    },
];

export default function DashboardLinks() {
    const pathName = usePathname();
    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.id}
                    href={link.href}
                    className={cn(
                        pathName === link.href
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground",
                        "flex items-center gap-3 rounded-lg px-3 py-3 transition-all hover:text-primary"
                    )}
                >
                    <link.icon className="size-4" />
                    {link.name}
                </Link>
            ))}
        </>
    );
}
