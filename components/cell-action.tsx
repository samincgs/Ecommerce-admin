'use client';

import { BillboardColumn } from '@/components/columns';

interface CellActionProps {
  data: BillboardColumn; //added array
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return <div>CellAction</div>;
};
export default CellAction;
