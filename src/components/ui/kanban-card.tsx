import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Badge } from './badge';
import { BadgeThemeForTeam } from '@/common/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface KanbanCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    KanbanCardType {
  index: number;
}

export const KanbanCard = forwardRef<HTMLDivElement, KanbanCardProps>(
  (
    {
      className,
      taskTitle,
      teamName,
      ticketID,
      tags,
      assignees,
      index,
      ...args
    },
    ref,
  ) => {
    return (
      <motion.div
        initial={{
          y: (index + 1) * 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
        }}
        whileTap={{
          rotate: -4,
        }}>
        <div
          ref={ref}
          className={cn(
            'kanban-card bg-white rounded-lg shadow-sm py-4 px-4 cursor-pointer hover:shadow-lg transition-all active:scale-90 select-none',
            className,
          )}
          id={`${taskTitle.replaceAll(' ', '-')}-${ticketID}`}
          {...args}>
          <Badge theme={BadgeThemeForTeam[teamName]} className="mb-2">
            {teamName}
          </Badge>
          <p className="kanban-card-title text-sm font-medium">{taskTitle}</p>
          <div className="my-3 flex flex-row items-center justify-between">
            <p className="kanban-card-ticket-id-wrapper text-xs uppercase text-gray-400 font-medium">
              {`Ticket #${ticketID}`}
            </p>
            <div className="flex flex-row items-center justify-end gap-0">
              {assignees.map(({ username, avatar }, index) => {
                return (
                  <Image
                    key={index}
                    src={avatar}
                    alt={username}
                    width={24}
                    height={24}
                    className="rounded-full even:ml-[-4px]"
                    priority
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            {tags?.map((tag: string, index: number) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
        </div>
      </motion.div>
    );
  },
);

KanbanCard.displayName = 'KanbanCard';
