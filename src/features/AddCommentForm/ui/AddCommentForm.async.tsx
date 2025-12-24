import { FC, lazy } from 'react';
import { AddCommentFormProps } from 'features/AddCommentForm/ui/AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>> (
  () => new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve(import('./AddCommentForm'));
    }, 1500);
  }));