'use client';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Separator } from './ui/separator';
import { Billboard } from '@prisma/client';

interface BillboardClientProps {
  data: Billboard[];
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  const pushToNewBillboard = () => {
    router.push(`/${params.storeId}/billboards/new`);
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Billboards (${data.length})`}
          description='Managed billboards for your store'
        />
        <Button onClick={pushToNewBillboard}>
          <Plus className='w-4 h-4 mr-2' />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};
export default BillboardClient;
