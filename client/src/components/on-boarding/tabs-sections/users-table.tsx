import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { employees } from "@/data/fake-users-data";
import { cn } from "@/lib/utils";

type UsersTableProps = {
  toggleSelectRow: (id: string | number | null) => void;
  selectedRow?: string | number | null;
};

export default function UsersTable({
  toggleSelectRow,
  selectedRow,
}: UsersTableProps) {
  return (
    <Table className="">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[20px]">SL</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee, idx) => (
          <TableRow
            key={idx}
            onClick={() => toggleSelectRow(idx + 1)}
            className={cn(selectedRow === idx + 1 && "bg-muted/70")}
          >
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell
              className={cn(
                "text-right font-medium capitalize",
                employee.role === "admin" && "text-rose-500",
                employee.role === "editor" && "text-yellow-500",
              )}
            >
              {employee.role}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
