import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Dealership {
    name: string;
    statusLabel: string;
    ratingLabel: string;
}

interface DealershipTableProps {
    dealerships: Dealership[];
}

export function DealershipTable({ dealerships }: DealershipTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {dealerships.map((dealership, index) => (
                    <TableRow key={index}>
                        <TableCell>{dealership.name}</TableCell>
                        <TableCell>{dealership.statusLabel}</TableCell>
                        <TableCell>{dealership.ratingLabel}</TableCell>
                        <TableCell className="text-right">
                            <Button variant="outline">View</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
