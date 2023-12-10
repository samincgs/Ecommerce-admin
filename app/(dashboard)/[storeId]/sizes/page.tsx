import BillboardClient from '@/app/(dashboard)/[storeId]/billboards/components/billboard-client';
import { BillboardColumn } from '@/app/(dashboard)/[storeId]/billboards/components/columns';
import prismadb from '@/lib/prismadb';
import { format } from 'date-fns';

const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedSizes: BillboardColumn[] = sizes.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BillboardClient data={formattedSizes} />
      </div>
    </div>
  );
};
export default SizesPage;
