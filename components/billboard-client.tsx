import { Plus } from 'lucide-react';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Separator } from './ui/separator';

const BillboardClient = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title='Billboards (0)'
          description='Managed billboards for your store'
        />
        <Button>
          <Plus className='w-4 h-4 mr-2' />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  );
};
export default BillboardClient;
