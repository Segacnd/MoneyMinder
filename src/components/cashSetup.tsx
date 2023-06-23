import { motion } from 'framer-motion';
import * as React from 'react';

import DailyLimit from '@/components/dailyLimit';
import HelperViewer from '@/components/hocs/helperViewer';
import SaveEachMonth from '@/components/saveEachMonth';
import SelectCurrency from '@/components/selectCurrency';

import { baseShowAnimation } from '@/animations/animations';

export default function CashSetup() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={baseShowAnimation}
      className='flex h-[120px] w-full items-center gap-4 rounded-2xl bg-black p-6 text-white'
    >
      <HelperViewer>
        <SelectCurrency />
      </HelperViewer>

      <HelperViewer>
        <DailyLimit />
      </HelperViewer>

      <HelperViewer>
        <SaveEachMonth />
      </HelperViewer>
    </motion.div>
  );
}
