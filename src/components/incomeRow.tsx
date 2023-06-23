import * as React from 'react';

import { AddIncomeType } from '@/components/forms/addIncome';
import AddIncome from '@/components/forms/addIncome';

import DeleteIcon from '@/assets/icons/delete';
import Pencil from '@/assets/icons/pencil';
import { userActions } from '@/redux/slices/userSlice';
import { useAppDispatch } from '@/redux/store';

export default function IncomeRow({ obj }: { obj: AddIncomeType }) {
  const dispatch = useAppDispatch();
  const [isMouseIn, setIsMouseIn] = React.useState(false);
  const [isEdited, setIsEdited] = React.useState(false);

  const closeIncomeFormCB = (value: boolean) => {
    setIsEdited(value);
  };

  return (
    <tr
      className='even:bg-subDark relative'
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
    >
      {isEdited ? (
        <td colSpan={4}>
          <AddIncome closeForm={closeIncomeFormCB} changedIncome={obj} />
        </td>
      ) : (
        <>
          <td className='p-6 '>{obj.jobTitle}</td>
          <td>{obj.currency}</td>
          <td>{obj.incomeDate}</td>
          <td>{obj.ammount}</td>
        </>
      )}

      {isMouseIn && (
        <button
          className='absolute right-4 top-3'
          onClick={() => setIsEdited((prev) => !prev)}
        >
          <Pencil />
        </button>
      )}
      {isMouseIn && (
        <button
          className='absolute bottom-3 right-4'
          onClick={() => dispatch(userActions.deleteIncome(obj.id))}
        >
          <DeleteIcon />
        </button>
      )}
    </tr>
  );
}
