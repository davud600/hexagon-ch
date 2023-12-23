import { tabItems } from '@/components/tutorial/helper'
import { Tabs } from 'antd'

export const Tutorial = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="0"
        items={tabItems}
        tabPosition="left"
        tabBarGutter={100}
      />
    </div>
  )
}
