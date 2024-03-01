import BreadCrumb from "@/components/breadcrumb";
import { users } from "@/constants/data";
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m1@example.com",
    },
    {
      id: "728ed52e",
      amount: 200,
      status: "pending",
      email: "m2@example.com",
    },
    {
      id: "728ed52g",
      amount: 300,
      status: "pending",
      email: "m3@example.com",
    },
    {
      id: "728ed52h5",
      amount: 400,
      status: "pending",
      email: "m4@example.com",
    },
    {
      id: "728ed52f4",
      amount: 100,
      status: "pending",
      email: "m14@example.com",
    },
    {
      id: "728ed52e3",
      amount: 200,
      status: "pending",
      email: "m23@example.com",
    },
    {
      id: "728ed52g2",
      amount: 300,
      status: "pending",
      email: "m32@example.com",
    },
    {
      id: "728ed52h1",
      amount: 400,
      status: "pending",
      email: "m41@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m1@example.com",
    },
    {
      id: "728ed52e",
      amount: 200,
      status: "pending",
      email: "m2@example.com",
    },
    {
      id: "728ed52g",
      amount: 300,
      status: "pending",
      email: "m3@example.com",
    },
    {
      id: "728ed52h5",
      amount: 400,
      status: "pending",
      email: "m4@example.com",
    },
    {
      id: "728ed52f4",
      amount: 100,
      status: "pending",
      email: "m14@example.com",
    },
    {
      id: "728ed52e3",
      amount: 200,
      status: "pending",
      email: "m23@example.com",
    },
    {
      id: "728ed52g2",
      amount: 300,
      status: "pending",
      email: "m32@example.com",
    },
    {
      id: "728ed52h1",
      amount: 400,
      status: "pending",
      email: "m41@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />
      <DataTable columns={columns} data={data} />
    </div>
  )
}
