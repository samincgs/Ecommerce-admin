'use client';

import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import { Copy, Edit, MoreHorizontal, Trash2 } from 'lucide-react';

import { BillboardColumn } from '@/components/columns';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface CellActionProps {
  data: BillboardColumn; //added array
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success('Billboard id copied to clipboard.');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='w-4 h-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onCopy(data.id)}>
          <Copy className='w-4 h-4 mr-2' />
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit className='w-4 h-4 mr-2' />
          Update
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash2 className='w-4 h-4 mr-2' />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CellAction;
