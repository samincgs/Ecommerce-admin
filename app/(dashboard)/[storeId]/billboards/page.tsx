import BillboardClient from '@/app/(dashboard)/[storeId]/billboards/components/billboard-client';
import { BillboardColumn } from '@/app/(dashboard)/[storeId]/billboards/components/columns';
import prismadb from '@/lib/prismadb';
import { format } from 'date-fns';

const BillboardPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  console.log(formattedBillboards);

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};
export default BillboardPage;
