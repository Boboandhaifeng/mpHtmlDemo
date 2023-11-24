import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>text</Text>
      <View style={{ width: "100%" }}>
        <mpHtml
          // containerStyle={"background-color: #fff;font-size: 32rpx !important;color: #333333; "}
          content='<div>Hello World!</div>'
          // copyLink={false}
          // lazyLoad={true}
          // setTitle={false}
        ></mpHtml>
      </View>
    </View>
  )
}
