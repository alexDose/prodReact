import cls from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
  error?: string
}

const CommentListComponent = ({ className, comments, isLoading, error }: CommentListProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard isLoading={isLoading} key={comment.id} comment={comment}/>
        ))
        : <Text text={t('No comments')}/>
      }
    </div>
  );
};

export const CommentList = memo(CommentListComponent);