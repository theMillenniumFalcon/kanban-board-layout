import { forwardRef, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { Draggable, Droppable } from 'react-beautiful-dnd';

export interface KanbanListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    KanbanListType {
  index: number;
  children?: ReactNode;
}

export const KanbanList = forwardRef<HTMLDivElement, KanbanListProps>(
  ({ className, listItems = [], listName, index, ...args }, ref) => {
    return (
      <div>
        <div className="kanban-list-details-wrapper px-2 mb-2">
          <p className="leading-snug font-medium tracking-tight text-gray-500 text-sm">
            {listName}
          </p>
        </div>
        <Droppable droppableId={listName} key={listName}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={cn(
                'kanban-list p-2 border-b-4 border-transparent rounded-xl bg-gray-100/80 min-w-[280px] w-fit max-w-[300px] h-[600px] overflow-y-scroll',
                className,
              )}
              {...args}
            >
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  },
);

KanbanList.displayName = 'KanbanList';