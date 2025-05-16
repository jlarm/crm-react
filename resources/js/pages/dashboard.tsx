import { DealershipTable } from '@/components/dealership/DealershipTable';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Dealership {
    id: number;
    name: string;
    statusLabel: string;
    ratingLabel: string;
}

interface DashboardProps {
    dealerships: {
        data: Dealership[];
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dealerships',
        href: '/dashboard',
    },
];

export default function Dashboard({ dealerships }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                    <DealershipTable dealerships={dealerships.data} />
                </div>
            </div>
        </AppLayout>
    );
}
