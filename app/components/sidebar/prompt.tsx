import React from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisSolidIcon } from '@heroicons/react/24/solid'
import Button from '@/app/components/base/button'
// import Card from './card'
import type { PromptItem } from '@/types/app'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const MAX_CONVERSATION_LENTH = 50

export type IPromptProps = {
  list1: PromptItem[],
  list2: PromptItem[],
  list3: PromptItem[],
  onCurrentInputChange: (inputs: string) => void
}

const Prompt: FC<IPromptProps> = ({
  list1, list2, list3, onCurrentInputChange
}) => {
  const { t } = useTranslation()
  return (
    <div
      className="shrink-0 flex flex-col overflow-y-auto bg-white pc:w-[244px] tablet:w-[192px] mobile:w-[240px]  border-l border-gray-200 tablet:h-[calc(100vh_-_3rem)] mobile:h-screen"
    >
      <div className="flex flex-shrink-0 p-4 !pb-0">
        <Button
          className="group block w-full flex-shrink-0 !h-9 text-primary-600 items-center text-sm">
          {t('app.chat.title1')}
        </Button>
      </div>

      <nav className="mt-4 flex-1 space-y-1 bg-white p-4 !pt-0">
        {list1.map((item) => {
          const ItemIcon = ChatBubbleOvalLeftEllipsisIcon
          return (
            <div
              onClick={() => onCurrentInputChange(item.name)}
              key={item.id}
              className={classNames(
                'text-gray-700 hover:bg-gray-100 hover:text-gray-700',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium cursor-pointer',
              )}
            >
              <ItemIcon
                className={classNames(
                  'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-5 w-5 flex-shrink-0',
                )}
                aria-hidden="true"
              />
              {item.name}
            </div>
          )
        })}
      </nav>
      <div className="flex flex-shrink-0 p-4 !pb-0">
        <Button
          className="group block w-full flex-shrink-0 !h-9 text-primary-600 items-center text-sm">
          {t('app.chat.title2')}
        </Button>
      </div>

      <nav className="mt-4 flex-1 space-y-1 bg-white p-4 !pt-0">
        {list2.map((item) => {
          const ItemIcon = ChatBubbleOvalLeftEllipsisIcon
          return (
            <div
              onClick={() => onCurrentInputChange(item.name)}
              key={item.id}
              className={classNames(
                'text-gray-700 hover:bg-gray-100 hover:text-gray-700',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium cursor-pointer',
              )}
            >
              <ItemIcon
                className={classNames(
                  'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-5 w-5 flex-shrink-0',
                )}
                aria-hidden="true"
              />
              {item.name}
            </div>
          )
        })}
      </nav>
      <div className="flex flex-shrink-0 p-4 !pb-0">
        <Button
          className="group block w-full flex-shrink-0 !h-9 text-primary-600 items-center text-sm">
          {t('app.chat.title3')}
        </Button>
      </div>

      <nav className="mt-4 flex-1 space-y-1 bg-white p-4 !pt-0">
        {list3.map((item) => {
          const ItemIcon = ChatBubbleOvalLeftEllipsisIcon
          return (
            <div
              onClick={() => onCurrentInputChange(item.name)}
              key={item.id}
              className={classNames(
                'text-gray-700 hover:bg-gray-100 hover:text-gray-700',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium cursor-pointer',
              )}
            >
              <ItemIcon
                className={classNames(
                  'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-5 w-5 flex-shrink-0',
                )}
                aria-hidden="true"
              />
              {item.name}
            </div>
          )
        })}
      </nav>
    </div>

  )
}

export default React.memo(Prompt)
