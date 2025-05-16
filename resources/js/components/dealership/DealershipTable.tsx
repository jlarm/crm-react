import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';

interface Dealership {
    name: string;
    statusLabel: string;
    ratingLabel: string;
}

interface DealershipTableProps {
    dealerships: Dealership[];
}

export function DealershipTable({ dealerships }: DealershipTableProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDealerships = dealerships.filter((dealership) => dealership.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="space-y-4">
            <div>
                <Input
                    type="text"
                    placeholder="Search dealerships..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                />
            </div>
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
                    {filteredDealerships.length > 0 ? (
                        filteredDealerships.map((dealership, index) => (
                            <TableRow key={index}>
                                <TableCell>{dealership.name}</TableCell>
                                <TableCell>{dealership.statusLabel}</TableCell>
                                <TableCell>{dealership.ratingLabel}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline">View</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="h-24 text-center">
                                No dealerships found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
